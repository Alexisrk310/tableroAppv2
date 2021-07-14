import React, { useState, useEffect } from 'react';
import { AddNote } from './AddNote';
import Header from './shared/Header';
import { apiGetBoard } from '../helpers/apiBoard';
require('animate.css');

const initialState = [
	{
		title: 'xd',
		note: 'asdasad'
	}
]

export const Board = () => {
	const { uid } = JSON.parse(localStorage.getItem('login'));
	const [buttonAddNote, setButtonAddNote] = useState(false);
	const [viewBoard, setViewBoard] = useState( [] || initialState );

	useEffect(() => {
		apiGetBoard(uid)
			.then((resp) => resp.json())
			.then((resp) => {
				setViewBoard(resp.board);
			});
	}, []);

	return (
		<>
			<Header />
			<div className="board-home">
				<div className="content-board ">
					{viewBoard?.map((vb) => (
						<div
							className="box d-flex flex-column justify-content-around"
							key={vb?.id}>
							<p className="text-monospace text-center text-white">
								{vb?.title}
							</p>
							<p className="text-monospace text-center text-white">
								{vb?.note}
							</p>
						</div>
					))}
				</div>
			</div>
			<button
				className="add-note fas fa-plus-circle add-none-awesome"
				onClick={() => setButtonAddNote(true)}>
				{buttonAddNote === true && (
					<AddNote setButtonAddNote={setButtonAddNote} />
				)}
			</button>
		</>
	);
};
