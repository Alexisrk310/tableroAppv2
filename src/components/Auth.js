import React, { useState } from "react";

export const Auth = () => {
  const [loggin, setloggin] = useState(false);

  const handleView = () => setloggin(!loggin)
 

  return (
    <div className="body-auth">
      <div className="auth mx-auto">
        <div className="login">
          {loggin === false ? (
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
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="Check1"
                />
                <label className="form-check-label">Check me out</label>
              </div>
              <div className="auth__buttons">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
                <button onClick={handleView} className="auth_login">
                  ¿Aún no estas registrado?
                </button>
              </div>
            </form>
          ) : (
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
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="Check1"
                  />
                  <label className="form-check-label">Check me out</label>
                </div>
				<div className="auth__buttons">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
				<button onClick={handleView} className="auth_login">
                  ¿Ya estas registrado?
                </button>
				</div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
