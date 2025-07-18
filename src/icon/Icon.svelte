{#if name}{@html svg}{/if}
<script lang="ts">
import type { IconProps } from './types';
import { getIcon } from './icons';

const { name = '' }: IconProps = $props();

const svg = $derived(getIcon(name));
</script>
