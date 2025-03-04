import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import { store } from './app/store';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './features/';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={< Home />} />
          <Route path="/Login" element={< Login />} />
          <Route path="/Register" element={< Register />} />
          <Route path="/Dashboard" element={< Dashboard />} />




        </Routes>
      </BrowserRouter>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
