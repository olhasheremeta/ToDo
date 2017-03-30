import ReactDOM from 'react-dom';
import React from 'react';
import AppBody from './components/AppBody';



const App = (props) => (
  <div>
    <h1>{props.title}</h1>
    <AppBody />
  </div>
);

ReactDOM.render(
  <App title="The best To-do" />,
  document.getElementById('root')
);