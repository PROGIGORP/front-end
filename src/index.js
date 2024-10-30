import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import MainMenu, { MainMenuItem } from './components/MainMenu/MainMenu';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import ContactPage from './components/ContactPage/ContactPage';
import UserLoginPage from './components/UserLoginPage/UserLoginPage';
import AboutPage from './components/AboutPage/AboutPage';
import UserRegisterPage from './components/UserRegisterPage/UserRegisterPage';

const MenuItems = [
  new MainMenuItem("Home", "/"),
  new MainMenuItem("Contact us", "/contact"),
  new MainMenuItem("About us", "/about"),
  new MainMenuItem("Log in", "/login"),
  new MainMenuItem("Register", "/register")
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <MainMenu items={ MenuItems }></MainMenu>
      <Routes>
        <Route exact path='/' Component={ HomePage } />
        <Route exact path='/contact' Component={ ContactPage } />
        <Route exact path='/about' Component={ AboutPage } />
        <Route exact path='/login' Component={ UserLoginPage } />
        <Route exact path='/register' Component={ UserRegisterPage } />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
