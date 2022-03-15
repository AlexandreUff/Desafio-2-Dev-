import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Header from './components/layout/Header';
import Main from './components/layout/Main';
import Footer from './components/layout/Footer';

ReactDOM.render(
  <>
    <Header/>
    <Main/>
    <Footer/>
  </>,
  document.getElementById('root')
);
