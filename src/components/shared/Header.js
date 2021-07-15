import React from "react";
import Swal from "sweetalert2";

const Header = () => {
  const token = JSON.parse(localStorage.getItem("token"));

  const handleCerrarSesion = () => {
   Swal.fire({
     title: "¿Estas seguro?",
     text: "Estas apunto de cerrar sesion",
     icon: "warning",
     showCancelButton: true,
     confirmButtonColor: "#3085d6",
     cancelButtonColor: "#d33",
     confirmButtonText: "Yes, delete it!",
   }).then((result) => {
     if (result.isConfirmed) {
       Swal.fire("Deleted!", "Cerrando sesion...", "success");
       localStorage.removeItem('uid')
       localStorage.removeItem('token')
       window.location.href = "/";
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
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNavDropdown">
          <ul className="navbar-nav mx-sm-1 mx-md-auto">
            <li className="nav-item pointer">
              <a className="nav-link" href="/">
                <i className="fas fa-home"></i>
              </a>
            </li>
            <li className="nav-item active pointer">
              <a className="nav-link" href="/board">
                Tablero <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item pointer">
              <a className="nav-link" href="/about">
                Como usar
              </a>
            </li>
            {
            token ? (
              <li className="nav-item pointer ">
                <span className="nav-link" onClick={handleCerrarSesion}>
                  Cerrar Sesion
                </span>
              </li>
            ) : (
              <li className="nav-item pointer ">
                <a className="nav-link" href="/auth">
                  Ingresar o registrarse
                </a>
              </li>
            )
            }
          </ul>
        </div>
      </nav>
    </div>
  );
};
export default Header;
