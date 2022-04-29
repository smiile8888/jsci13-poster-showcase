import Iframe from 'react-iframe';
import React from 'react';

type PosterImageProps = {
	imageURL: string;
};

const PosterImage = ({ imageURL }: PosterImageProps) => {
	return (
		<div className='relative overflow-hidden w-full pt-[56.25%]'>
			<Iframe
				className='absolute top-0 left-0 bottom-0 right-0 w-full h-full'
				url={imageURL}
			></Iframe>
		</div>
	);
};

export default PosterImage;
