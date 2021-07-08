import React from 'react';

export const Auth = () => {
	return (
		<div className="body-auth">
			<div className="auth mx-auto ">
				<div className="login ">
					<form>
						<h1>Inicia sesión</h1>
						<div className="mb-3">
							<label className="form-label">Correo Electronico</label>
							<input
								type="email"
								className="form-control input-long"
								aria-describedby="emailHelp"
							/>
						</div>
						<div className="mb-3">
							<label className="form-label">Contraseña</label>
							<input type="password" className="form-control input-long" />
						</div>
						<div className="mb-3 form-check">
							<input type="checkbox" className="form-check-input" id="Check1" />
							<label className="form-check-label">Check me out</label>
						</div>
						<button type="submit" className="btn btn-primary">
							Submit
						</button>
					</form>
				</div>

				<div className="register">
					<form>
						<h1>Registrate</h1>
						<div className="mb-3">
							<label className="form-label input-long">Nombre</label>
							<input
								type="email"
								className="form-control input-long"
								aria-describedby="emailHelp"
							/>
						</div>
						<div className="mb-3">
							<label className="form-label">Correo electronico</label>
							<input type="password" className="form-control input-long" />
						</div>
						<div className="mb-3">
							<label className="form-label">Contraseña</label>
							<input type="password" className="form-control input-long" />
						</div>

						<div className="form-text">
							We'll never share your email with anyone else.
						</div>
						<div className="mb-3 form-check">
							<input type="checkbox" className="form-check-input" id="Check1" />
							<label className="form-check-label">Check me out</label>
						</div>

						<button type="submit" className="btn btn-primary">
							Submit
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};
