import React, { Component } from 'react';
import {Swipeable} from 'react-touch'
import Row from './Row';
import './Board.scss';

export default class Board extends Component {
  render(){
    let {board, player} = this.props
    let desktop = window.innerWidth > 600
    return (
      <div className="boardOuter">
        <div className="longButtonOuter">
          <div className="rowButton long subtract" onClick={desktop ? board.subtractRow : undefined}>–</div>
        </div>
        <Swipeable onSwipeUp={board.addRow} onSwipeDown={board.subtractRow} >
          <div className="Board">
            { board.data.map((v, k) => 
              <Row key={k} row={v} rowIndex={k} board={board}
                player={player} 
              /> ) 
            }
          </div>
        </Swipeable>
        <div className="longButtonOuter">
          <div className="rowButton long add" onClick={desktop ? board.addRow : undefined}>+</div>
        </div>
      </div>
    )
  }
}