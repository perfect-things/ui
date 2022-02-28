<a class:active="{active === hash}" href="#{hash}">{name}</a>

<script>
export let active = location.hash.substr(1);
export let name = '';
$:hash = name.replace(/\s/g, '');

</script>
