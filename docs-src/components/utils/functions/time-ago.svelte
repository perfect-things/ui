<Util id="TimeAgo" name="timeAgo(date, now)" {example}>
	<p>Converts date to a string describing how long time ago was the given date.</p>
</Util>

<script>
import Util from '../Util.svelte';

const example = `
<script>
	timeAgo(date0); // just now
	timeAgo(date1); // 1 minute ago
	timeAgo(date2); // 1 hour ago
	timeAgo(date3); // 1 day ago
	timeAgo(date4); // 1 week ago
	timeAgo(date5); // 1 month ago
	timeAgo(date6); // 1 year ago
	timeAgo(date7); // 2000-01-01 12:00
&lt;/script>
`;

</script>
