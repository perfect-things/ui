
/**
 * Formats a date object into a readable string format (YYYY-MM-DD HH:mm).
 * @param {Date} date - The date object to format
 * @returns {string} The formatted date string in YYYY-MM-DD HH:mm format
 * @example
 * formatDate(new Date('2023-06-15T14:30:00')) // '2023-06-15 14:30'
 */
export function formatDate (date: Date): string {
	const year = date.getFullYear();
	const month = ('0' + (date.getMonth() + 1)).slice(-2);
	const day = ('0' + date.getDate()).slice(-2);
	const hours = ('0' + date.getHours()).slice(-2);
	const minutes = ('0' + date.getMinutes()).slice(-2);
	return `${year}-${month}-${day} ${hours}:${minutes}`;
}


/**
 * Calculates the time elapsed since a given date and returns either a human-readable
 * time ago string or a formatted date string.
 * @param {Date} date - The date to calculate time ago from
 * @param {number} [now] - Optional current timestamp in milliseconds. Defaults to current time
 * @returns {string} Either a time ago string (e.g., "2 hours ago") or formatted date string
 * @example
 * timeAgo(new Date(Date.now() - 3600000)) // '1 hour ago'
 * timeAgo(new Date('2023-01-01')) // '2023-01-01 00:00' (if more than simple time ago)
 */
export function timeAgo (date: Date, now?: number): string {
	if (!date) return '';
	now = now || new Date().getTime();
	let seconds = (now - +date) / 1000;
	const intervals = [
		{ label: 'year', seconds: 31536000 },
		{ label: 'month', seconds: 2592000 },
		{ label: 'day', seconds: 86400 },
		{ label: 'hour', seconds: 3600 },
		{ label: 'minute', seconds: 60 }
	];
	const chunks = [];
	while (seconds > 60) {
		const interval = intervals.find(i => i.seconds < seconds) || { seconds: 0, label: '' };
		const count = Math.floor(seconds / (interval.seconds || seconds));
		chunks.push(`${count} ${interval.label}${count !== 1 ? 's' : ''}`);
		seconds -= count * (interval.seconds || seconds);
	}
	if (!chunks.length) return 'just now';
	if (chunks.length === 1) return chunks[0] + ' ago';
	// return chunks.join(', ') + ' ago';

	// format the date to YYYY-MM-DD HH:mm
	return formatDate(date);
}
