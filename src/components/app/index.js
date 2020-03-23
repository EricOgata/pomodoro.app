import React, { useState } from 'react';
import Moment from 'moment';

import './App.css';

import Timer from '../Timer';
import Button from '../Button';
import Label from '../Label';

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

	const restartSession = () => {
		const duration = sessionType === SessionContants.WORKING_SESSION ? 25 : 5;
		setRemainingTime(Moment.duration(duration, 'minutes'));
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
