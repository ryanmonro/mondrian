import React, { Component } from 'react';
import Tile from './Tile';
import './Row.scss';

export default class Row extends Component {
  tileIsPlaying(col, cols){
    const {position} = this.props
    const percent = position / 100
    return percent >= col / cols && percent <= (col + 1) / cols
  }
  render(){
    let {data, row, functions} = this.props
    return (
      <div className="RowOuter" data-row={row} >
        <div className="rowButton subtract" 
          onClick={ functions.subtract }
          style={{ lineHeight: this.props.height }} >
          –
        </div>
        <div className="Row" style={{ height: this.props.height }}>
          { data.map((v, k) => 
            <Tile value={v} key={k} row={row} col={k} 
              functions={functions} 
              width={ (100 / data.length).toString() + "%" }
              playing={ this.tileIsPlaying(k, data.length) }
            >
            </Tile> ) 
          }
        </div>
        <div className="rowButton add" onClick={ functions.add }
          style={{ lineHeight: this.props.height }} >
          +
        </div>
      </div>
    )
  }
}