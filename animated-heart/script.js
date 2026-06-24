document.addEventListener('DOMContentLoaded', () => {
	const DESIRED = 100;
	const container = document.body;

	let template = document.querySelector('span');
	if (!template) {
		template = document.createElement('span');
		template.textContent = 'I love you';
		container.appendChild(template);
	}

		const existingCount = document.querySelectorAll('span').length;
		const toAdd = Math.max(0, DESIRED - existingCount);

		if (toAdd > 0) {
			const frag = document.createDocumentFragment();
			for (let i = 0; i < toAdd; i++) {
				const clone = template.cloneNode(true);
				clone.style.setProperty('--i', String(existingCount + i));
				frag.appendChild(clone);
			}
			container.appendChild(frag);
		}

		// Ensure every span has a CSS custom property --i equal to its index
		const spans = document.querySelectorAll('span');
		spans.forEach((span, idx) => {
			span.style.setProperty('--i', String(idx));
		});
});
