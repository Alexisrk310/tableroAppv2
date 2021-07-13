import React from 'react';
import Header from './shared/Header';
import board from '../assets/img/background-home.jpg';
import board2 from '../assets/img/background-home-2.png';
import board3 from '../assets/img/background-home-3.jpg';
import board4 from '../assets/img/background-home-4.jpg';
import note from '../assets/img/note.png';


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
							alt="First board"
						/>
					</div>
					<div className="carousel-item">
						<img
							className="d-block w-100 background-board"
							src={board2}
							alt="Second board"
						/>
					</div>
					<div className="carousel-item">
						<img
							className="d-block w-100 background-board"
							src={board3}
							alt="Third board"
						/>
					</div>
					<div className="carousel-item">
						<img
							className="d-block w-100 background-board"
							src={board4}
							alt="Third board"
						/>
					</div>
				</div>
			</div>
			<div className="container mt-5 mb-5">
				<div className="note mx-auto ">
					<div className="row ">
						<div className="col-12 col-md-6">
							<img src={note} alt="books" className="board"></img>
						</div>
						<div className="col-12 col-md-6 my-auto p-5 ">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
							placeat ducimus, cupiditate tenetur assumenda ratione illo aperiam
							accusamus dolor vel.
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
