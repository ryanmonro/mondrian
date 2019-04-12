import React, { Component } from 'react'
import {Swipeable} from 'react-touch'
import Tile from './Tile'
import RowButton from './RowButton'
import './Row.scss'

export default class Row extends Component {
  render(){
    const {row, composition, updateComposition, desktop, boardSize} = this.props
    const borderWidth = desktop ? 5 : 3
    const height = ((boardSize - 80 - (2 * borderWidth)) / composition.rows.length).toString() + "px"
    const style = {
      height: height,
      borderTop: row.row === 0 ? borderWidth + "px solid #212121" : "",
      borderBottom: row.row === (composition.rows.length - 1) ? borderWidth + "px solid #212121" : ""
    }
    const addTile = () => updateComposition((c)=>{
              c.addTileToRow(row.row)})
    const subtractTile = () => updateComposition((c)=>{
              c.subtractTileFromRow(row.row)})
    return (
      <div className="Row">
        <RowButton {...this.props} add={false} height={height}/>
        <Swipeable onSwipeRight={subtractTile} onSwipeLeft={addTile} >
          <div className="RowInner" style={style}>
            { row.tiles.map((v, k) => 
              <Tile {...this.props} tile={v} key={k} /> )
            }
          </div>
        </Swipeable>
        <RowButton {...this.props} add={true} height={height}/>
      </div>
    )
  }
}