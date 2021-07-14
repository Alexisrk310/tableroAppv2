import Modal from 'react-modal';
import React, { useState } from 'react';
import { apiPostBoard } from '../helpers/apiBoard';

export const AddNote = ({ setButtonAddNote }) => {
	const [inputValueAddNote, setInputValueAddNote] = useState({
		title: '',
		note: '',
	});
	const { title, note } = inputValueAddNote;
	const handleInputAddNote = (e) => {
		setInputValueAddNote({
			...inputValueAddNote,
			[e.target.name]: e.target.value,
		});
	};
	const handleSubmitAddNote = (e) => {
		e.preventDefault();
		apiPostBoard(inputValueAddNote);
    handleExitNote()
		console.log('Enviado correctamente');
	};

	const handleExitNote = () => {
		setButtonAddNote(false);
	};
	return (
		<>
			<Modal ariaHideApp={false} isOpen={true}>
				<div>
					<form onSubmit={handleSubmitAddNote}>
						<h1 className="text-center">Nueva nota</h1>
						<div className="mb-3">
							<label className="form-label">Titulo</label>
							<input
								placeholder="Titulo de la nota"
								type="text"
								className="form-control"
								aria-describedby="emailHelp"
								name="title"
								value={title}
								onChange={handleInputAddNote}
							/>
						</div>
						<div className="mb-3">
							<label className="form-label">Nota</label>
							<textarea
								className="form-control"
								placeholder="Contenido de la nota"
								rows="13"
								name="note"
								value={note}
								onChange={handleInputAddNote}></textarea>
						</div>

						<div className="auth__buttons">
							<button type="submit" className="btn btn-primary">
								Enviar <i className="fas fa-arrow-circle-right"></i>
							</button>
						</div>
					</form>
					<form onSubmit={handleExitNote}>
						<button className="btn btn-danger mt-2 w-100">
							Cerrar <i className="fas fa-sign-in-alt"></i>
						</button>
					</form>
				</div>
			</Modal>
		</>
	);
};
