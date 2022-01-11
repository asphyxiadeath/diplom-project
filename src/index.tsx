import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import App from './App';
import './styles/index.scss';
import {createBrowserHistory} from 'history'
import { ThemeProvider } from './Provider/ThemeProvider';
import { store } from './store/store';
import { Provider } from 'react-redux';


const history = createBrowserHistory()
ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
        <Router>
          <ThemeProvider>
          <App />
          </ThemeProvider>
        </Router> 
      </Provider>
    </React.StrictMode>,
  document.getElementById('root')
);



