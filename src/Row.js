import React, { Component } from 'react'
import {Swipeable} from 'react-touch'
import Tile from './Tile'
import RowButton from './RowButton'
import './Row.scss'

export default class Row extends Component {
  render(){
    const {row, composition, updateComposition, boardSize, border, buttonSize} = this.props
    const height = ((boardSize - (2 * buttonSize) - (2 * border.value)) / composition.rows.length)
    const style = {
      height: height + "px",
      borderTop: row.row === 0 ? border.string : "",
      borderBottom: row.row === (composition.rows.length - 1) ? border.string : "",
      borderLeft: border.string,
      borderRight: border.string
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