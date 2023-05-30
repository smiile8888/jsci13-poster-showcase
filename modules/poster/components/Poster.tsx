import PosterImage from '../components/PosterImage';
import PosterTitle from '../components/PosterTitle';
import PosterType from '../Poster';
import React from 'react';
import VoteButton from './VoteButton';

type PosterProps = {
	poster: PosterType;
	className: string;
};

const Poster = ({ poster, className }: PosterProps) => {
	return (
		<div
			className={`flex flex-col justify-between max-w-[600px] w-full p-5 rounded-xl shadow-md hover:shadow-xl transition-shadow ${className} mx-auto mt-5`}
		>
			<div>
				<PosterImage imageURL={poster.imageURL} />
				<div className='flex justify-between items-center'>
					<PosterTitle title={poster.title} />
					<div className='flex flex-col justify-start items-end pt-3'>
						<p className='ml-3 leading-6 line-clamp-4 text-md text-right'>
							{poster.abstract.split(' ')[0]}
						</p>
						<p className='ml-3 leading-6 line-clamp-4 text-bold text-2xl text-right'>
							{poster.abstract.split(' ')[1]}
						</p>
					</div>
				</div>
				<p className='leading-6 line-clamp-4 mb-5'>
					{poster.authors.join(', ')}
				</p>
			</div>
			<div className='flex justify-between gap-3'>
				<a className='w-full' href={poster?.imageURL}>
					<button className='w-full border-2 border-green-600 text-green-600 p-2 px-5 rounded-md font-bold text-xl tracking-wider shadow-md hover:shadow-lg hover:text-white hover:bg-green-600 transition-shadow transition-colors'>
						Poster
					</button>
				</a>
				<a className='w-full' href={poster.videoURL}>
					<button className='w-full border-2 border-blue-600 text-blue-600 p-2 px-5 rounded-md font-bold text-xl tracking-wider shadow-md hover:shadow-lg hover:text-white hover:bg-blue-600 transition-shadow transition-colors'>
						Video
					</button>
				</a>
				{/* <VoteButton posterID={poster.id} /> */}
			</div>
		</div>
	);
};

export default Poster;
