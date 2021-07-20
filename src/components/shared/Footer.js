import React from 'react';

export const Footer = () => {
	return (
		<div className="footer d-block">
			<div className="container pt-3">
				<div className="row">
					<div className="col-sm-12 col-md-6">
						<p className="text-light text-footer">Footer</p>
						<p className="text-app">TableroApp © 2021</p>
					</div>
					<div className="col-sm-12 col-md-6 m-auto text-center">
						<i className="fab fa-facebook-square mr-2 facebook pointer"></i>
						<i className="fab fa-twitter-square mr-2 twitter pointer"></i>
						<i className="fab fa-youtube-square youtube pointer"></i>
					</div>
				</div>
			</div>
		</div>
	);
};
