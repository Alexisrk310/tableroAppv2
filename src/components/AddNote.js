import Modal from 'react-modal';
import React from 'react';

export const AddNote = ({ setButtonAddNote }) => {
	const handleExitNote = () => {
		setButtonAddNote(false);
	};
	return (
		<>
			<Modal
				ariaHideApp={false}
				isOpen={true}
				aria={{
					labelledby: 'heading',
					describedby: 'full_description',
				}}>
				<form>
					<h1 className="text-center">Nueva nota</h1>
					<div className="mb-3">
						<label className="form-label">Titulo</label>
						<input
							placeholder="Titulo de la nota"
							type="email"
							className="form-control"
							aria-describedby="emailHelp"
						/>
					</div>
					<div className="mb-3">
						<label className="form-label">Nota</label>
						<textarea
							className="form-control"
							placeholder="Contenido de la nota"
							rows="13"></textarea>
					</div>

					<div className="auth__buttons">
						<button
							onClick={handleExitNote}
							type="submit"
							className="btn btn-primary">
							Enviar <i className="fas fa-arrow-circle-right"></i>
						</button>

						<button className="btn btn-danger mt-2" onClick={handleExitNote}>
							Cerrar <i className="fas fa-sign-in-alt"></i>
						</button>
					</div>
				</form>
			</Modal>
		</>
	);
};
