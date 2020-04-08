import React, { useContext, useEffect, useState } from 'react';
import UIFx from 'uifx';
import useInterval from './hooks/useInterval';
import bellAudio from '../../sounds/bells.mp3';
import { TimerContext, SessionContants } from '../app';

const Timer = () => {
	const {
		session,
		timer,
		actions,
	} = useContext(TimerContext);

	const [clock, setClock] = useState(timer.remainingTime.format());

	const bellSound = new UIFx(bellAudio, { volume: 1, throttleMs: 100 });

	const updateTimerValue = (formatedTime) => {
		setClock(formatedTime);
	};

	const tickClock = () => {
		if (timer.remainingTime.asSeconds() > 1) {
			actions.tick();
		} else {
			bellSound.play();
			if (session.sessionType === SessionContants.WORKING_SESSION) {
				actions.startNewSession(SessionContants.RESTING_SESSION);
			} else {
				actions.startNewSession(SessionContants.WORKING_SESSION);
			}
		}
		updateTimerValue(timer.remainingTime.format());
	};

	// Hooks
	useEffect(() => {
		updateTimerValue(timer.remainingTime.format());
	}, [timer]);

	useInterval(() => {
		if (timer.isRunning) {
			tickClock();
		}
	}, 1000);

	useEffect(() => {
		document.title = clock;
	}, [clock]);

	return (
		<>
			<h2>{`${clock}`}</h2>
		</>
	);
};
export default Timer;
