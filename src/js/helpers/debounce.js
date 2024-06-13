export default function debounce(func, delay) {
	let timeout;

	return (...args) => {
		if (timeout) {
			clearTimeout(timeout);
		}

		timeout = setTimeout(() => {
			func.apply(this, args);
			timeout = null;
		}, delay);
	};
}
