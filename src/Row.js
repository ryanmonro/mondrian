import React, { Component } from 'react';
import Tile from './Tile';
import './Row.css';

export default class Row extends Component {
  tileIsPlaying(col, cols){
    const {position} = this.props
    const percent = position / 100
    return percent >= col / cols && percent <= (col + 1) / cols
  }
  add = ()=>{
    this.props.functions.add(this.props.row)
  }
  subtract = ()=>{
    this.props.functions.subtract(this.props.row) 
  }
  render(){
    let {data, row} = this.props
    return (
      <div className="RowOuter">
        <div className="rowButton subtract" onClick={ this.subtract }>
          –
        </div>
        <div className="Row">
          { data.map((v, k) => 
            <Tile value={v} key={k} row={row} col={k} 
              functions={this.props.functions} 
              width={ (100 / data.length).toString() + "%" }
              playing={ this.tileIsPlaying(k , data.length) }
            >
            </Tile> ) 
          }
        </div>
        <div className="rowButton add" onClick={ this.add }>
          +
        </div>
      </div>
    )
  }
}