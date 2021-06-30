import React from 'react';

const Header = () => {
	return (
		<div className="container">
			<nav className="navbar navbar-expand-md navbar-dark bg-info">
				<a className="navbar-brand  ml-md-5 mx-sm-auto" href="/#">
					Tablero App
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNavDropdown"
					aria-controls="navbarNavDropdown"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse " id="navbarNavDropdown">
					<ul className="navbar-nav mx-sm-1 mx-md-auto">
						<li className="nav-item active">
							<a className="nav-link" href="/#">
								Tablero <span className="sr-only">(current)</span>
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="/#">
								Como usar
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="/#">
								Ingresar
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="/#">
								Registrarte
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
};
export default Header;
