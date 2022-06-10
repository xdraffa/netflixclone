import React from 'react';
import './header.css'

export default ({black}) => {
  return(
    <header className={black ? "black" : ''}>
      <div className="header--logo">
        <a href="/">
          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/200px-Netflix_2015_logo.svg.png' alt='Netflix'/>
          </a>
      </div>
      
      <div className='header--user'>
        <a href='/'>
          <img src='https://occ-0-1914-1740.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAAFDYMbiTF-AWf2no26MKzO1Nons5AE4Ks-ha9KE5cN5Po1j3-yiTRuKeWSrSHCIqCTXrLZlGLi8CPQPq1jcw4yy3Vdg.png?r=ee6' alt="usuario"/>
        </a>
      </div>
    </header>
  )
}