import React, { Component } from 'react';
import Row from './Row';
import './Board.css';

export default class Board extends Component {
  render(){
    let data = this.props.data
    return (
      <div className="Board">
        <div className="rowButton long subtract" onClick={this.subtractRow}>–</div>
        { data.map((v, k) => 
          <Row data={v} key={k} row={k} 
            functions={this.props.functions} 
            position={this.props.position} 
            height={ (800 / data.length).toString() + "px" }>
          </Row> ) }
        <div className="rowButton long add" onClick={this.addRow}>+</div>
      </div>
    )
  }
}