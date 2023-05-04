import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "antd/dist/reset.css"   //so that we can access the antd functionality in our project
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react';
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store = {store}>
 <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
