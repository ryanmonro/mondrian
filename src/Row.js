import React, { Component } from 'react'
import {Swipeable} from 'react-touch'
import Tile from './Tile'
import RowButton from './RowButton'
import './Row.scss'

export default class Row extends Component {
  render(){
    let {board, rowData, row, boardHeight} = this.props
    const height = (boardHeight / board.data.length).toString() + "px"
    const style = {
      height: height,
      borderTop: row === 0 ? "5px solid #212121" : "",
      borderBottom: row === (board.data.length - 1) ? "5px solid #212121" : ""
    }
    return (
      <div className="RowOuter">
        <RowButton {...this.props} add={false} height={height}/>
        <Swipeable onSwipeRight={()=>board.subtractTile(row)} onSwipeLeft={()=>board.addTile(row)} >
          <div className="Row" style={style}>
            { rowData.map((v, k) => 
              <Tile {...this.props} note={v} key={k} row={row} cols={rowData.length} col={k} 
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

