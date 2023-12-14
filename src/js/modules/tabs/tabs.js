/* eslint-disable no-unused-expressions */
export default class CustomTabs {
	constructor(tabsElem, openDefault, direction) {
		this.tab = tabsElem;
		this.btns = this.tab.querySelectorAll('.tabs__btn');
		this.contents = this.tab.querySelectorAll('.tabs__content');
		this.cssBtnIsActive = 'tabs__btn--active';
		this.cssContentVisible = 'tabs__content--visible';
		this.openDefault = openDefault - 1;
		this.direction = direction;

		this.init();
	}

	hideAllContent() {
		this.contents.forEach((content) => {
			content.classList.remove(this.cssContentVisible);
		});
	}

	showContent(index) {
		this.contents[index].classList.add(this.cssContentVisible);
	}

	resetAllAriaAttrs() {
		this.btns.forEach((btn) => {
			btn.setAttribute('aria-selected', 'false');
		});
	}

	setAriaAttr(index) {
		this.btns[index].setAttribute('aria-selected', 'true');
	}

	setBtnActive(index) {
		this.btns[index].classList.add(this.cssBtnIsActive);
	}

	resetBtnActive() {
		this.btns.forEach((btn) => {
			btn.classList.remove(this.cssBtnIsActive);
		});
	}

	setContentVisibility(index) {
		this.contents[index].classList.add(this.cssContentVisible);
	}

	resetContentVisibility() {
		this.contents.forEach((content) => {
			content.classList.remove(this.cssContentVisible);
		});
	}

	setNextElemFocus(event, index) {
		index < this.btns.length - 1 && (
			event.preventDefault(),
			this.toggleTabs(index + 1),
			this.btns[index + 1].focus()
		);
	}

	setPrevElemFocus(event, index) {
		index > 0 && (
			event.preventDefault(),
			this.toggleTabs(index - 1),
			this.btns[index - 1].focus()
		);
	}

	setDefaultOpenTab() {
		this.resetAllAriaAttrs();
		this.setAriaAttr(this.openDefault);
		this.setBtnActive(this.openDefault);
		this.showContent(this.openDefault);
	}

	toggleTabs(index) {
		this.resetBtnActive();
		this.setBtnActive(index);
		this.resetContentVisibility();
		this.setContentVisibility(index);
		this.resetAllAriaAttrs();
		this.setAriaAttr(index);
		this.hideAllContent();
		this.showContent(index);
	}

	init() {
		this.setDefaultOpenTab();

		this.btns.forEach((btn, index) => {
			btn.addEventListener('click', () => {
				this.toggleTabs(index);
			});

			btn.addEventListener(('focusin'), () => {
				this.toggleTabs(index);
			});
		});

		this.btns.forEach((btn, index) => {
			btn.addEventListener('keydown', (event) => {
				if (this.direction === 'horizontal') {
					event.code === 'ArrowRight' && this.setNextElemFocus(event, index);
					event.code === 'ArrowLeft' && this.setPrevElemFocus(event, index);
				}
				if (this.direction === 'vertical') {
					event.code === 'ArrowDown' && this.setNextElemFocus(event, index);
					event.code === 'ArrowUp' && this.setPrevElemFocus(event, index);
				}
			});
		});
	}
}
