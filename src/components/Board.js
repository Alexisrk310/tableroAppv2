import React, { useState, useEffect } from 'react';
import { AddNote } from './AddNote';
import Header from './shared/Header';
import { apiGetBoard } from '../helpers/apiBoard';
require('animate.css');

export const Board = () => {
	const { uid } = JSON.parse(localStorage.getItem('login'));
	const [buttonAddNote, setButtonAddNote] = useState(false);
	const [viewBoard, setViewBoard] = useState([]);

	useEffect(() => {
		const loadBoard = async () => {
			const resp = await apiGetBoard(uid);
			const data = await resp.json();
			setViewBoard(data.board);
			console.log(viewBoard);
		};
		loadBoard();
	}, [viewBoard]);

	return (
		<>
			<Header />
			<div className="board-home">
				<div className="content-board ">
					{/* {viewBoard.map((x)=> console.log(x))} */}
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
