import React, { Component } from 'react';
import Row from './Row';
import './Board.css';

export default class Board extends Component {
  render(){
    let {data, functions, position} = this.props
    return (
      <div className="Board">
        <div className="rowButton long subtract" onClick={functions.subtractRow}>–</div>
        { data.map((v, k) => 
          <Row data={v} key={k} row={k} 
            functions={functions} 
            position={position} 
            height={ (800 / data.length).toString() + "px" }>
          </Row> ) }
        <div className="rowButton long add" onClick={functions.addRow}>+</div>
      </div>
    )
  }
}