import React, { useState } from 'react';
import Moment from 'moment';
import MomentFormat from 'moment-duration-format-commonjs';

import './App.css';

import Timer from '../Timer';
import Button from '../Button';
import Label from '../Label';

MomentFormat(Moment);

export const TimerContext = React.createContext(null);
export const SessionContants = {
	WORKING_SESSION: 'WORKING_SESSION',
	RESTING_SESSION: 'RESTING_SESSION',
	LONG_RESTING_SESSION: 'LONG_RESTING_SESSION',
};

const Index = () => {
	const [sessionType, setSessionType] = useState(SessionContants.WORKING_SESSION);
	const [isRunning, setIsRunning] = useState(false);
	const [remainingTime, setRemainingTime] = useState(Moment.duration(25, 'minutes'));
	// const [remainingTime, setRemainingTime] = useState(Moment.duration(3, 'seconds'));

	const restartSession = () => {
		const duration = sessionType === SessionContants.WORKING_SESSION ? 25 : 5;
		setRemainingTime(Moment.duration(duration, 'minutes'));
	};

	const startNewSession = (type) => {
		setIsRunning(false);
		switch (type) {
		case SessionContants.WORKING_SESSION:
			setRemainingTime(Moment.duration(25, 'minutes'));
			setSessionType(SessionContants.WORKING_SESSION);
			break;
		case SessionContants.RESTING_SESSION:
			setRemainingTime(Moment.duration(5, 'minutes'));
			setSessionType(SessionContants.RESTING_SESSION);
			break;
		case SessionContants.LONG_RESTING_SESSION:
			break;
		default:
			break;
		}
	};

	const tick = () => {
		setRemainingTime(remainingTime.subtract(1, 'seconds'));
	};

	const stopSession = () => {
		setIsRunning(false);
		restartSession();
	};

	return (
		<div className="App">
			<header className="App-header">
				<h1>Pomodoro Timer</h1>
				<TimerContext.Provider
					value={{
						session: {
							sessionType,
							setSessionType,
						},
						timer: {
							remainingTime,
							setRemainingTime,
							isRunning,
							setIsRunning,
						},
						actions: {
							startNewSession,
							tick,
						},
					}}
				>
					<Timer />
					<Label />
					<div>
						<Button onClick={() => setIsRunning(true)}>Start</Button>
						<Button onClick={() => setIsRunning(false)}>Pause</Button>
						<Button onClick={restartSession}>Restart</Button>
						<Button onClick={stopSession}>Stop</Button>
					</div>
				</TimerContext.Provider>
			</header>
		</div>
	);
};

export default Index;
