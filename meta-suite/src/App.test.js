

import react from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it ('renders wthout crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <App />, div
  )
});