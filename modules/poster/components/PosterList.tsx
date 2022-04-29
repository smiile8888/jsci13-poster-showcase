import Poster from './Poster';
import PosterType from '../Poster';
import React from 'react';

type PosterListProps = {
	posters: PosterType[];
};

const PosterList = ({ posters }: PosterListProps) => {
	return (
		<div className='grid grid-cols-2 gap-5 md:grid-cols-4'>
			{posters.map((poster) => (
				<Poster
					className='col-span-2 grid-item'
					key={poster.id}
					poster={poster}
				/>
			))}
		</div>
	);
};

export default PosterList;
