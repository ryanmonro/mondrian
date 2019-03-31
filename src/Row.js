import React, { Component } from 'react'
import {Swipeable} from 'react-touch'
import Tile from './Tile'
import './Row.scss'

export default class Row extends Component {
  tileIsPlaying(col, cols){
    const {position} = this.props
    const percent = position / 100
    if (position === 0) return false
    return percent >= col / cols && percent <= (col + 1) / cols
  }
  render(){
    let {data, row, functions, height, desktop, board} = this.props
    return (
      <div className="RowOuter">
        <div className="rowButtonOuter left">
          <div className="rowButton subtract" 
            onClick={ desktop ? ()=>functions.subtract(row) : undefined }
            style={{ lineHeight: this.props.height }} >
            –
          </div>
        </div>
        <Swipeable onSwipeRight={()=>functions.subtract(row)} onSwipeLeft={()=>functions.add(row)} >
        <div className="Row" style={{ 
          height: height,
          borderTop: row === 0 ? "5px solid #212121" : "",
          borderBottom: row === (board.length - 1) ? "5px solid #212121" : ""
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
        </Swipeable>
        <div className="rowButtonOuter right">
          <div className="rowButton add" 
            onClick={ desktop ? ()=>functions.add(row) : undefined }
            style={{ lineHeight: this.props.height }} >
            +
          </div>
        </div>
      </div>
    )
  }
}

