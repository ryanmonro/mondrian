import React, { Component } from 'react';
import {Swipeable} from 'react-touch'
import Row from './Row';
import RowButton from './RowButton'
import './Board.scss';

export default class Board extends Component {
  render(){
    let {board, composition, boardHeight} = this.props
    const height = (boardHeight / composition.rows.length).toString() + "px"
    return (
      <div className="Board">
        <RowButton {...this.props} long={true} add={false} />
        <Swipeable onSwipeUp={board.addRow} onSwipeDown={board.subtractRow} >
          <div className="BoardInner">
            { composition.rows.map((v, k) => 
              <Row {...this.props} key={k} row={v} height={height}
              /> ) 
            }
          </div>
        </Swipeable>
        <RowButton {...this.props} long={true} add={true} />
      </div>
    )
  }
}