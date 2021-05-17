import { useState } from "react";
import './score.css';
const ScoreBoard = () => {
    const [floor,setfloor] = useState(0)
    const [level,setlevel] = useState(0)
    const [score,setscore] = useState(0)
    return ( 
        <div>
            <div className='floor-level'>
                <h1>{floor}</h1>
                <p>FLOOR</p>
            </div>
            <div className='score'>
                <h1>{score}</h1>
                <p>SCORE</p>
            </div>
            <div className='level'>
                <h1>{level}</h1>
                <p>LEVEL</p>
            </div>
            <div className='start'>
                <button>GO</button>
            </div>
        </div>
     );
}
 
export default ScoreBoard;