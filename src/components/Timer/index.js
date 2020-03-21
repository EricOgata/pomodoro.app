import React, { useState } from 'react';
import Moment from 'moment';
import useInterval from './hooks/useInterval';

const Timer = () => {
	const [timer, setTimer] = useState(Moment.duration(25, 'minutes'));
	const [clock, setClock] = useState({
		minutes: '',
		seconds: '',
	});

	useInterval(() => {
		if (timer.asSeconds() - 1 >= 0) {
			setTimer(timer.subtract(1, 'seconds'));
			setClock({
				minutes: timer.minutes().toString(),
				seconds: timer.seconds().toString(),
			});
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
