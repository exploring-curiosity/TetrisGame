import React,{useState} from 'react';

import Stage from '../Stage/Stage';
import Display from '../Display/Display';
import StartButton from '../StartButton/StartButton';

import {StyledTetrisWrapper,StyledTetris} from '../styles/StyledTetris'

import {usePlayer} from '../../hooks/usePlayer';
import {useStage} from '../../hooks/useStage';

const Tetris = () => {
    const [dropTime,setDropTime] = useStage(null);
    const [gameOver,setGameOver] = useState(null);

    const [player] = usePlayer();
    const [stage,setStage] = useStage(player);
    return (  
        <StyledTetrisWrapper>
            <StyledTetris>
                <Stage stage={stage} />
                <aside>
                    {
                        gameOver?(
                            <Display gameOver={gameOver} text="Game Over" />
                        ):
                        (<div>
                            <Display text='Score' />
                            <Display text='Rows' />
                            <Display text='Level' />
                        </div>
                    )}
                    <StartButton />
                </aside>
            </StyledTetris>
        </StyledTetrisWrapper>
    );
}
 
export default Tetris;