import React from 'react';
// import PropTypes from 'prop-types';
import Stats from './Stats';
import Stopwatch from './Stopwatch';


const Header = () => {
  return (
    <header>
    	<Stats />
      <h1>Score Board</h1>
      <Stopwatch />
    </header>
  );
}

// Header.propTypes = {
// 	players: PropTypes.arrayOf(PropTypes.object), 
// 	title: PropTypes.string
// };

// Header.defaultProps = {
// 	title: 'Scoreboard'
// }

export default Header