const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const main = async () => {
	const selectBox = document.getElementById('ctl00_mainContent_ddlCampus');
	console.log(selectBox.selectedIndex);
	if (selectBox.selectedIndex === 0) {
		selectBox.selectedIndex = 1;
	
		__doPostBack('ctl00$mainContent$ddlCampus');
	} else {
		document.querySelector('#ctl00_mainContent_btnLogin').click()
	}	
};

main();
