import React from 'react';
import { Link } from "react-router-dom";
import returnImg from '../assets/return.svg';

function Header() {
  return (
    <>
      <header className="header">
        <h1 className="header-title">Top 100 iTunes track</h1>
        <Link to='/donate' className="header-donation">Donation</Link>
      </header>
      <div className="return-block" onClick={() => window.history.go(-1)}>
        <img className="return-img" src={returnImg} alt="return"/>
        <p className="return-text"> return back</p>
      </div>
    </>
  );
}

export default Header;
