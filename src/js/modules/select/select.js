/* eslint-disable no-unused-expressions */
export default class CustomSelect {
	constructor(selectElement) {
		this.select = selectElement;
		this.selectChoice = this.select.querySelector('.select__choice');
		this.selectList = this.select.querySelector('.select__list');
		this.selectItems = this.select.querySelectorAll('.select__item');

		this.cssArrowIsActive = 'select__choice--active';
		this.cssItemIsChosen = 'select__item--active';

		this.selectChoice.addEventListener('click', () => this.toggleOptionList());
		this.selectChoice.addEventListener('keydown', (event) => this.handleChoiceKeydown(event));

		this.selectItems.forEach((item, index) => {
			item.addEventListener('click', () => this.setValueHideList(item));
			item.addEventListener('keydown', (event) => this.handleItemKeydown(event, index));
		});

		document.addEventListener('click', (event) => this.hideListAfterOutsideClick(event));
	}

	getCurrentListHeight() {
		return this.selectList.scrollHeight;
	}

	showList() {
		this.selectList.style.height = `${this.getCurrentListHeight()}px`;
	}

	hideList() {
		this.selectList.removeAttribute('style');
	}

	checkListVisibility() {
		return this.selectList.getAttribute('style');
	}

	setChosenOption(item) {
		this.selectChoice.textContent = item.textContent;
	}

	resetAllActiveStyles() {
		this.selectItems.forEach((item) => {
			item.classList.remove(this.cssItemIsChosen);
		});
	}

	changeStyleChosenItem(item) {
		this.resetAllActiveStyles();
		item.classList.add(this.cssItemIsChosen);
	}

	addOptionTabIndex() {
		this.selectItems.forEach((item) => {
			item.setAttribute('tabindex', 0);
		});
	}

	removeOptionTabIndex() {
		this.selectItems.forEach((item) => {
			item.removeAttribute('tabindex');
		});
	}

	changeIcon() {
		this.selectChoice.classList.add(this.cssArrowIsActive);
	}

	resetIcon() {
		this.selectChoice.classList.remove(this.cssArrowIsActive);
	}

	setARIAexpanded() {
		this.selectChoice.setAttribute('aria-expanded', true);
	}

	removeARIAexpanded() {
		this.selectChoice.setAttribute('aria-expanded', false);
	}

	resetARIAselected() {
		this.selectItems.forEach((item) => {
			item.setAttribute('aria-selected', false);
		});
	}

	setARIAselected(item) {
		this.resetARIAselected();
		item.setAttribute('aria-selected', true);
	}

	hideAll() {
		this.hideList();
		this.resetIcon();
		this.removeOptionTabIndex();
		this.removeARIAexpanded();
	}

	showAll() {
		this.showList();
		this.changeIcon();
		this.addOptionTabIndex();
		this.setARIAexpanded();
	}

	setValue(item) {
		this.setChosenOption(item);
		this.setARIAselected(item);
		this.changeStyleChosenItem(item);
	}

	toggleOptionList() {
		this.checkListVisibility() ? this.hideAll() : this.showAll();
	}

	hideListAfterOutsideClick(event) {
		!this.selectChoice.contains(event.target) && this.hideAll();
	}

	setValueHideList(item) {
		this.setValue(item);
		this.hideAll();
	}

	arrowNavigationDown(index) {
		this.selectItems.length > index + 1 && this.selectItems[index + 1].focus();
	}

	arrowNavigationUp(index) {
		index > 0 && this.selectItems[index - 1].focus();
	}

	arrowDownFocus() {
		this.checkListVisibility() && this.selectItems[0].focus();
	}

	keyHomeHandler() {
		this.selectItems[0].focus();
	}

	keyEndHandler() {
		this.selectItems[this.selectItems.length - 1].focus();
	}

	keyUpFocus(index) {
		index === 0 && (this.selectChoice.focus(), this.hideAll());
	}

	hideListAfterLostFocus(index) {
		index === this.selectItems.length - 1 && this.hideAll();
	}

	handleChoiceKeydown(event) {
		event.code === 'Space' && (event.preventDefault(), this.toggleOptionList());
		event.code === 'Escape' && (event.preventDefault(), this.hideAll());
		event.code === 'ArrowDown' && (event.preventDefault(), this.showAll());
		event.code === 'ArrowDown' && (event.preventDefault(), this.arrowDownFocus());
		event.code === 'Home' && (event.preventDefault(), this.keyHomeHandler());
		event.code === 'End' && (event.preventDefault(), this.keyEndHandler());
		(event.shiftKey && event.keyCode === 9) && this.hideAll();
	}

	handleItemKeydown(event, index) {
		event.code === 'Escape' && (event.preventDefault(), this.hideAll());
		event.code === 'Tab' && this.hideListAfterLostFocus(index);
		event.code === 'ArrowDown' && (event.preventDefault(), this.arrowNavigationDown(index));
		event.code === 'ArrowUp' && (event.preventDefault(), this.arrowNavigationUp(index));
		event.code === 'ArrowUp' && (event.preventDefault(), this.keyUpFocus(index));
		event.code === 'Home' && (event.preventDefault(), this.keyHomeHandler());
		event.code === 'End' && (event.preventDefault(), this.keyEndHandler());
		(event.code === 'Space' || event.code === 'Enter') && (event.preventDefault(), this.setValueHideList(this.selectItems[index]));
	}
}
