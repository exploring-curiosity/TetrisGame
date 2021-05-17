import React from 'react';
import {BrowserRouter as Router,Switch,Route,NavLink} from 'react-router-dom';
import SinglePlayer from '../SinglePlayer/SinglePlayer';

const HomePage = () => {
    return (<div>
        <div className="topnav">
            <NavLink to="/singleplayer">Single Player</NavLink>
            <NavLink to="/multiplayer">Multi Player</NavLink>
            <NavLink to="/computer">Computer Opponent</NavLink>
        </div>
        <Switch>
            <Route path="/singleplayer">
                <SinglePlayer/>
            </Route>
            <Route path="/multiplayer">
                <SinglePlayer/>
            </Route>
            <Route path="/computer">
                <SinglePlayer/>
            </Route>
        </Switch>
    </div>  );
}
export default HomePage;