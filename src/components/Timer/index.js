import React, { useContext, useEffect, useState } from 'react';
import Moment from 'moment';
import useInterval from './hooks/useInterval';
import { TimerContext, SessionContants } from '../app';

const Timer = () => {
	const {
		session,
		timer,
	} = useContext(TimerContext);

	const [clock, setClock] = useState({
		minutes: timer.remainingTime.minutes().toString(),
		seconds: timer.remainingTime.seconds().toString(),
	});

	function updateTimerValue(minutes, seconds) {
		setClock({
			minutes, seconds,
		});
	}

	function tickClock() {
		if (timer.remainingTime.asSeconds() > 0) {
			timer.setRemainingTime(timer.remainingTime.subtract(1, 'seconds'));
		} else if (session.sessionType === SessionContants.WORKING_SESSION) {
			timer.setRemainingTime(Moment.duration(5, 'minutes'));
			session.setSessionType(SessionContants.RESTING_SESSION);
		} else {
			timer.setRemainingTime(Moment.duration(25, 'minutes'));
			session.setSessionType(SessionContants.WORKING_SESSION);
		}
		updateTimerValue(
			timer.remainingTime.minutes().toString(),
			timer.remainingTime.seconds().toString(),
		);
	}

	// Hooks
	useEffect(() => {
		updateTimerValue(
			timer.remainingTime.minutes().toString(),
			timer.remainingTime.seconds().toString(),
		);
	}, [timer]);

	useInterval(() => {
		if (timer.isRunning) {
			tickClock();
		}
	}, 1000);

	return (
		<>
			<h2>{`${clock.minutes}:${clock.seconds}`}</h2>
		</>
	);
};
export default Timer;
