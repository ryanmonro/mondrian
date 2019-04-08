import React, { Component } from 'react'
import {Swipeable} from 'react-touch'
import Tile from './Tile'
import './Row.scss'

export default class Row extends Component {
  tileIsPlaying(col, cols){
    const {player} = this.props
    const percent = player.position / 100
    if (player.position === 0) return false
    return percent >= col / cols && percent <= (col + 1) / cols
  }
  render(){
    let {board, row, index, height, desktop} = this.props
    return (
      <div className="RowOuter">
        <div className="rowButtonOuter left">
          <div className="rowButton subtract" 
            onClick={ desktop ? ()=>board.functions.subtractTile(row) : undefined }
            style={{ lineHeight: this.props.height }} >
            –
          </div>
        </div>
        <Swipeable onSwipeRight={()=>board.functions.subtractTile(row)} onSwipeLeft={()=>board.functions.addTile(row)} >
        <div className="Row" style={{ 
          height: height,
          borderTop: row === 0 ? "5px solid #212121" : "",
          borderBottom: row === (board.length - 1) ? "5px solid #212121" : ""
        }}>
          { row.map((v, k) => 
            <Tile note={v} key={k} row={index} col={k} board={board}
              width={ (100 / row.length).toString() + "%" }
              playing={ this.tileIsPlaying(k, row.length) }
            >
            </Tile> ) 
          }
        </div>
        </Swipeable>
        <div className="rowButtonOuter right">
          <div className="rowButton add" 
            onClick={ desktop ? ()=>board.functions.addTile(row) : undefined }
            style={{ lineHeight: this.props.height }} >
            +
          </div>
        </div>
      </div>
    )
  }
}

