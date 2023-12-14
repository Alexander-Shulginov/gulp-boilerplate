/* eslint-disable no-unused-expressions */
export default class Accordion {
	constructor(options) {
		const {
			selector,
			openByDefault = 1,
			mode = 'single',
		} = options;

		this.accordion = document.querySelector(selector);
		this.btns = this.accordion.querySelectorAll('.accordion__header');
		this.content = this.accordion.querySelectorAll('.accordion__body');
		this.openByDefault = openByDefault;
		this.mode = mode;

		this.init();
	}

	getCurrentContentHeight(index) {
		return this.content[index].scrollHeight;
	}

	showContent(index) {
		this.content[index].style.height = `${this.getCurrentContentHeight(index)}px`;
	}

	hideContent(index) {
		this.content[index].removeAttribute('style');
	}

	hideAllContent() {
		this.content.forEach((elem) => elem.removeAttribute('style'));
	}

	checkContentIsVisible(index) {
		return this.content[index].hasAttribute('style');
	}

	toggleContent(index) {
		if (this.mode === 'single') {
			this.checkContentIsVisible(index)
				? this.hideContent(index)
				: this.showContent(index, this.hideAllContent());
		} else if (this.mode === 'multiple') {
			this.checkContentIsVisible(index)
				? this.hideContent(index) : this.showContent(index);
		}
	}

	preOpenContent(num) {
		this.content.forEach((elem, index) => {
			if (index + 1 === num) this.showContent(index);
		});
	}

	init() {
		this.btns.forEach((btn, index) => {
			btn.addEventListener('click', () => this.toggleContent(index));
		});

		this.preOpenContent(this.openByDefault);
	}
}
