import React, { memo } from 'react';

export const BoardData = memo(({ vb }) => {
	return (
		<div className="box d-flex flex-column justify-content-around" key={vb?.id}>
			<p className="text-monospace text-center text-white">{vb?.title}</p>
			<p className="text-monospace text-center text-white">{vb?.note}</p>
			<p className="text-monospace text-center text-white">{vb?.date}</p>
		</div>
	);
});
