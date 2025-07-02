<a class:active={active === hash} href="#{hash}">{name}</a>

<script lang="ts">

interface Props {
	active?: string;
	name?: string;
	hash?: string;
}

const {
	active = location.hash.substring(1),
	name = '',
	hash = name.replace(/\s/g, '')
}: Props = $props();

</script>
