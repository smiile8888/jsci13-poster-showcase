import PosterType, { loadPostersFromJSON } from '../modules/poster/Poster';
import { useEffect, useState } from 'react';

import Head from 'next/head';
import Image from 'next/image';
import Loading from '../components/Loading';
import type { NextPage } from 'next';
import PosterList from '../modules/poster/components/PosterList';
import jsonPosters from '../data/posters.json';

const Home: NextPage = () => {
	const [posters, setPosters] = useState<PosterType[]>([]);
	useEffect(() => {
		setPosters((_) => loadPostersFromJSON(jsonPosters));
	}, []);

	return (
		<div className='max-w-max m-auto'>
			<Head>
				<title>Poster Showcase</title>
			</Head>

			<header className='mt-10 mb-5 text-center'>
				<h1 className='text-5xl font-bold text-center mb-3'>Poster Showcase</h1>
				<h3 className='text-2xl'>
					CSC491 Intelligent Systems and Applications ✦ CSC532 Machine Learning
				</h3>
			</header>

			<div className='flex justify-center'>
				<hr className='mt-3 mb-5 w-1/2' />
			</div>

			{posters.length === 0 ? <Loading /> : <PosterList posters={posters} />}

			<footer className='mt-10 p-10 text-center text-gray-500 text-md'>
				<p>
					Designed and Developed by{' '}
					<a
						className='font-bold hover:underline'
						href='https://petepittawat.dev/about'
					>
						Pittawat Taveekitworachai
					</a>
				</p>
				<p className='mb-5'>
					School of Information Technology, King Mongkut&apos;s University of
					Technology Thonburi
				</p>
				<Image
					src='/images/KMUTT+SIT.png'
					width={471.5}
					height={96.125}
					alt='SIT, KMUTT Logo'
				/>
			</footer>
		</div>
	);
};

export default Home;
