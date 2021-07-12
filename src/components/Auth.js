import React, { useState } from 'react';
import { apiLogin } from '../helpers/apiLogin';
const Swal = require('sweetalert2');

export const Auth = ({ history }) => {
	const [openAndClose, setOpenAndClose] = useState(false);
	const [inputValueLogin, setInputValueLogin] = useState({
		email: 'alexander@gmail.com',
		password: '123456',
	});
	const [inputValueRegister, setInputValueRegister] = useState({
		rName: 'alexis',
		rEmail: 'alexisrk310@gmail.com',
		rPassword: 'hermanos123',
	});

	const handleView = () => setOpenAndClose(!openAndClose);

	const handleInputChange = (e) => {
		setInputValueLogin({
			...inputValueLogin,
			[e.target.name]: e.target.value,
		});
	};
	const handleInputRegister = (e) => {
		setInputValueRegister({
			...inputValueRegister,
			[e.target.name]: e.target.value,
		});
	};
	const { email, password } = inputValueLogin;
	//LOGIN
	const handleLogin = async (e) => {
		e.preventDefault();
		const data = await apiLogin('login', inputValueLogin);
		const resp = await data.json();
		const { user } = resp;
		console.log(resp);

		if (user !== undefined) {
			history.push('/');
		} else {
			const { msg } = resp;
			console.log(msg);
			Swal.fire('Error', msg, 'error');
		}
		localStorage.setItem('login', JSON.stringify(user));
	};
	//REGISTER
	const handleRegister = async (e) => {
		e.preventDefault();
		const data = await apiLogin('register', inputValueRegister);
		const resp = await data.json();
		console.log(resp);
	};
	const { rName, rEmail, rPassword } = inputValueRegister;
	return (
		<div className="body-auth">
			<div className="auth mx-auto">
				<div className="login">
					{openAndClose === false ? (
						<form onSubmit={handleLogin}>
							<h1>Inicia sesión</h1>
							<div className="mb-3">
								<label className="form-label">Correo Electronico</label>
								<input
									type="email"
									className="form-control input-long"
									aria-describedby="emailHelp"
									name="email"
									onChange={handleInputChange}
									value={email}
								/>
							</div>
							<div className="mb-3">
								<label className="form-label">Contraseña</label>
								<input
									type="password"
									className="form-control input-long"
									name="password"
									onChange={handleInputChange}
									value={password}
								/>
							</div>
							<div className="mb-3 form-check">
								<input
									type="checkbox"
									className="form-check-input"
									id="Check1"
								/>
								<label className="form-check-label">Check me out</label>
							</div>

							<div className="auth__buttons">
								<button type="submit" className="btn btn-primary">
									Submit <i className="fas fa-arrow-circle-right"></i>
								</button>
								<p
									onClick={handleView}
									className="auth_login text-info mt-2 text-center pointer">
									¿Aún no estas registrado?
								</p>
							</div>
						</form>
					) : (
						<div className="register">
							<form onSubmit={handleRegister}>
								<h1>Registrate</h1>
								<div className="mb-3">
									<label className="form-label input-long">Nombre</label>
									<input
										type="text"
										className="form-control input-long"
										aria-describedby="emailHelp"
										onChange={handleInputRegister}
										value={rName}
										name="rName"
									/>
								</div>
								<div className="mb-3">
									<label className="form-label">Correo electronico</label>
									<input
										type="email"
										className="form-control input-long"
										onChange={handleInputRegister}
										value={rEmail}
										name="rEmail"
									/>
								</div>
								<div className="mb-3">
									<label className="form-label">Contraseña</label>
									<input
										type="password"
										className="form-control input-long"
										onChange={handleInputRegister}
										value={rPassword}
										name="rPassword"
									/>
								</div>

								<div className="form-text">
									We'll never share your email with anyone else.
								</div>
								<div className="mb-3 form-check">
									<input
										type="checkbox"
										className="form-check-input"
										id="Check1"
									/>
									<label className="form-check-label">Check me out</label>
								</div>
								<div className="auth__buttons">
									<button type="submit" className="btn btn-primary">
										Submit <i className="fas fa-arrow-circle-right"></i>
									</button>
									<p
										onClick={handleView}
										className="auth_login text-info mt-2 text-center pointer">
										¿Ya estas registrado?
									</p>
								</div>
							</form>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};
