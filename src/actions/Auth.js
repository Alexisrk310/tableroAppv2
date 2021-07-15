import Swal from 'sweetalert2';
import { apiLogin } from '../helpers/apiLogin';

export const startLogin = async (email, password) => {
	const data = await apiLogin('login', { email, password });
	const resp = await data.json();
	const { user } = resp;

	if (user === undefined) {
		const { msg } = resp;
		Swal.fire('Error', msg, 'error');
	} else {
		localStorage.setItem('token', JSON.stringify(user.token));
		localStorage.setItem('uid', JSON.stringify(user.uid));
	}

	return resp;
};
export const startRegister = async (name, email, password) => {
	const data = await apiLogin('register', { name, email, password });
	const resp = await data.json();
	const { user } = resp;
	console.log(resp);
	if (user === undefined) {
		const { msg } = resp;
		Swal.fire('Error', msg, 'error');
	} else {
		localStorage.setItem('token', JSON.stringify(user.token));
		localStorage.setItem("uid", JSON.stringify(user.uid));
	}

	return resp;
};
