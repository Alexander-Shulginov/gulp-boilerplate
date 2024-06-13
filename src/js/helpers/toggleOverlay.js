export function addPageOverlay() {
	const cssOverlay = 'body--overlay-active';
	document.body.classList.add(cssOverlay);
}

export function removePageOverlay() {
	const cssOverlay = 'body--overlay-active';
	document.body.classList.remove(cssOverlay);
}
