import React, { Component } from 'react';
import Row from './Row';
import './Board.css';

export default class Board extends Component {
  render(){
    let {data, functions, position, height} = this.props
    return (
      <div className="boardOuter">
      <div className="longButtonOuter">
        <div className="rowButton long subtract" onClick={functions.subtractRow}>–</div>
        </div>
      <div className="Board">
        { data.map((v, k) => 
          <Row data={v} key={k} row={k} 
            functions={functions} 
            position={position} 
            height={ (height / data.length).toString() + "px" }
            >
          </Row> ) }
      </div>
      <div className="longButtonOuter">
        <div className="rowButton long add" onClick={functions.addRow}>+</div>
      </div>
      </div>
    )
  }
}