import { useState, useEffect } from "react";
import { FC } from "react";
import { IProps } from "../types";
import "./style.css";

const Counter: FC<IProps> = ({ hours, minutes, seconds }) => {
	const [started, setStarted] = useState<boolean>(false);
	const [over, setOver] = useState<boolean>(false);
	const [[h, m, s], setTime] = useState<number[]>([hours, minutes, seconds]);

	const tick = () => {
		if (started || over) return;
		if (h === 0 && m === 0 && s === 0) {
			setOver(true);
		} else if (m === 0 && s === 0) {
			setTime([h - 1, 59, 59]);
		} else if (s === 0) {
			setTime([h, m - 1, 59]);
		} else {
			setTime([h, m, s - 1]);
		}
	};
	const reset = () => {
		setTime([parseInt('0'), parseInt('0'), parseInt('0')]);
		setStarted(false);
		setOver(false);
	};
	const start = () => {
		setTime([parseInt(`${hours}`), parseInt(`${minutes}`), parseInt(`${seconds}`)]);
		setStarted(false);
		setOver(false);
	};

	useEffect(() => {
		const timerID = setInterval(() => tick(), 1000);
		return () => clearInterval(timerID);
	}, [h, m, s]);

	return (
		<div>
			<p className="time">
				<span>{`${h.toString().padStart(2, "0")}:`}</span>
				<span>{`${m.toString().padStart(2, "0")}:`}</span>
				<span>{`${s.toString().padStart(2, "0")}`}</span>
			</p>
			<button className="button__time" onClick={() => start()}>
				<span className="button__time-text">Start</span>{" "}
			</button>
			<button className="button__time" onClick={() => reset()}>
				<span className="button__time-text">Reset</span>
			</button>
		</div>
	);
};

export default Counter;
