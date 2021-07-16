import React, { memo } from 'react';
import { apiDeleteBoard } from '../helpers/apiBoard';
const moment = require("moment");
const Swal = require('sweetalert2');

moment.locale('es');
export const BoardData = memo(({ vb }) => {
	const deleteBoard = () => {
		Swal.fire({
			title: '¿Estas seguro?',
			text: 'Estas apunto de eliminar un tablero',
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#17a2b8',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Eliminar el tablero',
			cancelButtonText: 'No eliminar',
		}).then((result) => {
			if (result.isConfirmed) {
				apiDeleteBoard(vb.id);
				Swal.fire('Eliminado!', 'Tablero elimiado...', 'success');

				window.location.href = '/board';
			}
		});
	};

	return (
		<div className="box animate__animated animate__fadeInDownBig ">
			<div className="d-flex justify-content-end actions ">
				<i class="fas fa-edit pointer action-items"></i>

				<i
					class="fas fa-times pointer action-items cancel"
					onClick={deleteBoard}></i>
			</div>

			<div className="d-flex flex-column justify-content-around open-box">
				<p className="text-monospace text-center text-white">{vb?.title}</p>
				<p className="text-monospace text-center text-white">{vb?.note}</p>
				<p className="text-monospace text-center text-white ">
					{moment(vb?.date).format('L')}
				</p>
			</div>
		</div>
	);
});
