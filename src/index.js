import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import reducer, {initialState} from './Redux/reducer';
import { StateProvider } from './Redux/StateProvider';

// header('Access-Control-Allow-Origin: * ');

// header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');

// header('Access-Control-Allow-Headers: Content-Type, X-Auth-Token, Origin, Authorization');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer= {reducer} >
    <App />
    </StateProvider>
  </React.StrictMode>,
  // document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
