/* eslint-disable no-unused-expressions */
export default class Accordion {
	constructor(options) {
		const {
			selector,
			openByDefault = 1,
			mode = 'multiple',
		} = options;

		this.accordion = document.querySelector(selector);
		this.btns = document.querySelectorAll('.accordion__header');
		this.content = document.querySelectorAll('.accordion__body');
		this.icons = document.querySelectorAll('.accordion__icon');
		this.cssIconActive = 'accordion__icon--active';
		this.openByDefault = openByDefault;
		this.mode = mode;

		this.init();
	}

	updateIconTransform(index) {
		this.icons[index].classList.add(this.cssIconActive);
	}

	resetIconsTransform() {
		this.icons.forEach((icon) => {
			icon.classList.remove(this.cssIconActive);
		});
	}

	getCurrentContentHeight(index) {
		return this.content[index].scrollHeight;
	}

	showContent(index) {
		// this.resetIconsTransform();
		this.updateIconTransform(index);
		this.content[index].style.height = `${this.getCurrentContentHeight(index)}px`;
	}

	hideContent(index) {
		// this.resetIconsTransform();
		this.icons[index].classList.remove(this.cssIconActive);
		this.content[index].removeAttribute('style');
	}

	hideAllContent() {
		this.content.forEach((elem) => elem.removeAttribute('style'));
	}

	checkContentIsVisible(index) {
		return this.content[index].getAttribute('style');
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
