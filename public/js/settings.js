const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
	let value = localStorage.getItem(input.id);
	const profit = input.id === 'max-profit' || input.id === 'min-profit';
	input.value = value ? profit ? value + '%' : value : '';
});

inputs.forEach(input => {
	input.addEventListener('change', () => {
		let value = input.value;
		const profit = input.id === 'max-profit' || input.id === 'min-profit';
		if (profit) {
			value = value.replace(/\D/g, '');
			input.value = value + '%';
			
		}
		localStorage.setItem(input.id, value);
	});
});
