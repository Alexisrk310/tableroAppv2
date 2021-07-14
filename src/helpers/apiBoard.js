const getLogin = JSON.parse(localStorage.getItem('login'));

export const apiGetBoard = (id) => {
	try {
		const url = `http://localhost:8081/api/board/${id}`;
		return fetch(url, {
			method: 'GET',
			headers: {
				'x-token': getLogin?.token,
			},
		});
	} catch (error) {
		console.log(error);
	}
};

export const apiPostBoard = (data) => {
	try {
		const url = `http://localhost:8081/api/board/new`;

		return fetch(url, {
			method: 'POST',
			headers: {
				'Content-type': 'application/json',
				'x-token': getLogin?.token,
			},

			body: JSON.stringify(data),
		});
	} catch (error) {
		console.log(error);
	}
};
