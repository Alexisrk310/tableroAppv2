import React from 'react';
import Header from './shared/Header';
import board from '../assets/img/background-home.jpg';
import board2 from '../assets/img/background-home-2.png';
import board3 from '../assets/img/background-home-3.jpg';

export const Home = () => {
	return (
		<>
			<Header />

			<div
				id="carouselExampleSlidesOnly"
				className="carousel slide"
				data-ride="carousel">
				<div className="carousel-inner">
					<div className="carousel-item active">
						<img
							className="d-block w-100 background-board"
							src={board}
							alt="First slide"
						/>
					</div>
					<div className="carousel-item">
						<img
							className="d-block w-100 background-board"
							src={board2}
							alt="Second slide"
						/>
					</div>
					<div className="carousel-item">
						<img
							className="d-block w-100 background-board"
							src={board3}
							alt="Third slide"
						/>
					</div>
				</div>
			</div>
		</>
	);
};
