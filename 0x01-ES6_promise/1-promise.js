/**
 * Returns a promise that resolves or rejects based on the input parameter.
 */
function getFullResponseFromAPI(success) {
	return new Promise((resolve, reject) => {
		if (success) {
			resolve({
				status: 200,
				body: 'Success'
			});
		} else {
			reject(new Error('The fake API is not working currently'));
		}
	});
}

export default getFullResponseFromAPI;
