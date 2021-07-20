const getLogin = JSON.parse(localStorage.getItem('token'));

export const apiGetBoard = (id) => {
	try {
		const url = `http://localhost:8081/api/board/${id}`;
		return fetch(url, {
			method: 'GET',
			headers: {
				'x-token': getLogin,
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
				'x-token': getLogin,
			},

			body: JSON.stringify(data),
		});
	} catch (error) {
		console.log(error);
	}
};

export const apiDeleteBoard = (id) => {
	try {
		const url = `http://localhost:8081/api/board/${id}`;
		return fetch(url, {
			method: 'DELETE',
			headers: {
				'x-token': getLogin,
			},
		});
	} catch (error) {
		console.log(error);
	}
};
export const apiPutBoard = (id, data) => {
	try {
		const url = `http://localhost:8081/api/board/edit/${id}`;

		return fetch(url, {
			method: 'PUT',
			headers: {
				'Content-type': 'application/json',
				'x-token': getLogin,
			},

			body: JSON.stringify(data),
		});
	} catch (error) {
		console.log(error);
	}
};
