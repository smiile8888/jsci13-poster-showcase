import { Dialog, Transition } from '@headlessui/react';
import Poster, { Course } from '../Poster';
import React, { Fragment } from 'react';

import VoteButton from './VoteButton';

type PosterDialogProp = {
	isOpen: boolean;
	poster: Poster | null;
	onCloseDialog: () => void;
};

const PosterDialog = ({ isOpen, poster, onCloseDialog }: PosterDialogProp) => {
	return (
		<Transition appear show={isOpen} as={Fragment}>
			<Dialog
				as='div'
				className='fixed inset-0 z-10 overflow-y-auto'
				onClose={onCloseDialog}
			>
				<div className='min-h-screen px-4 text-center'>
					<Transition.Child
						as={Fragment}
						enter='ease-out duration-300'
						enterFrom='opacity-0'
						enterTo='opacity-100'
						leave='ease-in duration-200'
						leaveFrom='opacity-100'
						leaveTo='opacity-0'
					>
						<Dialog.Overlay className='fixed inset-0 bg-gray-900 bg-opacity-70 transition-opacity' />
					</Transition.Child>

					<span
						className='inline-block h-screen align-middle'
						aria-hidden='true'
					>
						&#8203;
					</span>
					<Transition.Child
						as={Fragment}
						enter='ease-out duration-300'
						enterFrom='opacity-0 scale-95'
						enterTo='opacity-100 scale-100'
						leave='ease-in duration-200'
						leaveFrom='opacity-100 scale-100'
						leaveTo='opacity-0 scale-95'
					>
						<div className='inline-block w-full max-w-5xl p-6 my-8 text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl'>
							<div className='w-full'>
								<img
									className='max-w-full h-auto rounded-md object-cover object-center mx-auto'
									src={poster?.imageURL ?? ''}
									alt='poster'
								/>
							</div>
							<Dialog.Title
								as='h1'
								className='font-bold text-3xl inline-block mt-5 mb-2'
							>
								{poster?.title ?? ''}
							</Dialog.Title>
							<h3 className='text-lg mb-3'>{poster?.authors.join(', ')}</h3>
							<div className='bg-gray-300 w-min px-3 py-1 text mb-3 rounded-full text-sm'>
								{Course[poster?.course ?? 0]}
							</div>
							<div className='mt-3'>
								<p className='leading-6 mb-5'>{poster?.abstract}</p>
							</div>
							<hr />

							<div className='mt-4 flex justify-end items-center'>
								<a className='mr-3' href={poster?.videoURL}>
									<button className='w-full border-2 border-blue-600 text-blue-600 p-2 px-5 rounded-md font-bold text-xl tracking-wider shadow-md hover:shadow-lg hover:text-white hover:bg-blue-600 transition-shadow transition-colors'>
										Video
									</button>
								</a>
								<VoteButton posterID={poster?.id ?? 0} />
							</div>
						</div>
					</Transition.Child>
				</div>
			</Dialog>
		</Transition>
	);
};

export default PosterDialog;
