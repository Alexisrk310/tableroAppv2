import React, { useState } from 'react';
import { AddNote } from './AddNote';
import Header from './shared/Header';
require('animate.css');

export const Board = () => {
	const [buttonAddNote, setButtonAddNote] = useState(false);

	return (
		<>
			<Header />
			<div className="board-home">
				<div className="content-board ">
					<div className="box animate__animated animate__bounceInDown"></div>
					<div className="box animate__animated animate__bounceInDown"></div>
					<div className="box animate__animated animate__bounceInDown"></div>
					<div className="box animate__animated animate__bounceInDown"></div>
					<div className="box animate__animated animate__bounceInDown"></div>
					<div className="box animate__animated animate__bounceInDown"></div>
					<div className="box animate__animated animate__bounceInDown"></div>
					<div className="box animate__animated animate__bounceInDown"></div>
					<div className="box animate__animated animate__bounceInDown"></div>
					<div className="box animate__animated animate__bounceInDown"></div>
					<div className="box animate__animated animate__bounceInDown"></div>
					<div className="box animate__animated animate__bounceInDown"></div>
					<div className="box animate__animated animate__bounceInDown"></div>
					<div className="box animate__animated animate__bounceInDown"></div>
					<div className="box animate__animated animate__bounceInDown"></div>
					<div className="box animate__animated animate__bounceInDown"></div>
					<div className="box animate__animated animate__bounceInDown"></div>
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
