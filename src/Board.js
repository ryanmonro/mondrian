import React, { Component } from 'react';
import {Swipeable} from 'react-touch'
import Row from './Row';
import BoardButton from './BoardButton'
import './Board.scss';

export default class Board extends Component {
  render(){
    const {composition, boardSize, marginTop, updateComposition} = this.props
    const size = boardSize.toString() + "px"
    const addRow = () => updateComposition((c)=>{
              c.addRow()})
    const subtractRow = () => updateComposition((c)=>{
              c.subtractRow()})
    return (
      <div className="Board" style={{ width: size, height: size, marginTop: marginTop }}>
        <BoardButton {...this.props} add={true} />
        <Swipeable onSwipeUp={subtractRow} onSwipeDown={addRow} >
          <div className="BoardInner">
            { composition.rows.slice().reverse().map((v, k) => 
              <Row {...this.props} key={k} row={v} /> )
            }
          </div>
        </Swipeable>
        <BoardButton {...this.props} add={false} />
      </div>
    )
  }
}