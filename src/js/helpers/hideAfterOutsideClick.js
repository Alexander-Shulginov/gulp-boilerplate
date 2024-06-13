export default function hideAfterOutsideClick(elem, emitter, css) {
	window.addEventListener('click', (event) => {
		if (!elem.contains(event.target)
			&& !emitter.contains(event.target)) {
			elem.classList.remove(css);
		}
	});
}
