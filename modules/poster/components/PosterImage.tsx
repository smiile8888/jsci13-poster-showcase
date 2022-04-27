import React from 'react';

type PosterImageProps = {
	imageURL: string;
};

const PosterImage = ({ imageURL }: PosterImageProps) => {
	return (
		<img
			className='rounded-md w-full max-w-full h-auto object-cover object-center mx-auto'
			src={imageURL}
			alt='poster'
		/>
	);
};

export default PosterImage;
