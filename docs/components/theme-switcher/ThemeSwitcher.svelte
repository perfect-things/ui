<h2>ThemeSwitcher</h2>
<p>This component allows users to switch between light and dark themes in your application.
  It automatically detects the user's preferred theme and applies it accordingly.</p>

<p><em>ThemeSwitcher</em> will automatically initialise theme detection.<br>
	To enable theme detection on pages, where the <em>ThemeSwitcher</em> is not present,<br>
	you can use the <em>initThemes()</em> function (see example below).
</p>


<h3>Normal</h3>
<ThemeSwitcher />



<h3>Round</h3>
<ThemeSwitcher round />



<Code>{`
<ThemeSwitcher />
<ThemeSwitcher round />

<script&gt;
import { initThemes } from '@perfectthings/ui';

// Initialize themes without ThemeSwitcher
initThemes();

</script>
`}</Code>

<API props={apiProps}/>


<script lang="ts">
import type { ApiProp } from '../../api-table/types';
import { API, PROPS } from '../../api-table';

import { ThemeSwitcher } from '../../../src';
import { Code } from '../../code-example';

const apiProps = <ApiProp[]>[
	PROPS.round,
	PROPS.class,
	PROPS.title,
	{ name: 'value', type: ['auto', 'light', 'dark'], default: 'auto', description: 'Assign initial value to the component' },
];

</script>
