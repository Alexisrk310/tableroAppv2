export const apiLogin = (endpoint, data) => {
	const url = `http://localhost:8081/api/auth/${endpoint}`;

	return fetch(url, {
		method: 'POST',
		headers: {
			'Content-type': 'application/json',
		},

		body: JSON.stringify(data),
	});
};
