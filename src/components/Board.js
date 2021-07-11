import React from 'react';
import Header from './shared/Header';

export const Board = () => {
	return (
		<>
			<Header />

			<div className="board-home">
				<button className=" add-note fas fa-plus-circle add-none-awesome"></button>
				<div className="content-board pt-3 ">
					<div></div>
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
