import React, { Component } from 'react';
import {Swipeable} from 'react-touch'
import Row from './Row';
import RowButton from './RowButton'
import './Board.scss';

export default class Board extends Component {
  render(){
    let {board} = this.props
    return (
      <div className="Board">
        <RowButton {...this.props} long={true} add={false} />
        <Swipeable onSwipeUp={board.addRow} onSwipeDown={board.subtractRow} >
          <div className="BoardInner">
            { board.data.map((v, k) => 
              <Row {...this.props} key={k} rowData={v} row={k}  
              /> ) 
            }
          </div>
        </Swipeable>
        <RowButton {...this.props} long={true} add={true} />
      </div>
    )
  }
}