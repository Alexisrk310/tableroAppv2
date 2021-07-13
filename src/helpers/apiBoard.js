const { token } = JSON.parse(localStorage.getItem('login'));

export const apiGetBoard = (id) => {
	try {
		const url = `http://localhost:8081/api/board/${id}`;
		return fetch(url, {
			method: 'GET',
			headers: {
				'x-token': token,
			},
		});
	} catch (error) {
		console.log(error);
	}
};

export const apiPostBoard = (data) => {
	try {
		const url = `http://localhost:8081/api//`;

		return fetch(url, {
			method: 'POST',
			headers: {
				'Content-type': 'application/json',
				'x-token': token,
			},

			body: JSON.stringify(data),
		});
	} catch (error) {
		console.log(error);
	}
};
