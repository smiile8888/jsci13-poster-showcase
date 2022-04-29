import PosterType, { Course } from '../Poster';

import PosterAbstract from '../components/PosterAbstract';
import PosterImage from '../components/PosterImage';
import PosterTitle from '../components/PosterTitle';
import React from 'react';
import VoteButton from './VoteButton';

type PosterProps = {
	poster: PosterType;
	className: string;
	onClick: (poster: PosterType) => void;
};

const Poster = ({ poster, className, onClick }: PosterProps) => {
	return (
		<div
			onClick={(_) => onClick(poster)}
			className={`max-w-[600px] w-full p-5 rounded-xl shadow-md hover:shadow-xl transition-shadow cursor-pointer ${className} mx-auto mt-5`}
		>
			<PosterImage imageURL={poster.imageURL} />
			<PosterTitle title={poster.title} />
			<PosterAbstract abstract={poster.abstract} />
			<VoteButton posterID={poster.id} />
		</div>
	);
};

export default Poster;
