import React, { useState, useEffect } from 'react';
import { AddNote } from './AddNote';
import Header from './shared/Header';
import { apiGetBoard } from '../helpers/apiBoard';
import { BoardData } from './BoardData';
import { Footer } from './shared/Footer';
require('animate.css');

const initialState = [
	{
		title: '',
		note: '',
	},
];

export const Board = () => {
	const uid = JSON.parse(localStorage.getItem('uid'));
	const [buttonAddNote, setButtonAddNote] = useState(false);
	const [viewBoard, setViewBoard] = useState([] || initialState);

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
						<BoardData key={vb.id} vb={vb} />
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
			<Footer />
		</>
	);
};
