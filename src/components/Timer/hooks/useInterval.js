import { useEffect, useRef } from 'react';

export default (callback, delay) => {
	const savedCallback = useRef();
	// Remember the latest callback.
	useEffect(() => {
		savedCallback.current = callback;
	}, [callback]);
	// Set up the interval.
	useEffect(() => {
		function tick() {
			savedCallback.current();
		}
		const id = setInterval(tick, delay);
		return () => clearInterval(id);
	}, [delay]);
};
