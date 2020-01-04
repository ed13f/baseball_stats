import React from 'react';

const Header = () => {
  return (
    <header className="nav-header">
	    <nav className="wrapper nav-wrapper">
	    <ul className="main-nav">
	    	<li><a href="/coaches">Profile</a></li>
	    	<li><a href="/games">Team</a></li>
	    	<li><a href="/league">League</a></li>
	    </ul>
	    <div className="account-options">
	    	<a>login</a>
	    	<a>logout</a>
	    </div>
	    </nav>
    </header>
  );
}


export default Header