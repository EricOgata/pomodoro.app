import React, { useContext } from 'react';
import {
	TimerContext,
	SessionContants,
} from '../app';

const Label = () => {
	const {
		session,
	} = useContext(TimerContext);

	function renderSessionName() {
		switch (session.sessionType) {
		case SessionContants.WORKING_SESSION:
			return 'Working Session';
		case SessionContants.RESTING_SESSION:
			return 'Resting Session';
		case SessionContants.LONG_RESTING_SESSION:
			return 'Long Resting Session';
		default:
			return '';
		}
	}

	return (
		<h3>{renderSessionName()}</h3>
	);
};

export default Label;
