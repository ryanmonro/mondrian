import React, { Component } from 'react';
import {Swipeable} from 'react-touch'
import Row from './Row';
import RowButton from './RowButton'
import './Board.scss';

export default class Board extends Component {
  render(){
    let {composition, boardSize, handler} = this.props
    const size = boardSize.toString() + "px"
    return (
      <div className="Board" style={{ width: size, height: size }}>
        <RowButton {...this.props} long={true} add={false} enabled={composition.rowsSubtractable()}/>
        <Swipeable onSwipeUp={()=>handler('addRow')} onSwipeDown={()=>handler('subtractRow')} >
          <div className="BoardInner">
            { composition.rows.map((v, k) => 
              <Row {...this.props} key={k} row={v} /> )
            }
          </div>
        </Swipeable>
        <RowButton {...this.props} long={true} add={true} enabled={composition.rowsAddable()}/>
      </div>
    )
  }
}