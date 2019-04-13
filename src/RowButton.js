import React, { Component } from 'react'
import EdgeButton from './EdgeButton'

export default class RowButton extends Component {
  render(){
    const {add, buttonSize, row, height, updateComposition, border} = this.props
    const addTile = () => updateComposition((c)=>{
              c.addTileToRow(row.row)})
    const subtractTile = () => updateComposition((c)=>{
              c.subtractTileFromRow(row.row)})
    const enabled = add ? row.tilesAddable() : row.tilesSubtractable()
    let style = {
      height: height - (2 * border.value) + "px",
      lineHeight: height + "px",
      width: buttonSize + "px",
      borderRadius: add ? "0px 10px 10px 0px" : "10px 0 0 10px"
    }
    let onClick = (add ? addTile : subtractTile)
    const text = add ? "+" : "–"
    return (
        <EdgeButton {...this.props} onClick={onClick}
            style={style} enabled={enabled} >{text}</EdgeButton>
    )
  }
}