const setToStorage = (key, value) => {
	chrome.storage.sync.set({
		[key]: value,
	});
};

const getFromStorage = (key, defaultValue) => {
	return new Promise((resolve) => {
		chrome.storage.sync.get([key], (result) => {
			resolve(result[key] || defaultValue);
		});
	});
};
