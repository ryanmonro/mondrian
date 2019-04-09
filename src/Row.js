import React, { Component } from 'react'
import {Swipeable} from 'react-touch'
import Tile from './Tile'
import './Row.scss'

export default class Row extends Component {
  render(){
    let {board, row, rowIndex, player} = this.props
    let desktop = window.innerWidth > 600 && (typeof window.orientation === "undefined")
    const boardHeight = desktop ? window.innerHeight - 160 : window.innerHeight - 110
    const height = (boardHeight / board.data.length).toString() + "px"
    return (
      <div className="RowOuter">
        <div className="rowButtonOuter left">
          <div className="rowButton subtract" 
            onClick={ desktop ? ()=>board.subtractTile(rowIndex) : undefined }
            style={{ lineHeight: height }} >
            –
          </div>
        </div>
        <Swipeable onSwipeRight={()=>board.subtractTile(rowIndex)} onSwipeLeft={()=>board.addTile(rowIndex)} >
        <div className="Row" style={{ 
          height: height,
          borderTop: rowIndex === 0 ? "5px solid #212121" : "",
          borderBottom: rowIndex === (board.data.length - 1) ? "5px solid #212121" : ""
        }}>
          { row.map((v, k) => 
            <Tile note={v} key={k} rowIndex={rowIndex} cols={row.length} col={k} player={player} board={board}
            />
            ) 
          }
        </div>
        </Swipeable>
        <div className="rowButtonOuter right">
          <div className="rowButton add" 
            onClick={ desktop ? ()=>board.addTile(rowIndex) : undefined }
            style={{ lineHeight: height }} >
            +
          </div>
        </div>
      </div>
    )
  }
}

