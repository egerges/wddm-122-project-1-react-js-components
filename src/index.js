import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import './colors.css';
import './index.css';
import './fonts.css';

// Header Component
import Header from './components/Header/Header';

// Footer Component
import Footer from './components/Footer/Footer';

// App page
import App from './App';

// Portfolio page
import Portfolio from './Portfolio';


ReactDOM.render(
  // <React.StrictMode>
  //     <Header/>
  //     <Switch> {/* The Switch decides which component to show based on the current URL.*/}
  //       <Route exact path='/' component={App}></Route>
  //       <Route exact path='/portfolio' component={Portfolio}></Route>
  //     </Switch>
  //     <Footer/>
  // </React.StrictMode>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
        <Footer />
      </Router>,
  document.getElementById('root')
);
