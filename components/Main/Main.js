import React from 'react';
import Widget from '../Widget/Widget';
import Counter from '../Counter/Counter';
import Timer from '../Timer/Timer';
import Pomodoro from '../Pomodoro/Pomodoro';

import './Main.scss';

const Main = () => {
  return (
    <div className="Main">
      <Widget title="Counter">
        <Counter />
      </Widget>
      <Widget title="Timer">
        <Timer />
      </Widget>
      <Widget title="Pomodoro">
        <Pomodoro />
      </Widget>
    </div>
  )
}

export default Main;