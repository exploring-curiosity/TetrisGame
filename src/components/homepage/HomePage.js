import React from 'react';
import {BrowserRouter as Router,Switch,Route,NavLink} from 'react-router-dom';

const HomePage = () => {
    return (<div>
        <div className="topnav">
            <NavLink to="/singleplayer">Single Player</NavLink>
            <NavLink to="/multiplayer">Multi Player</NavLink>
            <NavLink to="/computer">Computer Opponent</NavLink>
        </div>
    </div>  );
}
 
export default HomePage;