export const apiLogin = (data) => {
	const url = 'http://localhost:8081/api/auth/login';
	return fetch(url, {
		method: 'POST',
		headers: {
			'Content-type': 'application/json',
		},

		body: JSON.stringify(data),
	});
};
