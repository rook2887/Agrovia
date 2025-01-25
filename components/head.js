class HeadComponent extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.innerHTML = `
			<div class="Head">
				<ul class="flex-list">
					<img src="./images/icons-١٩.png" alt="Email icon" class="icon">
					<li>info@agrovia.net - sales@agrovia.net</li>
					<img src="./images/icons-٢٠.png" alt="Email icon" class="icon">
					<li>+20 10 0515305</li>
				</ul>
			</div>
		`;
	}
}

customElements.define('head-component', HeadComponent);