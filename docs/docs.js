function noop() { }
function add_location(element, file, line, column, char) {
    element.__svelte_meta = {
        loc: { file, line, column, char }
    };
}
function run(fn) {
    return fn();
}
function blank_object() {
    return Object.create(null);
}
function run_all(fns) {
    fns.forEach(run);
}
function is_function(thing) {
    return typeof thing === 'function';
}
function safe_not_equal(a, b) {
    return a != a ? b == b : a !== b || ((a && typeof a === 'object') || typeof a === 'function');
}
function is_empty(obj) {
    return Object.keys(obj).length === 0;
}
function append(target, node) {
    target.appendChild(node);
}
function insert(target, node, anchor) {
    target.insertBefore(node, anchor || null);
}
function detach(node) {
    if (node.parentNode) {
        node.parentNode.removeChild(node);
    }
}
function destroy_each(iterations, detaching) {
    for (let i = 0; i < iterations.length; i += 1) {
        if (iterations[i])
            iterations[i].d(detaching);
    }
}
function element(name) {
    return document.createElement(name);
}
function text(data) {
    return document.createTextNode(data);
}
function space() {
    return text(' ');
}
function listen(node, event, handler, options) {
    node.addEventListener(event, handler, options);
    return () => node.removeEventListener(event, handler, options);
}
function attr(node, attribute, value) {
    if (value == null)
        node.removeAttribute(attribute);
    else if (node.getAttribute(attribute) !== value)
        node.setAttribute(attribute, value);
}
function children(element) {
    return Array.from(element.childNodes);
}
function toggle_class(element, name, toggle) {
    element.classList[toggle ? 'add' : 'remove'](name);
}
function custom_event(type, detail, { bubbles = false, cancelable = false } = {}) {
    const e = document.createEvent('CustomEvent');
    e.initCustomEvent(type, bubbles, cancelable, detail);
    return e;
}

let current_component;
function set_current_component(component) {
    current_component = component;
}
function get_current_component() {
    if (!current_component)
        throw new Error('Function called outside component initialization');
    return current_component;
}
/**
 * Creates an event dispatcher that can be used to dispatch [component events](/docs#template-syntax-component-directives-on-eventname).
 * Event dispatchers are functions that can take two arguments: `name` and `detail`.
 *
 * Component events created with `createEventDispatcher` create a
 * [CustomEvent](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent).
 * These events do not [bubble](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#Event_bubbling_and_capture).
 * The `detail` argument corresponds to the [CustomEvent.detail](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/detail)
 * property and can contain any type of data.
 *
 * https://svelte.dev/docs#run-time-svelte-createeventdispatcher
 */
function createEventDispatcher() {
    const component = get_current_component();
    return (type, detail, { cancelable = false } = {}) => {
        const callbacks = component.$$.callbacks[type];
        if (callbacks) {
            // TODO are there situations where events could be dispatched
            // in a server (non-DOM) environment?
            const event = custom_event(type, detail, { cancelable });
            callbacks.slice().forEach(fn => {
                fn.call(component, event);
            });
            return !event.defaultPrevented;
        }
        return true;
    };
}

const dirty_components = [];
const binding_callbacks = [];
const render_callbacks = [];
const flush_callbacks = [];
const resolved_promise = Promise.resolve();
let update_scheduled = false;
function schedule_update() {
    if (!update_scheduled) {
        update_scheduled = true;
        resolved_promise.then(flush);
    }
}
function add_render_callback(fn) {
    render_callbacks.push(fn);
}
// flush() calls callbacks in this order:
// 1. All beforeUpdate callbacks, in order: parents before children
// 2. All bind:this callbacks, in reverse order: children before parents.
// 3. All afterUpdate callbacks, in order: parents before children. EXCEPT
//    for afterUpdates called during the initial onMount, which are called in
//    reverse order: children before parents.
// Since callbacks might update component values, which could trigger another
// call to flush(), the following steps guard against this:
// 1. During beforeUpdate, any updated components will be added to the
//    dirty_components array and will cause a reentrant call to flush(). Because
//    the flush index is kept outside the function, the reentrant call will pick
//    up where the earlier call left off and go through all dirty components. The
//    current_component value is saved and restored so that the reentrant call will
//    not interfere with the "parent" flush() call.
// 2. bind:this callbacks cannot trigger new flush() calls.
// 3. During afterUpdate, any updated components will NOT have their afterUpdate
//    callback called a second time; the seen_callbacks set, outside the flush()
//    function, guarantees this behavior.
const seen_callbacks = new Set();
let flushidx = 0; // Do *not* move this inside the flush() function
function flush() {
    // Do not reenter flush while dirty components are updated, as this can
    // result in an infinite loop. Instead, let the inner flush handle it.
    // Reentrancy is ok afterwards for bindings etc.
    if (flushidx !== 0) {
        return;
    }
    const saved_component = current_component;
    do {
        // first, call beforeUpdate functions
        // and update components
        try {
            while (flushidx < dirty_components.length) {
                const component = dirty_components[flushidx];
                flushidx++;
                set_current_component(component);
                update(component.$$);
            }
        }
        catch (e) {
            // reset dirty state to not end up in a deadlocked state and then rethrow
            dirty_components.length = 0;
            flushidx = 0;
            throw e;
        }
        set_current_component(null);
        dirty_components.length = 0;
        flushidx = 0;
        while (binding_callbacks.length)
            binding_callbacks.pop()();
        // then, once components are updated, call
        // afterUpdate functions. This may cause
        // subsequent updates...
        for (let i = 0; i < render_callbacks.length; i += 1) {
            const callback = render_callbacks[i];
            if (!seen_callbacks.has(callback)) {
                // ...so guard against infinite loops
                seen_callbacks.add(callback);
                callback();
            }
        }
        render_callbacks.length = 0;
    } while (dirty_components.length);
    while (flush_callbacks.length) {
        flush_callbacks.pop()();
    }
    update_scheduled = false;
    seen_callbacks.clear();
    set_current_component(saved_component);
}
function update($$) {
    if ($$.fragment !== null) {
        $$.update();
        run_all($$.before_update);
        const dirty = $$.dirty;
        $$.dirty = [-1];
        $$.fragment && $$.fragment.p($$.ctx, dirty);
        $$.after_update.forEach(add_render_callback);
    }
}
const outroing = new Set();
let outros;
function group_outros() {
    outros = {
        r: 0,
        c: [],
        p: outros // parent group
    };
}
function check_outros() {
    if (!outros.r) {
        run_all(outros.c);
    }
    outros = outros.p;
}
function transition_in(block, local) {
    if (block && block.i) {
        outroing.delete(block);
        block.i(local);
    }
}
function transition_out(block, local, detach, callback) {
    if (block && block.o) {
        if (outroing.has(block))
            return;
        outroing.add(block);
        outros.c.push(() => {
            outroing.delete(block);
            if (callback) {
                if (detach)
                    block.d(1);
                callback();
            }
        });
        block.o(local);
    }
    else if (callback) {
        callback();
    }
}
function create_component(block) {
    block && block.c();
}
function mount_component(component, target, anchor, customElement) {
    const { fragment, after_update } = component.$$;
    fragment && fragment.m(target, anchor);
    if (!customElement) {
        // onMount happens before the initial afterUpdate
        add_render_callback(() => {
            const new_on_destroy = component.$$.on_mount.map(run).filter(is_function);
            // if the component was destroyed immediately
            // it will update the `$$.on_destroy` reference to `null`.
            // the destructured on_destroy may still reference to the old array
            if (component.$$.on_destroy) {
                component.$$.on_destroy.push(...new_on_destroy);
            }
            else {
                // Edge case - component was destroyed immediately,
                // most likely as a result of a binding initialising
                run_all(new_on_destroy);
            }
            component.$$.on_mount = [];
        });
    }
    after_update.forEach(add_render_callback);
}
function destroy_component(component, detaching) {
    const $$ = component.$$;
    if ($$.fragment !== null) {
        run_all($$.on_destroy);
        $$.fragment && $$.fragment.d(detaching);
        // TODO null out other refs, including component.$$ (but need to
        // preserve final state?)
        $$.on_destroy = $$.fragment = null;
        $$.ctx = [];
    }
}
function make_dirty(component, i) {
    if (component.$$.dirty[0] === -1) {
        dirty_components.push(component);
        schedule_update();
        component.$$.dirty.fill(0);
    }
    component.$$.dirty[(i / 31) | 0] |= (1 << (i % 31));
}
function init(component, options, instance, create_fragment, not_equal, props, append_styles, dirty = [-1]) {
    const parent_component = current_component;
    set_current_component(component);
    const $$ = component.$$ = {
        fragment: null,
        ctx: [],
        // state
        props,
        update: noop,
        not_equal,
        bound: blank_object(),
        // lifecycle
        on_mount: [],
        on_destroy: [],
        on_disconnect: [],
        before_update: [],
        after_update: [],
        context: new Map(options.context || (parent_component ? parent_component.$$.context : [])),
        // everything else
        callbacks: blank_object(),
        dirty,
        skip_bound: false,
        root: options.target || parent_component.$$.root
    };
    append_styles && append_styles($$.root);
    let ready = false;
    $$.ctx = instance
        ? instance(component, options.props || {}, (i, ret, ...rest) => {
            const value = rest.length ? rest[0] : ret;
            if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
                if (!$$.skip_bound && $$.bound[i])
                    $$.bound[i](value);
                if (ready)
                    make_dirty(component, i);
            }
            return ret;
        })
        : [];
    $$.update();
    ready = true;
    run_all($$.before_update);
    // `false` as a special case of no DOM component
    $$.fragment = create_fragment ? create_fragment($$.ctx) : false;
    if (options.target) {
        if (options.hydrate) {
            const nodes = children(options.target);
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            $$.fragment && $$.fragment.l(nodes);
            nodes.forEach(detach);
        }
        else {
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            $$.fragment && $$.fragment.c();
        }
        if (options.intro)
            transition_in(component.$$.fragment);
        mount_component(component, options.target, options.anchor, options.customElement);
        flush();
    }
    set_current_component(parent_component);
}
/**
 * Base class for Svelte components. Used when dev=false.
 */
class SvelteComponent {
    $destroy() {
        destroy_component(this, 1);
        this.$destroy = noop;
    }
    $on(type, callback) {
        if (!is_function(callback)) {
            return noop;
        }
        const callbacks = (this.$$.callbacks[type] || (this.$$.callbacks[type] = []));
        callbacks.push(callback);
        return () => {
            const index = callbacks.indexOf(callback);
            if (index !== -1)
                callbacks.splice(index, 1);
        };
    }
    $set($$props) {
        if (this.$$set && !is_empty($$props)) {
            this.$$.skip_bound = true;
            this.$$set($$props);
            this.$$.skip_bound = false;
        }
    }
}

function dispatch_dev(type, detail) {
    document.dispatchEvent(custom_event(type, Object.assign({ version: '3.55.1' }, detail), { bubbles: true }));
}
function append_dev(target, node) {
    dispatch_dev('SvelteDOMInsert', { target, node });
    append(target, node);
}
function insert_dev(target, node, anchor) {
    dispatch_dev('SvelteDOMInsert', { target, node, anchor });
    insert(target, node, anchor);
}
function detach_dev(node) {
    dispatch_dev('SvelteDOMRemove', { node });
    detach(node);
}
function listen_dev(node, event, handler, options, has_prevent_default, has_stop_propagation) {
    const modifiers = options === true ? ['capture'] : options ? Array.from(Object.keys(options)) : [];
    if (has_prevent_default)
        modifiers.push('preventDefault');
    if (has_stop_propagation)
        modifiers.push('stopPropagation');
    dispatch_dev('SvelteDOMAddEventListener', { node, event, handler, modifiers });
    const dispose = listen(node, event, handler, options);
    return () => {
        dispatch_dev('SvelteDOMRemoveEventListener', { node, event, handler, modifiers });
        dispose();
    };
}
function attr_dev(node, attribute, value) {
    attr(node, attribute, value);
    if (value == null)
        dispatch_dev('SvelteDOMRemoveAttribute', { node, attribute });
    else
        dispatch_dev('SvelteDOMSetAttribute', { node, attribute, value });
}
function set_data_dev(text, data) {
    data = '' + data;
    if (text.wholeText === data)
        return;
    dispatch_dev('SvelteDOMSetData', { node: text, data });
    text.data = data;
}
function validate_each_argument(arg) {
    if (typeof arg !== 'string' && !(arg && typeof arg === 'object' && 'length' in arg)) {
        let msg = '{#each} only iterates over array-like objects.';
        if (typeof Symbol === 'function' && arg && Symbol.iterator in arg) {
            msg += ' You can use a spread to convert this iterable into an array.';
        }
        throw new Error(msg);
    }
}
function validate_slots(name, slot, keys) {
    for (const slot_key of Object.keys(slot)) {
        if (!~keys.indexOf(slot_key)) {
            console.warn(`<${name}> received an unexpected slot "${slot_key}".`);
        }
    }
}
/**
 * Base class for Svelte components with some minor dev-enhancements. Used when dev=true.
 */
class SvelteComponentDev extends SvelteComponent {
    constructor(options) {
        if (!options || (!options.target && !options.$$inline)) {
            throw new Error("'target' is a required option");
        }
        super();
    }
    $destroy() {
        super.$destroy();
        this.$destroy = () => {
            console.warn('Component was already destroyed'); // eslint-disable-line no-console
        };
    }
    $capture_state() { }
    $inject_state() { }
}

/* src/tree/TreeNode.svelte generated by Svelte v3.55.1 */

const file$1 = "src/tree/TreeNode.svelte";

function get_each_context$1(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[6] = list[i];
	return child_ctx;
}

function get_each_context_1(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[9] = list[i];
	return child_ctx;
}

// (12:2) {#each indents as indent}
function create_each_block_1(ctx) {
	let div;
	let div_class_value;

	const block = {
		c: function create() {
			div = element("div");
			attr_dev(div, "class", div_class_value = "tree-indent indent-" + /*indent*/ ctx[9]);
			add_location(div, file$1, 12, 3, 321);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*indents*/ 8 && div_class_value !== (div_class_value = "tree-indent indent-" + /*indent*/ ctx[9])) {
				attr_dev(div, "class", div_class_value);
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block_1.name,
		type: "each",
		source: "(12:2) {#each indents as indent}",
		ctx
	});

	return block;
}

// (19:1) {#if item.items && expanded}
function create_if_block(ctx) {
	let ul;
	let current;
	let each_value = /*item*/ ctx[1].items;
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block$1(get_each_context$1(ctx, each_value, i));
	}

	const out = i => transition_out(each_blocks[i], 1, 1, () => {
		each_blocks[i] = null;
	});

	const block = {
		c: function create() {
			ul = element("ul");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			add_location(ul, file$1, 19, 2, 517);
		},
		m: function mount(target, anchor) {
			insert_dev(target, ul, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(ul, null);
			}

			current = true;
		},
		p: function update(ctx, dirty) {
			if (dirty & /*level, item*/ 6) {
				each_value = /*item*/ ctx[1].items;
				validate_each_argument(each_value);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context$1(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
						transition_in(each_blocks[i], 1);
					} else {
						each_blocks[i] = create_each_block$1(child_ctx);
						each_blocks[i].c();
						transition_in(each_blocks[i], 1);
						each_blocks[i].m(ul, null);
					}
				}

				group_outros();

				for (i = each_value.length; i < each_blocks.length; i += 1) {
					out(i);
				}

				check_outros();
			}
		},
		i: function intro(local) {
			if (current) return;

			for (let i = 0; i < each_value.length; i += 1) {
				transition_in(each_blocks[i]);
			}

			current = true;
		},
		o: function outro(local) {
			each_blocks = each_blocks.filter(Boolean);

			for (let i = 0; i < each_blocks.length; i += 1) {
				transition_out(each_blocks[i]);
			}

			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(ul);
			destroy_each(each_blocks, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(19:1) {#if item.items && expanded}",
		ctx
	});

	return block;
}

// (21:3) {#each item.items as subitem}
function create_each_block$1(ctx) {
	let treenode;
	let current;

	treenode = new TreeNode({
			props: {
				level: /*level*/ ctx[2] + 1,
				item: /*subitem*/ ctx[6]
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(treenode.$$.fragment);
		},
		m: function mount(target, anchor) {
			mount_component(treenode, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const treenode_changes = {};
			if (dirty & /*level*/ 4) treenode_changes.level = /*level*/ ctx[2] + 1;
			if (dirty & /*item*/ 2) treenode_changes.item = /*subitem*/ ctx[6];
			treenode.$set(treenode_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(treenode.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(treenode.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(treenode, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block$1.name,
		type: "each",
		source: "(21:3) {#each item.items as subitem}",
		ctx
	});

	return block;
}

function create_fragment$1(ctx) {
	let li;
	let div2;
	let t0;
	let div0;
	let div0_class_value;
	let t1;
	let div1;
	let t2_value = /*item*/ ctx[1].name + "";
	let t2;
	let div2_data_expanded_value;
	let div2_data_id_value;
	let t3;
	let current;
	let mounted;
	let dispose;
	let each_value_1 = /*indents*/ ctx[3];
	validate_each_argument(each_value_1);
	let each_blocks = [];

	for (let i = 0; i < each_value_1.length; i += 1) {
		each_blocks[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
	}

	let if_block = /*item*/ ctx[1].items && /*expanded*/ ctx[0] && create_if_block(ctx);

	const block = {
		c: function create() {
			li = element("li");
			div2 = element("div");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t0 = space();
			div0 = element("div");
			t1 = space();
			div1 = element("div");
			t2 = text(t2_value);
			t3 = space();
			if (if_block) if_block.c();
			attr_dev(div0, "class", div0_class_value = "tree-icon tree-" + /*nodeType*/ ctx[4] + "-icon");
			add_location(div0, file$1, 14, 2, 381);
			attr_dev(div1, "class", "tree-label");
			add_location(div1, file$1, 15, 2, 434);
			attr_dev(div2, "class", "tree-node");
			attr_dev(div2, "data-type", /*nodeType*/ ctx[4]);
			attr_dev(div2, "data-level", /*level*/ ctx[2]);
			attr_dev(div2, "data-expanded", div2_data_expanded_value = /*item*/ ctx[1].items ? /*expanded*/ ctx[0] : undefined);
			attr_dev(div2, "data-id", div2_data_id_value = /*item*/ ctx[1].id || undefined);
			toggle_class(div2, "expanded", /*expanded*/ ctx[0]);
			add_location(div2, file$1, 2, 1, 64);
			add_location(li, file$1, 0, 0, 0);
		},
		l: function claim(nodes) {
			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},
		m: function mount(target, anchor) {
			insert_dev(target, li, anchor);
			append_dev(li, div2);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div2, null);
			}

			append_dev(div2, t0);
			append_dev(div2, div0);
			append_dev(div2, t1);
			append_dev(div2, div1);
			append_dev(div1, t2);
			append_dev(li, t3);
			if (if_block) if_block.m(li, null);
			current = true;

			if (!mounted) {
				dispose = listen_dev(
					div2,
					"click",
					function () {
						if (is_function(/*item*/ ctx[1].items ? /*toggle*/ ctx[5] : undefined)) (/*item*/ ctx[1].items ? /*toggle*/ ctx[5] : undefined).apply(this, arguments);
					},
					false,
					false,
					false
				);

				mounted = true;
			}
		},
		p: function update(new_ctx, [dirty]) {
			ctx = new_ctx;

			if (dirty & /*indents*/ 8) {
				each_value_1 = /*indents*/ ctx[3];
				validate_each_argument(each_value_1);
				let i;

				for (i = 0; i < each_value_1.length; i += 1) {
					const child_ctx = get_each_context_1(ctx, each_value_1, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block_1(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(div2, t0);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value_1.length;
			}

			if (!current || dirty & /*nodeType*/ 16 && div0_class_value !== (div0_class_value = "tree-icon tree-" + /*nodeType*/ ctx[4] + "-icon")) {
				attr_dev(div0, "class", div0_class_value);
			}

			if ((!current || dirty & /*item*/ 2) && t2_value !== (t2_value = /*item*/ ctx[1].name + "")) set_data_dev(t2, t2_value);

			if (!current || dirty & /*nodeType*/ 16) {
				attr_dev(div2, "data-type", /*nodeType*/ ctx[4]);
			}

			if (!current || dirty & /*level*/ 4) {
				attr_dev(div2, "data-level", /*level*/ ctx[2]);
			}

			if (!current || dirty & /*item, expanded*/ 3 && div2_data_expanded_value !== (div2_data_expanded_value = /*item*/ ctx[1].items ? /*expanded*/ ctx[0] : undefined)) {
				attr_dev(div2, "data-expanded", div2_data_expanded_value);
			}

			if (!current || dirty & /*item*/ 2 && div2_data_id_value !== (div2_data_id_value = /*item*/ ctx[1].id || undefined)) {
				attr_dev(div2, "data-id", div2_data_id_value);
			}

			if (!current || dirty & /*expanded*/ 1) {
				toggle_class(div2, "expanded", /*expanded*/ ctx[0]);
			}

			if (/*item*/ ctx[1].items && /*expanded*/ ctx[0]) {
				if (if_block) {
					if_block.p(ctx, dirty);

					if (dirty & /*item, expanded*/ 3) {
						transition_in(if_block, 1);
					}
				} else {
					if_block = create_if_block(ctx);
					if_block.c();
					transition_in(if_block, 1);
					if_block.m(li, null);
				}
			} else if (if_block) {
				group_outros();

				transition_out(if_block, 1, 1, () => {
					if_block = null;
				});

				check_outros();
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(if_block);
			current = true;
		},
		o: function outro(local) {
			transition_out(if_block);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(li);
			destroy_each(each_blocks, detaching);
			if (if_block) if_block.d();
			mounted = false;
			dispose();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$1.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$1($$self, $$props, $$invalidate) {
	let nodeType;
	let indents;
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots('TreeNode', slots, []);
	let { item = {} } = $$props;
	let { level = 0 } = $$props;
	let { expanded = false } = $$props;

	function toggle() {
		$$invalidate(0, expanded = !expanded);
	}

	const writable_props = ['item', 'level', 'expanded'];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<TreeNode> was created with unknown prop '${key}'`);
	});

	$$self.$$set = $$props => {
		if ('item' in $$props) $$invalidate(1, item = $$props.item);
		if ('level' in $$props) $$invalidate(2, level = $$props.level);
		if ('expanded' in $$props) $$invalidate(0, expanded = $$props.expanded);
	};

	$$self.$capture_state = () => ({
		item,
		level,
		expanded,
		toggle,
		indents,
		nodeType
	});

	$$self.$inject_state = $$props => {
		if ('item' in $$props) $$invalidate(1, item = $$props.item);
		if ('level' in $$props) $$invalidate(2, level = $$props.level);
		if ('expanded' in $$props) $$invalidate(0, expanded = $$props.expanded);
		if ('indents' in $$props) $$invalidate(3, indents = $$props.indents);
		if ('nodeType' in $$props) $$invalidate(4, nodeType = $$props.nodeType);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*item*/ 2) {
			$$invalidate(4, nodeType = item.items ? 'folder' : 'file');
		}

		if ($$self.$$.dirty & /*level*/ 4) {
			$$invalidate(3, indents = new Array(level).fill(0));
		}
	};

	return [expanded, item, level, indents, nodeType, toggle];
}

class TreeNode extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$1, create_fragment$1, safe_not_equal, { item: 1, level: 2, expanded: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "TreeNode",
			options,
			id: create_fragment$1.name
		});
	}

	get item() {
		throw new Error("<TreeNode>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set item(value) {
		throw new Error("<TreeNode>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get level() {
		throw new Error("<TreeNode>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set level(value) {
		throw new Error("<TreeNode>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get expanded() {
		throw new Error("<TreeNode>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set expanded(value) {
		throw new Error("<TreeNode>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* src/tree/Tree.svelte generated by Svelte v3.55.1 */
const file = "src/tree/Tree.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[20] = list[i];
	return child_ctx;
}

// (10:1) {#each items as item}
function create_each_block(ctx) {
	let treenode;
	let current;

	treenode = new TreeNode({
			props: { item: /*item*/ ctx[20] },
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(treenode.$$.fragment);
		},
		m: function mount(target, anchor) {
			mount_component(treenode, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const treenode_changes = {};
			if (dirty & /*items*/ 1) treenode_changes.item = /*item*/ ctx[20];
			treenode.$set(treenode_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(treenode.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(treenode.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(treenode, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(10:1) {#each items as item}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let ul;
	let ul_class_value;
	let current;
	let mounted;
	let dispose;
	let each_value = /*items*/ ctx[0];
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const out = i => transition_out(each_blocks[i], 1, 1, () => {
		each_blocks[i] = null;
	});

	const block = {
		c: function create() {
			ul = element("ul");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			attr_dev(ul, "class", ul_class_value = "tree " + /*className*/ ctx[1]);
			attr_dev(ul, "tabindex", "0");
			add_location(ul, file, 1, 0, 55);
		},
		l: function claim(nodes) {
			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},
		m: function mount(target, anchor) {
			insert_dev(target, ul, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(ul, null);
			}

			/*ul_binding*/ ctx[6](ul);
			current = true;

			if (!mounted) {
				dispose = [
					listen_dev(ul, "focus", /*selectFirst*/ ctx[4], false, false, false),
					listen_dev(ul, "click", /*selectClicked*/ ctx[3], false, false, false),
					listen_dev(ul, "keydown", /*onkeydown*/ ctx[5], false, false, false)
				];

				mounted = true;
			}
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*items*/ 1) {
				each_value = /*items*/ ctx[0];
				validate_each_argument(each_value);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
						transition_in(each_blocks[i], 1);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						transition_in(each_blocks[i], 1);
						each_blocks[i].m(ul, null);
					}
				}

				group_outros();

				for (i = each_value.length; i < each_blocks.length; i += 1) {
					out(i);
				}

				check_outros();
			}

			if (!current || dirty & /*className*/ 2 && ul_class_value !== (ul_class_value = "tree " + /*className*/ ctx[1])) {
				attr_dev(ul, "class", ul_class_value);
			}
		},
		i: function intro(local) {
			if (current) return;

			for (let i = 0; i < each_value.length; i += 1) {
				transition_in(each_blocks[i]);
			}

			current = true;
		},
		o: function outro(local) {
			each_blocks = each_blocks.filter(Boolean);

			for (let i = 0; i < each_blocks.length; i += 1) {
				transition_out(each_blocks[i]);
			}

			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(ul);
			destroy_each(each_blocks, detaching);
			/*ul_binding*/ ctx[6](null);
			mounted = false;
			run_all(dispose);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots('Tree', slots, []);
	let { items = [] } = $$props;
	let { class: className = '' } = $$props;
	const dispatch = createEventDispatcher();
	let el;
	let selectedItem;

	function getVisibleNodes() {
		return Array.from(el.querySelectorAll('.tree .tree-node'));
	}

	function unselectAll() {
		el.querySelectorAll('.tree .selected').forEach(_el => _el.classList.remove('selected'));
	}

	function select(node) {
		if (!node || selectedItem === node) return;
		unselectAll();
		selectedItem = node;
		selectedItem.classList.add('selected');
		selectedItem.scrollIntoView({ block: 'nearest', inline: 'nearest' });
		const item = tryToGetSelectedItem();
		dispatch('select', { selectedItem, item });
	}

	function selectClicked(e) {
		select(e.target.closest('.tree-node'));
	}

	function selectFirst() {
		select(getVisibleNodes()[0]);
	}

	function selectLast() {
		if (!selectedItem) select(getVisibleNodes().pop()); else select(selectedItem.closest('ul').querySelector('li:last-child .tree-node'));
	}

	function selectPrev() {
		const nodes = getVisibleNodes();
		const idx = nodes.indexOf(selectedItem);
		if (idx > 0) select(nodes[idx - 1]);
	}

	function selectNext() {
		const nodes = getVisibleNodes();
		const idx = nodes.indexOf(selectedItem);
		if (idx < nodes.length - 1) select(nodes[idx + 1]);
	}

	function selectParent() {
		const level = +selectedItem.dataset.level;
		if (level === 0) return selectFirst();
		select(selectedItem.parentElement.parentElement.previousElementSibling);
	}

	function goLeft() {
		const isFolder = selectedItem.dataset.type === 'folder';

		if (isFolder) {
			const isExpanded = selectedItem.dataset.expanded === 'true';
			if (isExpanded) selectedItem.click(); else selectParent();
		} else selectParent();
	}

	function goRight() {
		const isFolder = selectedItem.dataset.type === 'folder';
		if (isFolder) selectedItem.click(); else selectLast();
	}

	function onkeydown(e) {
		const keyMap = {
			ArrowUp: selectPrev,
			ArrowDown: selectNext,
			ArrowLeft: goLeft,
			ArrowRight: goRight
		};

		if (typeof keyMap[e.key] === 'function') {
			e.preventDefault();
			keyMap[e.key](e);
		}

		const item = tryToGetSelectedItem();
		dispatch('keydown', { event: e, selectedItem, item });
	}

	function tryToGetSelectedItem() {
		const id = selectedItem.dataset.id;
		if (id) return findItem(id);
	}

	function findItem(id, nodes) {
		if (!nodes) nodes = items;

		for (let found, node, i = 0; node = nodes[i]; i++) {
			if (node.id === id) return node;
			if (node.items) found = findItem(id, node.items);
			if (found) return found;
		}
	}

	const writable_props = ['items', 'class'];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Tree> was created with unknown prop '${key}'`);
	});

	function ul_binding($$value) {
		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			el = $$value;
			$$invalidate(2, el);
		});
	}

	$$self.$$set = $$props => {
		if ('items' in $$props) $$invalidate(0, items = $$props.items);
		if ('class' in $$props) $$invalidate(1, className = $$props.class);
	};

	$$self.$capture_state = () => ({
		createEventDispatcher,
		TreeNode,
		items,
		className,
		dispatch,
		el,
		selectedItem,
		getVisibleNodes,
		unselectAll,
		select,
		selectClicked,
		selectFirst,
		selectLast,
		selectPrev,
		selectNext,
		selectParent,
		goLeft,
		goRight,
		onkeydown,
		tryToGetSelectedItem,
		findItem
	});

	$$self.$inject_state = $$props => {
		if ('items' in $$props) $$invalidate(0, items = $$props.items);
		if ('className' in $$props) $$invalidate(1, className = $$props.className);
		if ('el' in $$props) $$invalidate(2, el = $$props.el);
		if ('selectedItem' in $$props) selectedItem = $$props.selectedItem;
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [items, className, el, selectClicked, selectFirst, onkeydown, ul_binding];
}

class Tree extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { items: 0, class: 1 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Tree",
			options,
			id: create_fragment.name
		});
	}

	get items() {
		throw new Error("<Tree>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set items(value) {
		throw new Error("<Tree>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get class() {
		throw new Error("<Tree>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set class(value) {
		throw new Error("<Tree>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export { Tree, TreeNode };
//# sourceMappingURL=docs.js.map
//# sourceMappingURL=docs.js.map
