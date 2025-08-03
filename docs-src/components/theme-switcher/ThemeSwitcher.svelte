<h2>ThemeSwitcher</h2>
<p>This component allows users to switch between light and dark themes in your application.
  It automatically detects the user's preferred theme and applies it accordingly.</p>

<p>To enable theme detection on a page, where the <em>ThemeSwitcher</em> is not present,
you can use the <em>initThemes()</em> function (see example below).</p>

<h3>Normal</h3>
<ThemeSwitcher />



<h3>Round</h3>
<ThemeSwitcher round />



<CodeExample html={exampleHtml} />
<API props={apiProps}/>


<script lang="ts">
import type { ApiProp } from '../../api-table/types';
import { API, PROPS } from '../../api-table';

import { ThemeSwitcher } from '../../../src';
import { CodeExample } from '../../code-example';

const apiProps = <ApiProp[]>[
	PROPS.round,
	PROPS.class,
	PROPS.title,
	{ name: 'value', type: ['auto', 'light', 'dark'], default: 'auto', description: 'Assign initial value to the component' },
];

const exampleHtml = `
<ThemeSwitcher />
<ThemeSwitcher round />

<script>
import { initThemes } from '@perfectthings/ui';

// Initialize themes without ThemeSwitcher
initThemes();

&lt;/script>
`;


</script>
