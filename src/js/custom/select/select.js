/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-expressions */
export default class CustomSelect {
	constructor(selectElements) {
		this.selects = selectElements;

		this.cssArrowIsActive = 'select__choice--active';
		this.cssItemIsChosen = 'select__item--active';
		this.cssListIsHidden = 'select__list--hidden';
		this.cssScroll = 'select--scroll';

		this.selects.forEach((select) => {
			select.selectChoice = select.querySelector('.select__choice');
			select.selectValue = select.querySelector('.select__value');
			select.selectList = select.querySelector('.select__list');
			select.selectItems = select.querySelectorAll('.select__item');

			select.selectChoice.addEventListener('click', () => this.toggleOptionList(select));
			select.selectChoice.addEventListener('keydown', (event) => this.handleChoiceKeydown(event, select));

			select.selectItems.forEach((item, index) => {
				item.addEventListener('click', () => this.setValueHideList(item, select));
				item.addEventListener('keydown', (event) => this.handleItemKeydown(event, index, select));
			});
		});

		document.addEventListener('click', (event) => this.hideListAfterOutsideClick(event));
	}

	getCurrentListHeight(select) {
		return select.selectList.scrollHeight;
	}

	addScroll(select) {
		select.classList.add(this.cssScroll);
	}

	removeScroll(select) {
		select.classList.remove(this.cssScroll);
	}

	//! !!!!!!!!!!!!!!!!!!!!!!!!!!!
	showList(select) {
		select.selectList.style.height = `${this.getCurrentListHeight(select)}px`;

		if (select.selectItems.length >= 6) {
			select.selectList.style.height = `${261}px`;
			this.addScroll(select);
		}
	}
	//! !!!!!!!!!!!!!!!!!!!!!!!!!!!

	hideList(select) {
		select.selectList.removeAttribute('style');
	}

	checkListVisibility(select) {
		return select.selectList.getAttribute('style');
	}

	setChosenOption(item, select) {
		select.selectValue.textContent = item.textContent;
	}

	resetAllActiveStyles(select) {
		select.selectItems.forEach((item) => {
			item.classList.remove(this.cssItemIsChosen);
		});
	}

	changeStyleChosenItem(item, select) {
		this.resetAllActiveStyles(select);
		item.classList.add(this.cssItemIsChosen);
	}

	addOptionTabIndex(select) {
		select.selectItems.forEach((item) => {
			item.setAttribute('tabindex', 0);
		});
	}

	removeOptionTabIndex(select) {
		select.selectItems.forEach((item) => {
			item.removeAttribute('tabindex');
		});
	}

	changeIcon(select) {
		select.selectChoice.classList.add(this.cssArrowIsActive);
	}

	resetIcon(select) {
		select.selectChoice.classList.remove(this.cssArrowIsActive);
	}

	setARIAexpanded(select) {
		select.selectChoice.setAttribute('aria-expanded', true);
	}

	removeARIAexpanded(select) {
		select.selectChoice.setAttribute('aria-expanded', false);
	}

	resetARIAselected(select) {
		select.selectItems.forEach((item) => {
			item.setAttribute('aria-selected', false);
		});
	}

	setARIAselected(item, select) {
		this.resetARIAselected(select);
		item.setAttribute('aria-selected', true);
	}

	hideAll(select) {
		this.hideList(select);
		this.resetIcon(select);
		this.removeOptionTabIndex(select);
		this.removeARIAexpanded(select);
		this.removeScroll(select);
	}

	showAll(select) {
		this.showList(select);
		this.changeIcon(select);
		this.addOptionTabIndex(select);
		this.setARIAexpanded(select);
	}

	setValue(item, select) {
		this.setChosenOption(item, select);
		this.setARIAselected(item, select);
		this.changeStyleChosenItem(item, select);
	}

	toggleOptionList(select) {
		this.checkListVisibility(select) ? this.hideAll(select) : this.showAll(select);
	}

	hideListAfterOutsideClick(event) {
		this.selects.forEach((select) => {
			!select.selectChoice.contains(event.target) && this.hideAll(select);
		});
	}

	setValueHideList(item, select) {
		this.setValue(item, select);
		this.hideAll(select);
	}

	arrowNavigationDown(index, select) {
		select.selectItems.length > index + 1 && select.selectItems[index + 1].focus();
	}

	arrowNavigationUp(index, select) {
		index > 0 && select.selectItems[index - 1].focus();
	}

	arrowDownFocus(select) {
		this.checkListVisibility(select) && select.selectItems[0].focus();
	}

	keyHomeHandler(select) {
		select.selectItems[0].focus();
	}

	keyEndHandler(select) {
		select.selectItems[select.selectItems.length - 1].focus();
	}

	keyUpFocus(index, select) {
		index === 0 && (select.selectChoice.focus(), this.hideAll(select));
	}

	hideListAfterLostFocus(index, select) {
		index === select.selectItems.length - 1 && this.hideAll(select);
	}

	handleChoiceKeydown(event, select) {
		event.code === 'Space' && (event.preventDefault(), this.toggleOptionList(select));
		event.code === 'Escape' && (event.preventDefault(), this.hideAll(select));
		event.code === 'ArrowDown' && (event.preventDefault(), this.showAll(select));
		event.code === 'ArrowDown' && (event.preventDefault(), this.arrowDownFocus(select));
		event.code === 'Home' && (event.preventDefault(), this.keyHomeHandler(select));
		event.code === 'End' && (event.preventDefault(), this.keyEndHandler(select));
		(event.shiftKey && event.keyCode === 9) && this.hideAll(select);
	}

	handleItemKeydown(event, index, select) {
		event.code === 'Escape' && (event.preventDefault(), this.hideAll(select));
		event.code === 'Tab' && this.hideListAfterLostFocus(index, select);
		event.code === 'ArrowDown' && (event.preventDefault(), this.arrowNavigationDown(index, select));
		event.code === 'ArrowUp' && (event.preventDefault(), this.arrowNavigationUp(index, select));
		event.code === 'ArrowUp' && (event.preventDefault(), this.keyUpFocus(index, select));
		event.code === 'Home' && (event.preventDefault(), this.keyHomeHandler(select));
		event.code === 'End' && (event.preventDefault(), this.keyEndHandler(select));
		(event.code === 'Space' || event.code === 'Enter') && (event.preventDefault(), this.setValueHideList(select.selectItems[index], select));
	}
}
