import React, { Component } from 'react'
import {Swipeable} from 'react-touch'
import Tile from './Tile'
import './Row.scss'

export default class Row extends Component {
  render(){
    let {board, row, ui, index, player} = this.props
    const height = (ui.height / board.data.length).toString() + "px"
    return (
      <div className="RowOuter">
        <div className="rowButtonOuter left">
          <div className="rowButton subtract" 
            onClick={ ui.desktop ? ()=>board.functions.subtractTile(index) : undefined }
            style={{ lineHeight: height }} >
            –
          </div>
        </div>
        <Swipeable onSwipeRight={()=>board.functions.subtractTile(index)} onSwipeLeft={()=>board.functions.addTile(index)} >
        <div className="Row" style={{ 
          height: height,
          borderTop: index === 0 ? "5px solid #212121" : "",
          borderBottom: index === (board.data.length - 1) ? "5px solid #212121" : ""
        }}>
          { row.map((v, k) => 
            <Tile note={v} key={k} cols={row.length} col={k} player={player}
              change={ ()=>board.functions.changeTile(index, k) }
            />
            ) 
          }
        </div>
        </Swipeable>
        <div className="rowButtonOuter right">
          <div className="rowButton add" 
            onClick={ ui.desktop ? ()=>board.functions.addTile(index) : undefined }
            style={{ lineHeight: height }} >
            +
          </div>
        </div>
      </div>
    )
  }
}

