import React from 'react';
import Widget from '../Widget/Widget';
import Counter from '../Counter/Counter';
import Timer from '../Timer/Timer';

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
    </div>
  )
}

export default Main;