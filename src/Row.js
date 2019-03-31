import React, { Component } from 'react';
import Tile from './Tile';
import './Row.scss';

export default class Row extends Component {
  tileIsPlaying(col, cols){
    const {position} = this.props
    const percent = position / 100
    if (position === 0) return false
    return percent >= col / cols && percent <= (col + 1) / cols
  }
  // height(){
  //   const boardHeight = 800 // (this.props.width < 600 ? 400 : 800)
  //   // console.log(boardHeight)
  //   return ( boardHeight / 2).toString() + "px"
  // }
  render(){
    let {data, row, functions, height} = this.props
    return (
      <div className="RowOuter" data-row={row} >
        <div className="rowButtonOuter left">
          <div className="rowButton subtract" 
            onClick={ functions.subtract }
            style={{ lineHeight: this.props.height }} >
            –
          </div>
        </div>
        <div className="Row" style={{ 
          height: height,
          borderTop: row === 0 ? "5px solid #212121" : "",
          borderBottom: row === data.length ? "5px solid #212121" : ""
        }}>
          { data.map((v, k) => 
            <Tile value={v} key={k} row={row} col={k} 
              functions={functions} 
              width={ (100 / data.length).toString() + "%" }
              playing={ this.tileIsPlaying(k, data.length) }
            >
            </Tile> ) 
          }
        </div>
        <div className="rowButtonOuter right">
          <div className="rowButton add" 
            onClick={ functions.add }
            style={{ lineHeight: this.props.height }} >
            +
          </div>
        </div>
      </div>
    )
  }
}

