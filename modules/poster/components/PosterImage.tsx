import Image from 'next/image'
import React from 'react';

type PosterImageProps = {
	imageURL: string;
	width?: number;
	height?: number;
};

const PosterImage = ({ imageURL, width, height }: PosterImageProps) => {
	return (
		<Image
			className='rounded-md w-full max-h-[300px] object-cover object-center'
			src={imageURL}
      alt='poster'
      width={width ?? 400}
      height={height ?? 300}
		/>
	);
};

export default PosterImage;
