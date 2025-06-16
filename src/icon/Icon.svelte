{@html svg}

<script lang="ts">

import { getIcon } from './icons.js';

interface Props {
	name?: string;
}

const { name = '' }: Props = $props();

const svg = $derived(getIcon(name));
</script>
