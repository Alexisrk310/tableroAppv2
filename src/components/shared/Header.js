import React from 'react';
import Swal from 'sweetalert2';

const Header = () => {
	const token = JSON.parse(localStorage.getItem('token'));
	const name = JSON.parse(localStorage.getItem('name'));

	const handleCerrarSesion = () => {
		Swal.fire({
			title: '¿Estas seguro?',
			text: 'Estas apunto de cerrar sesion',
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#17a2b8',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Si, quiero cerrar sesión',
			cancelButtonText: 'Permanecer aqui',
		}).then((result) => {
			if (result.isConfirmed) {
				Swal.fire('Saliendo!', 'Cerrando sesion...', 'success');
				localStorage.removeItem('uid');
				localStorage.removeItem('token');
				localStorage.removeItem('name');
				window.location.href = '/';
			}
		});
	};

	return (
		<div className="header-centrado fixed-top">
			<nav className="navbar navbar-expand-md navbar-dark main">
				<a className="navbar-brand mx-auto mx-sm-auto" href="/">
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
						<li className="nav-item pointer">
							<a className="nav-link" href="/">
								<i className="fas fa-home"></i>
							</a>
						</li>
						<li className="nav-item  pointer">
							<a className="nav-link" href="/board">
								Tablero <span className="sr-only">(current)</span>
							</a>
						</li>
						<li className="nav-item pointer">
							<a className="nav-link" href="/about">
								Como usar
							</a>
						</li>
						{token ? (
							<>
								<li className="nav-item pointer ">
									<span className="nav-link active">{name}</span>
								</li>
								<li className="nav-item pointer ">
									<span className="nav-link " onClick={handleCerrarSesion}>
										Cerrar sesión
									</span>
								</li>
							</>
						) : (
							<li className="nav-item pointer ">
								<a className="nav-link" href="/auth">
									Únete
								</a>
							</li>
						)}
					</ul>
				</div>
			</nav>
		</div>
	);
};
export default Header;
