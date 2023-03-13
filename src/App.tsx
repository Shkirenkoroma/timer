import "./App.css";
import Counter from "./counter";
import { useState } from "react";

const App = () => {

	const [seconds, setSeconds] = useState<number>(0);
	const [minutes, setMinutes] = useState<number>(0);
	const [hours, setHours] = useState<number>(0);

	return (
    <div className="App">
			<div className="container">
      <Counter hours={hours} minutes={minutes} seconds={seconds} />
				<div className="container__content__input">
					<input
						className="container__timer-item"
						type="text"
						maxLength={2}
						value={hours}
						onChange={(e:any) => setHours(e.target.value)}
					/>
          <span className="hours">часа(ов)</span>
					<input
						className="container__timer-item"
						type="text"
						maxLength={2}
						value={minutes}
						onChange={(e:any) => setMinutes(e.target.value)}
					/>
            <span className="minutes">минут</span>
					<input
						className="container__timer-item"
						type="text"
						maxLength={2}
						value={seconds}
						onChange={(e:any) => setSeconds(e.target.value)}
					/>
            <span className="seconds">секунд</span>
				</div>
			</div>
		</div>
	);
};

export default App;
