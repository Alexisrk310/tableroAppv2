import React from 'react';
import Header from './shared/Header';
import books from '../assets/img/intro.png';
import board from '../assets/img/board.png';
import { Footer } from './shared/Footer';

export const About = () => {
	return (
		<>
			<Header />
			<div className="background-about mt-5">
				<div className="container mb-5">
					<div className="about mx-auto p-3 ">
						<div className="row">
							<div className="col-12 col-md-6 my-auto ">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
								placeat ducimus, cupiditate tenetur assumenda ratione illo
								aperiam accusamus dolor vel.
							</div>
							<div className="col-12 col-md-6">
								<img src={books} alt="books" className="books"></img>
							</div>
						</div>
					</div>
					<div>
						<h1 className="text-center mt-5">Como usar esta aplicación?</h1>
						<p className="mt-5 mb-5">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, sed
							unde iure laboriosam saepe corporis eius nesciunt quasi sint
							dolorem culpa quos, enim rerum cupiditate dicta veritatis quia?
							Reiciendis deserunt magni molestiae quidem atque, asperiores
							velit? Mollitia culpa pariatur dicta tenetur odio reiciendis velit
							voluptatum aspernatur, eaque, qui cupiditate, at est dolore
							provident non nostrum recusandae optio dolores maiores ex id omnis
							illum quia! Laboriosam laudantium similique quos aut ipsa
							voluptates, debitis veniam consectetur quis fugit numquam ullam
							asperiores illum. Molestiae, repellendus laudantium tenetur
							debitis inventore dolorum sunt maxime, impedit ad, voluptatum
							ducimus repudiandae magni culpa numquam laborum perspiciatis
							atque.
						</p>
						<div className="about-2 mx-auto ">
							<div className="row ">
								<div className="col-12 col-md-6 d-flex justify-content-center align-items-center p-3">
									<img
										src={board}
										alt="books"
										className="board board-img "></img>
								</div>
								<div className="col-12 col-md-6 my-auto p-5 ">
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
									placeat ducimus, cupiditate tenetur assumenda ratione illo
									aperiam accusamus dolor vel.
								</div>
							</div>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		</>
	);
};
