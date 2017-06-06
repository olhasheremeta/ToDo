import React from 'react';
import Widget from '../Widget/Widget';
import Counter from '../Counter/Counter';
import Timer from '../Timer/Timer';
import Pomodoro from '../Pomodoro/Pomodoro';

import './Main.scss';

class Main extends React.Component {
  
  state = {
    activeApp: ''
  }

  startApp = (appId) => {
    console.log(appId)
    this.setState({
      activeApp: appId
    })
  }

  isAppActive(appId) {
    return this.state.activeApp === appId
  }

  render() {
    return (
      <div className="Main">
        <Widget
          id="counter"
          title="Counter"
          isRunning={this.isAppActive('counter')}
          start={this.startApp}
        >
          <Counter />
        </Widget>
        <Widget
          id="timer"
          title="Timer"
          isRunning={this.isAppActive('timer')}
          start={this.startApp}
        >
          <Timer />
        </Widget>
        <Widget
          id="pomodoro"
          title="Pomodoro"
          isRunning={this.isAppActive('pomodoro')}
          start={this.startApp}
        >
          <Pomodoro />
        </Widget>
      </div>
    )
  }
}

export default Main;