import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './colors.css';
import './index.css';
import './fonts.css';

// Header Component
import Header from './components/Header/Header';

// Footer Component
import Footer from './components/Footer/Footer';

// Carousel Component
import Carousel from './components/Carousel/Carousel';

// Quote component and plugins
import Quote from './components/Quote/Quote';


ReactDOM.render(
  <React.StrictMode>
      <Header/>
      <Carousel/>
      <Quote />
      <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);
