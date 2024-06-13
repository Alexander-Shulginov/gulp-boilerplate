export function showScrollBar() {
	const cssScrollHidden = 'body--scroll-off';
	document.body.classList.remove(cssScrollHidden);
}

export function hideScrollBar() {
	const cssScrollHidden = 'body--scroll-off';
	document.body.classList.add(cssScrollHidden);
}
