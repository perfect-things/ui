<h2>Shortcut</h2>

<p>A simple shortcut component that displays keyboard shortcuts in a user-friendly format.<br>
Automatically replaces common key abbreviations (e.g., `Cmd`, `Ctrl`, `Shift`) with their respective icons.
</p>

<h3>Normal</h3>
<Shortcut keys="ctrl s"/><br><br>
<Shortcut keys="cmd a"/><br><br>
<Shortcut keys="cmd shift f"/><br><br>
<Shortcut keys="cmd enter"/><br><br>
<Shortcut keys="shift esc"/><br><br>
<Shortcut keys="ctrl alt delete"/><br><br>



<Code>{`
<Shortcut keys="ctrl s"/>
<Shortcut keys="cmd a"/>
<Shortcut keys="cmd shift f"/>
`}</Code>


<API props={apiProps}/>


<script lang="ts">
import type { ApiProp } from '../../api-table/types';
import { API } from '../../api-table';

import { Shortcut } from '../../../src';
import { Code } from '../../code-example';

const apiProps = <ApiProp[]>[
	{ name: 'keys', type: 'string', description: 'Keyboard shortcut keys combination (e.g., "cmd a"). Case insensitive.' },
];

</script>
