import React from 'react';
// import components
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Reservation from './components/Reservation';
import Footer from './components/Footer';
import Home from './components/Home';
import Completemenu from './components/Completemenu';
import Header from './components/Header';
import Aboutteam from './components/Aboutteam';

const App = () => {
  return (
    <div className='h-full bg-pattern bg-repeat max-w-[1800px] mx-auto overflow-hidden'>
    <Router>
    
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/hero' element={<Hero />}/>
        <Route path='/about' element={ <About />}/>
        <Route path='/menu' element={<Completemenu />}/>
        <Route path='/reservation' element={<Reservation />}/>
        <Route path='/aboutteam' element={<Aboutteam />}/>
      </Routes>
    </Router>
    
   
    </div>
  );
};

export default App;
