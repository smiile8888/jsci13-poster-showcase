import React from 'react';

type VoteButtonProps = {
	posterID: number;
};

const VOTE_FORM_URL =
	'https://docs.google.com/forms/d/e/1FAIpQLSf2EWstXJQ9Q5Xjh0jxBfLffObf5iX-f3MdCU3QkOFekUzCPA/viewform?usp=pp_url&entry.400585049=';

const VoteButton = ({ posterID }: VoteButtonProps) => {
	return (
		<a onClick={(ev) => ev.stopPropagation()} href={`${VOTE_FORM_URL}${posterID}`}>
			<button className='w-full bg-gray-900 border-2 border-gray-900 text-white p-2 px-5 rounded-md font-bold text-xl uppercase tracking-wider shadow-md hover:shadow-lg hover:text-black hover:bg-white transition-shadow transition-colors'>
				Vote
			</button>
		</a>
	);
};

export default VoteButton;
