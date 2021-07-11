import React, { useState } from 'react';
import { AddNote } from './AddNote';
import Header from './shared/Header';

export const Board = () => {
	const [buttonAddNote, setButtonAddNote] = useState(false);

	return (
		<>
			<Header />

			<div className="board-home">
				<button
					className="add-note fas fa-plus-circle add-none-awesome"
					onClick={() => setButtonAddNote(true)}>
					{buttonAddNote === true && (
						<AddNote setButtonAddNote={setButtonAddNote} />
					)}
				</button>

				<div className="content-board pt-3 ">
					<div className="box"></div>
					<div className="box"></div>
					<div className="box"></div>
					<div className="box"></div>
					<div className="box"></div>
					<div className="box"></div>
					<div className="box"></div>
					<div className="box"></div>
					<div className="box"></div>
					<div className="box"></div>
					<div className="box"></div>
					<div className="box"></div>
					<div className="box"></div>
					<div className="box"></div>
					<div className="box"></div>
					<div className="box"></div>
				</div>
			</div>
		</>
	);
};
