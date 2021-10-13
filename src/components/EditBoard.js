import Modal from 'react-modal';
import React, { useEffect, useState } from 'react';
import { apiPutBoard, apiGetB } from '../helpers/apiBoard';
import Swal from 'sweetalert2';

export const EditBoard = ({ setOpenEdit, id }) => {
	// const resp = apiGetB(id).then((resp) =>
	// 	resp.json().then((data) => {
	// 		return data;
	// 	})
	// );

	// resp.then((resp) => console.log(resp));
	// console.log(resp);
	useEffect(() => {
		const renameInputValue = async () => {
			const resp = await apiGetB(id);
			const data = await resp.json();
			const { title, note } = data.boardUnique;

			setInputValueEditNote({
				title,
				note,
			});
		};

		renameInputValue();
	}, [id]);
	const [inputValueEditNote, setInputValueEditNote] = useState({
		title: '',
		note: '',
	});
	const { title, note } = inputValueEditNote;

	const handleInputEditNote = (e) => {
		setInputValueEditNote({
			...inputValueEditNote,
			[e.target.name]: e.target.value,
		});
	};
	const handleSubmitEditNote = async (e) => {
		e.preventDefault();
		console.log(id);
		const data = await apiPutBoard(id, inputValueEditNote);
		const resp = await data.json();
		console.log(resp);
		if (resp.ok === false) {
			const { tablero } = resp;

			Swal.fire('Error', tablero.note?.msg + ' ' + tablero.title?.msg, 'error');
		} else {
			Swal.fire({
				position: 'bottom-end',
				icon: 'success',
				title: 'El tablero se ha actualizado correctamente',
				showConfirmButton: false,
				timer: 1500,
			});
		}
		console.log(resp);
		setTimeout(() => {
			window.location.href = '/board';
		}, 1500);
		// handleExitNote();
		console.log('Enviado correctamente');
	};

	const handleExitNote = () => {
		setOpenEdit(false);
	};
	return (
		<>
			<Modal ariaHideApp={false} isOpen={true}>
				<div>
					<form onSubmit={handleSubmitEditNote}>
						<h1 className="text-center">Editar nota</h1>
						<div className="mb-3">
							<label className="form-label">Titulo</label>
							<input
								placeholder="Editar titulo de la nota"
								type="text"
								className="form-control"
								aria-describedby="emailHelp"
								name="title"
								value={title}
								onChange={handleInputEditNote}
							/>
						</div>
						<div className="mb-3">
							<label className="form-label">Nota</label>
							<textarea
								className="form-control"
								placeholder="Editar contenido de la nota"
								rows="13"
								name="note"
								value={note}
								onChange={handleInputEditNote}></textarea>
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
