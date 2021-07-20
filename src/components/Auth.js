import React, { useState } from 'react';
import { startLogin, startRegister } from '../actions/Auth';

export const Auth = ({ history }) => {
	const [openAndClose, setOpenAndClose] = useState(false);
	const [inputValueLogin, setInputValueLogin] = useState({
		email: '',
		password: '',
	});
	const [inputValueRegister, setInputValueRegister] = useState({
		rName: '',
		rEmail: '',
		rPassword: '',
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
	const { rName, rEmail, rPassword } = inputValueRegister;
	//LOGIN
	const handleLogin = async (e) => {
		e.preventDefault();
		const resp = await startLogin(email, password);
		if (resp.ok) {
			window.location.href = '/board';
		}
	};

	//REGISTER
	const handleRegister = async (e) => {
		e.preventDefault();
		const resp = await startRegister(rName, rEmail, rPassword);
		if (resp.ok) {
			window.location.href = '/board';
		}
	};
	return (
		<div className="body-auth">
			<div className="auth mx-auto p-5">
				<div className="login">
					{openAndClose === false ? (
						<form className="mb-3" onSubmit={handleLogin}>
							<i
								className="fas fa-chevron-circle-left arrow-direction pointer"
								onClick={() => history.push('/')}></i>

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
							<form className="mb-3" onSubmit={handleRegister}>
								<i
									className="fas fa-chevron-circle-left arrow-direction pointer"
									onClick={() => history.push('/')}></i>
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
