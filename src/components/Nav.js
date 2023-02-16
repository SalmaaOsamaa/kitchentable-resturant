import React from 'react';
//importing data 

import {navData} from '../data'
const Nav = () => {
  return <nav className='w-full h-full'>
    <ul className='h-full flex flex-col justify-center items-center gap-y-6'>
      {navData.map((item, index)=> {
        return <li key={index}>
          <a 
          className='text-xl capitalize font-primary
           hover:text-lime-100 transition-all duration-300'
           href={item.href}>{item.name}</a>
        </li>
      })}
    </ul>
  </nav>
};

export default Nav;
