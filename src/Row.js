import React, { Component } from 'react'
import {Swipeable} from 'react-touch'
import Tile from './Tile'
import RowButton from './RowButton'
import './Row.scss'

export default class Row extends Component {
  render(){
    let {board, rowData, row, boardHeight, composition} = this.props
    const height = (boardHeight / board.data.length).toString() + "px"
    const style = {
      height: height,
      borderTop: row === 0 ? "5px solid #212121" : "",
      borderBottom: row === (composition.rows.length - 1) ? "5px solid #212121" : ""
    }
    return (
      <div className="RowOuter">
        <RowButton {...this.props} add={false} height={height}/>
        <Swipeable onSwipeRight={()=>board.subtractTile(row)} onSwipeLeft={()=>board.addTile(row)} >
          <div className="Row" style={style}>
            { rowData.tiles.map((v, k) => 
              <Tile {...this.props} tile={v} note={v.note} key={k} row={row} cols={rowData.tiles.length} col={k} 
              />
              ) 
            }
          </div>
        </Swipeable>
        <RowButton {...this.props} add={true} height={height}/>
      </div>
    )
  }
}