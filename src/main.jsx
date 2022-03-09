import React from 'react';
import ReactDOM from 'react-dom';

import './styles/global.css';

import { Home } from './pages/Home';

ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
)
