import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import App from './App';
import './styles/index.scss';
import {createBrowserHistory} from 'history'
import { ThemeProvider } from './Provider/ThemeProvider';

const history = createBrowserHistory()
ReactDOM.render(
  <React.StrictMode>
   <Router>
  <ThemeProvider>
   <App />
   </ThemeProvider>
   </Router> 
  </React.StrictMode>,
  document.getElementById('root')
);



