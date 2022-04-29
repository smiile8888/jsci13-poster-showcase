import Poster from './Poster';
import PosterDialog from './PosterDialog';
import PosterType from '../Poster';
import React from 'react';

type PosterListProps = {
	posters: PosterType[];
};

const PosterList = ({ posters }: PosterListProps) => {
	const [dialogOpen, setDialogOpen] = React.useState(false);
	const [dialogPoster, setDialogPoster] = React.useState<PosterType | null>(
		null
	);

	const openDialog = (poster: PosterType) => {
		setDialogPoster(poster);
		setDialogOpen(true);
	};

	const closeDialog = () => {
		setDialogOpen(false);
	};

	return (
		<>
			<PosterDialog
				isOpen={dialogOpen}
				onCloseDialog={closeDialog}
				poster={dialogPoster}
			/>
			<div className='grid grid-cols-2 gap-5 md:grid-cols-4'>
				{posters.map((poster) => (
					<Poster
						className='col-span-2 grid-item'
						key={poster.id}
						poster={poster}
						onClick={openDialog}
					/>
				))}
			</div>
		</>
	);
};

export default PosterList;
