import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Login from './components/Login'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Stock from './Stock';
import Header from './components/Header';
import Signup from './components/Signup';
import News from './components/News';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <BrowserRouter>
  <React.StrictMode>
    <Routes>
    <Route path ='/' element={<Login/>}></Route>
    <Route path='/home' element={<Stock/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/news' element={<News/>}/>
      </Routes>
  </React.StrictMode>
  </BrowserRouter>
  </>

);

