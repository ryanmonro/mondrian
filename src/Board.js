import React, { Component } from 'react';
import {Swipeable} from 'react-touch'
import Row from './Row';
import './Board.css';

export default class Board extends Component {
  render(){
    let {board, player, ui} = this.props
    return (
      <div className="boardOuter">
        <div className="longButtonOuter">
          <div className="rowButton long subtract" onClick={ui.desktop ? board.functions.subtractRow : undefined}>–</div>
          </div>
          <Swipeable onSwipeUp={board.functions.addRow} onSwipeDown={board.functions.subtractRow} >
        <div className="Board">
          { board.data.map((v, k) => 
            <Row row={v} key={k} index={k} board={board}
              player={player} 
              ui={ui}
            /> ) 
          }
        </div>
          </Swipeable>
        <div className="longButtonOuter">
          <div className="rowButton long add" onClick={ui.desktop ? board.functions.addRow : undefined}>+</div>
        </div>
      </div>
    )
  }
}