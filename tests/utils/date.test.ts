import { describe, expect, test } from 'vitest';
import * as utils from '../../src/utils';



describe('utils - formatDate', () => {
	test('should format the date correctly', () => {
		const date = new Date('2022-01-01T00:00:00');
		expect(utils.formatDate(date)).toBe('2022-01-01 00:00');
	});

	test('should add leading zeros to single-digit months and days', () => {
		const date = new Date('2022-02-03T00:00:00');
		expect(utils.formatDate(date)).toBe('2022-02-03 00:00');
	});

	test('should add leading zeros to single-digit hours and minutes', () => {
		const date = new Date('2022-01-01T01:02:00');
		expect(utils.formatDate(date)).toBe('2022-01-01 01:02');
	});

	test('should handle dates before the year 2000', () => {
		const date = new Date('1999-12-31T23:59:00');
		expect(utils.formatDate(date)).toBe('1999-12-31 23:59');
	});
});


describe('utils - timeAgo', () => {
	test('should return an empty string if no date or now is provided', () => {
		expect(utils.timeAgo()).toBe('');
	});

	test('should return "just now" if the date is the same as now', () => {
		const now = new Date();
		expect(utils.timeAgo(now)).toBe('just now');
	});

	test('should return "1 minute ago" if the date is 1 minute ago', () => {
		const now = new Date();
		// @ts-ignore
		const date = new Date(now - 60 * 1000 - 1);
		expect(utils.timeAgo(date, now)).toBe('1 minute ago');
	});

	test('should return "2 minutes ago" if the date is 2 minutes ago', () => {
		const now = new Date();
		// @ts-ignore
		const date = new Date(now - 2 * 60 * 1000);
		expect(utils.timeAgo(date, now)).toBe('2 minutes ago');
	});

	test('should return "1 hour ago" if the date is 1 hour ago', () => {
		const now = new Date();
		// @ts-ignore
		const date = new Date(now - 60 * 60 * 1000 - 1);
		expect(utils.timeAgo(date, now)).toBe('1 hour ago');
	});

	test('should return "2 hours ago" if the date is 2 hours ago', () => {
		const now = new Date();
		// @ts-ignore
		const date = new Date(now - 2 * 60 * 60 * 1000);
		expect(utils.timeAgo(date, now)).toBe('2 hours ago');
	});

	test('should return "1 day ago" if the date is 1 day ago', () => {
		const now = new Date();
		// @ts-ignore
		const date = new Date(now - 24 * 60 * 60 * 1000 - 1);
		expect(utils.timeAgo(date, now)).toBe('1 day ago');
	});

	test('should return "2 days ago" if the date is 2 days ago', () => {
		const now = new Date();
		// @ts-ignore
		const date = new Date(now - 2 * 24 * 60 * 60 * 1000);
		expect(utils.timeAgo(date, now)).toBe('2 days ago');
	});

	test('should return "1 month ago" if the date is 1 month ago', () => {
		const now = new Date();
		// @ts-ignore
		const date = new Date(now - 30 * 24 * 60 * 60 * 1000 - 1);
		expect(utils.timeAgo(date, now)).toBe('1 month ago');
	});

	test('should return "2 months ago" if the date is 2 months ago', () => {
		const now = new Date();
		// @ts-ignore
		const date = new Date(now - 2 * 30 * 24 * 60 * 60 * 1000 - 1);
		expect(utils.timeAgo(date, now)).toBe('2 months ago');
	});

	test('should return "1 year ago" if the date is 1 year ago', () => {
		const now = new Date();
		// @ts-ignore
		const date = new Date(now - 365 * 24 * 60 * 60 * 1000 - 1);
		expect(utils.timeAgo(date, now)).toBe('1 year ago');
	});

	test('should return "2 years ago" if the date is 2 years ago', () => {
		const now = new Date();
		// @ts-ignore
		const date = new Date(now - 2 * 365 * 24 * 60 * 60 * 1000);
		expect(utils.timeAgo(date, now)).toBe('2 years ago');
	});

	test('should return the date in the format "YYYY-MM-DD HH:MM" if more than 2 months ago', () => {
		const now = new Date();
		const date = new Date();
		date.setMonth(date.getMonth() - 13);
		const expected = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')} ` +
			`${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
		expect(utils.timeAgo(date, now)).toBe(expected);
	});
});
