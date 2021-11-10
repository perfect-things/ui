{@html svg}

<script context="module">
// from: https://tablericons.com
import adjustments from 'bundle-text:./icons/adjustments.svg';
import alert from 'bundle-text:./icons/alert.svg';
import apps from 'bundle-text:./icons/apps.svg';
import arrowLeft from 'bundle-text:./icons/arrow-left.svg';
import arrowRight from 'bundle-text:./icons/arrow-right.svg';
import bell from 'bundle-text:./icons/bell.svg';
import book from 'bundle-text:./icons/book.svg';
import bookmark from 'bundle-text:./icons/bookmark.svg';
import check from 'bundle-text:./icons/check.svg';
import checkboxChecked from 'bundle-text:./icons/checkbox-checked.svg';
import checkbox from 'bundle-text:./icons/checkbox.svg';
import checklist from 'bundle-text:./icons/checklist.svg';
import chevronLeft from 'bundle-text:./icons/chevron-left.svg';
import chevronRight from 'bundle-text:./icons/chevron-right.svg';
import close from 'bundle-text:./icons/close.svg';
import cog from 'bundle-text:./icons/cog.svg';
import edit from 'bundle-text:./icons/edit.svg';
import folder from 'bundle-text:./icons/folder.svg';
import home from 'bundle-text:./icons/home.svg';
import info from 'bundle-text:./icons/info.svg';
import link from 'bundle-text:./icons/link.svg';
import list from 'bundle-text:./icons/list.svg';
import meatballs from 'bundle-text:./icons/meatballs.svg';
import pluscircle from 'bundle-text:./icons/plus-circle.svg';
import plus from 'bundle-text:./icons/plus.svg';
import restore from 'bundle-text:./icons/restore.svg';
import report from 'bundle-text:./icons/report.svg';
import search from 'bundle-text:./icons/search.svg';
import shared from 'bundle-text:./icons/shared.svg';
import tag from 'bundle-text:./icons/tag.svg';
import trash from 'bundle-text:./icons/trash.svg';
import user from 'bundle-text:./icons/user.svg';

export const icons = {
	adjustments,
	alert,
	apps,
	arrowLeft,
	arrowRight,
	bell,
	book,
	bookmark,
	check,
	checkboxChecked,
	checkbox,
	checklist,
	chevronLeft,
	chevronRight,
	close,
	cog,
	edit,
	folder,
	home,
	info,
	link,
	list,
	meatballs,
	plus,
	pluscircle,
	restore,
	report,
	search,
	shared,
	tag,
	trash,
	user,
};
</script>
<script>
export let name = '';
$:svg = icons[name] || '';
</script>
