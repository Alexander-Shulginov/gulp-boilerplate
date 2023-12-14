export default class Menu {
	constructor(selector) {
		this.menu = document.querySelectorAll(`.${selector}`);
		this.menuItems = document.querySelectorAll(`.${selector} [role="menuitem"]`);
	}
}
