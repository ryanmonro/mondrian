import React, { Component } from 'react'
import {Swipeable} from 'react-touch'
import Tile from './Tile'
import RowButton from './RowButton'
import './Row.scss'

export default class Row extends Component {
  render(){
    let {row, height, composition, handleCompositionChange} = this.props
    const style = {
      height: height,
      borderTop: row.row === 0 ? "5px solid #212121" : "",
      borderBottom: row.row === (composition.rows.length - 1) ? "5px solid #212121" : ""
    }
    return (
      <div className="RowOuter">
        <RowButton {...this.props} add={false} height={height}/>
        <Swipeable onSwipeRight={()=>handleCompositionChange('subtractTile', row)} onSwipeLeft={()=>handleCompositionChange('addTile', row)} >
          <div className="Row" style={style}>
            { row.tiles.map((v, k) => 
              <Tile {...this.props} tile={v} key={k} 
                width={(100 / row.tiles.length).toString() + "%"}
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