import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './colors.css';
import './index.css';

// Header Component
import Header from './components/Header/Header'

// Footer Component
import Footer from './components/Footer/Footer'

ReactDOM.render(
  <React.StrictMode>
    <Header/>
    
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);
