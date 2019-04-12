import React, { Component } from 'react';
import {Swipeable} from 'react-touch'
import Row from './Row';
import RowButton from './RowButton'
import './Board.scss';

export default class Board extends Component {
  render(){
    const {composition, boardSize, updateComposition} = this.props
    
    const size = boardSize.toString() + "px"
    const addRow = () => updateComposition((c)=>{
              c.addRow()})
    const subtractRow = () => updateComposition((c)=>{
              c.subtractRow()})
    return (
      <div className="Board" style={{ width: size, height: size }}>
        <RowButton {...this.props} long={true} add={false} />
        <Swipeable onSwipeUp={addRow} onSwipeDown={subtractRow} >
          <div className="BoardInner">
            { composition.rows.map((v, k) => 
              <Row {...this.props} key={k} row={v} /> )
            }
          </div>
        </Swipeable>
        <RowButton {...this.props} long={true} add={true} />
      </div>
    )
  }
}