import React from 'react';

type PosterAbstractProps = {
	abstract: string;
};

const PosterAbstract = ({ abstract }: PosterAbstractProps) => {
	return (
		<p className='leading-6 line-clamp-4 mb-5'>
				{abstract}
			</p>
	);
};

export default PosterAbstract;
