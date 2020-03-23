import React, {useState} from 'react';
import Moment from 'moment';
import useInterval from './hooks/useInterval';

const Timer = () => {
	const [isWorkingSession, setIsWorkingSession] = useState(true);
	const [timer, setTimer] = useState(Moment.duration(25, 'minutes'));
	const [clock, setClock] = useState({
		minutes: '',
		seconds: '',
	});

	function updateTimerValue (minutes, seconds) {
		setClock({
			minutes, seconds
		})
	}

	useInterval(() => {
		updateTimerValue(timer.minutes().toString(), timer.seconds().toString());
		if (timer.asSeconds() > 0) {
			setTimer(timer.subtract(1, 'seconds'));
		} else {
			if (isWorkingSession) {
				setTimer(Moment.duration(5, 'minutes'))
			} else {
				setTimer(Moment.duration(25, 'minutes'))
			}
			setIsWorkingSession(!isWorkingSession);
		}
	}, 1000);

	return (
		<>
			<h1>Timer</h1>
			<h2>{`${clock.minutes}:${clock.seconds}`}</h2>
		</>
	);
};
export default Timer;
