const settingForm = document.querySelector('form');

settingForm.addEventListener('submit', (e) => {
	e.preventDefault();
	const email = e.target.email.value;

	setToStorage('STUDENT_EMAIL', email);

	alert('Configured');
});
