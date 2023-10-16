const main = async () => {
	const email = await getFromStorage('STUDENT_EMAIL', '');
	const emailEl = document.querySelector('.wLBAL[data-email="' + email + '"]');
	
	if (emailEl) {
		emailEl.click();
	}
}

main();
