import React from 'react';

export const BoardData = ({vb}) => {
	return (
		<div className="box d-flex flex-column justify-content-around" key={vb?.id}>
			<p className="text-monospace text-center text-white">{vb?.title}</p>
			<p className="text-monospace text-center text-white">{vb?.note}</p>
		</div>
	);
};
