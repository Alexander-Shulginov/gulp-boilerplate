export default function el(elem) {
	const item = document.querySelectorAll(`.${elem}`);
	if (item.length > 1) {
		return item;
	}
	return document.querySelector(`.${elem}`);
}
