<a class:active={active === hash} href="#{hash}">{name}</a>

<script lang="ts">

interface Props {
	active?: any;
	name?: string;
	hash?: any;
}

const {
	active = location.hash.substring(1),
	name = '',
	hash = name.replace(/\s/g, '')
}: Props = $props();

</script>
