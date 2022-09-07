{@html svg}

<script context="module">
// from: https://tablericons.com
import adjustments from './icons/adjustments.svg';
import alert from './icons/alert.svg';
import apps from './icons/apps.svg';
import archive from './icons/archive.svg';
import arrowLeft from './icons/arrow-left.svg';
import arrowRight from './icons/arrow-right.svg';
import arrowNarrowDown from './icons/arrow-narrow-down.svg';
import arrowNarrowUp from './icons/arrow-narrow-up.svg';
import bank from './icons/bank.svg';
import bell from './icons/bell.svg';
import book from './icons/book.svg';
import bookmark from './icons/bookmark.svg';
import calculator from './icons/calculator.svg';
import calendar from './icons/calendar.svg';
import chartLine from './icons/chart-line.svg';
import chartPie from './icons/chart-pie.svg';
import cash from './icons/cash.svg';
import check from './icons/check.svg';
import checkboxChecked from './icons/checkbox-checked.svg';
import checkbox from './icons/checkbox.svg';
import checklist from './icons/checklist.svg';
import chevronLeft from './icons/chevron-left.svg';
import chevronRight from './icons/chevron-right.svg';
import close from './icons/close.svg';
import cog from './icons/cog.svg';
import dots from './icons/dots.svg';
import edit from './icons/edit.svg';
import eye from './icons/eye.svg';
import eyeOff from './icons/eye-off.svg';
import error from './icons/error.svg';
import filter from './icons/filter.svg';
import folder from './icons/folder.svg';
import help from './icons/help.svg';
import home from './icons/home.svg';
import info from './icons/info.svg';
import link from './icons/link.svg';
import list from './icons/list.svg';
import logout from './icons/logout.svg';
import math from './icons/math.svg';
import meatballs from './icons/meatballs.svg';
import minuscircle from './icons/minus-circle.svg';
import pluscircle from './icons/plus-circle.svg';
import plus from './icons/plus.svg';
import receipt from './icons/receipt.svg';
import restore from './icons/restore.svg';
import reset from './icons/reset.svg';
import refresh from './icons/refresh.svg';
import repeat from './icons/repeat.svg';
import reportAnalytics from './icons/report-analytics.svg';
import reportMoney from './icons/report-money.svg';
import search from './icons/search.svg';
import sidebarLeft from './icons/sidebar-left.svg';
import sidebarRight from './icons/sidebar-right.svg';
import shared from './icons/shared.svg';
import sortAsc from './icons/sort-asc.svg';
import sortDesc from './icons/sort-desc.svg';
import split from './icons/split.svg';
import tag from './icons/tag.svg';
import trash from './icons/trash.svg';
import user from './icons/user.svg';
import users from './icons/users.svg';

export const icons = {
	adjustments,
	alert,
	add: plus,
	apps,
	archive,
	arrowLeft,
	arrowRight,
	arrowNarrowDown,
	arrowNarrowUp,
	bank,
	bell,
	book,
	bookmark,
	calculator,
	calendar,
	cash,
	chartLine,
	chartPie,
	check,
	checkboxChecked,
	checkbox,
	checklist,
	chevronLeft,
	chevronRight,
	close,
	cog,
	dots,
	edit,
	eye,
	eyeOff,
	error,
	filter,
	folder,
	help,
	home,
	info,
	link,
	list,
	logout,
	math,
	meatballs,
	minuscircle,
	plus,
	pluscircle,
	receipt,
	restore,
	reset,
	refresh,
	repeat,
	report: reportAnalytics,
	reportAnalytics,
	reportMoney,
	search,
	sidebarLeft,
	sidebarRight,
	shared,
	sortAsc,
	sortDesc,
	split,
	tag,
	trash,
	user,
	users,
};
</script>
<script>
export let name = '';
$:svg = icons[name] || '<svg width="20" height="20"></svg>';
</script>
