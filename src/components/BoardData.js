import React, { memo } from 'react';
import { apiDeleteBoard } from '../helpers/apiBoard';
const moment = require("moment");
const Swal = require('sweetalert2');

moment.locale('es');
export const BoardData = memo(({ vb }) => {
	const deleteBoard = () => {
		Swal.fire({
			title: '¿Estas seguro?',
			text: 'Estas apunto de cerrar sesion',
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#17a2b8',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Eliminar el tablero',
			cancelButtonText: 'No eliminar',
		}).then((result) => {
			if (result.isConfirmed) {
				apiDeleteBoard(vb.id);
				Swal.fire('Deleted!', 'Cerrando sesion...', 'success');

				window.location.href = '/board';
			}
		});
	};

	return (
		<div className="box ">
			<i
				className="far fa-trash-alt pointer align-self-end d-block text-right"
				onClick={deleteBoard}></i>
			<div className="d-flex flex-column justify-content-around open-box">
				<p className="text-monospace text-center text-white">{vb?.title}</p>
				<p className="text-monospace text-center text-white">{vb?.note}</p>
				<p className="text-monospace text-center text-white">
					{moment(vb?.date).format('L')}
				</p>
			</div>
		</div>
	);
});
