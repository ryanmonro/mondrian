import React, { Component } from 'react';
import {Swipeable} from 'react-touch'
import Row from './Row';
import './Board.css';

export default class Board extends Component {
  render(){
    let {data, functions, position, height, desktop} = this.props
    return (
      <div className="boardOuter">
      <div className="longButtonOuter">
        <div className="rowButton long subtract" onClick={desktop ? functions.subtractRow : undefined}>–</div>
        </div>
        <Swipeable onSwipeUp={functions.addRow} onSwipeDown={functions.subtractRow} >
      <div className="Board">
        { data.map((v, k) => 
          <Row data={v} key={k} row={k} board={data}
            functions={functions} 
            position={position} 
            height={ (height / data.length).toString() + "px" }
            desktop={desktop}
            >
          </Row> ) }
      </div>
        </Swipeable>
      <div className="longButtonOuter">
        <div className="rowButton long add" onClick={desktop ? functions.addRow : undefined}>+</div>
      </div>
      </div>
    )
  }
}