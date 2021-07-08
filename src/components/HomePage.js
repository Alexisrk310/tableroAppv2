import React from 'react';
import Header from './shared/Header';

export const HomePage = () => {
	return (
		<>
			<Header />

			<div className="board-home d-flex flex-wrap mt-5 ml-4 ">
				<div className="box"></div>
				<div className="box"></div>
				<div className="box"></div>
				<div className="box"></div>
				<div className="box"></div>
				<div className="box"></div>
				<div className="box"></div>
				<div className="box"></div>
			</div>
		</>
	);
};
