const settingForm = document.querySelector('form');
const emailInput = document.querySelector('#email');

settingForm.addEventListener('submit', (e) => {
	e.preventDefault();
	const email = e.target.email.value;

	setToStorage('STUDENT_EMAIL', email);

	alert('Configured');
});

// when DOM is ready
document.addEventListener('DOMContentLoaded', async () => {
	const email = await getFromStorage('STUDENT_EMAIL', '');
	emailInput.value = email;
});
