import React, { Component } from 'react'

export default class RowButton extends Component {
  render(){
    const {desktop, long, add, composition, row, height, updateComposition} = this.props
    const addTile = () => updateComposition((c)=>{
              c.addTileToRow(row.row)})
    const subtractTile = () => updateComposition((c)=>{
              c.subtractTileFromRow(row.row)})
    const addRow = () => updateComposition((c)=>{
              c.addRow()})
    const subtractRow = () => updateComposition((c)=>{
              c.subtractRow()})
    const enabled = long ? 
      (add ? composition.rowsAddable() : composition.rowsSubtractable() ) :
      (add ? row.tilesAddable() : row.tilesSubtractable())
    const style = enabled ? {lineHeight: height} : { opacity: 0, cursor: "default" }
    let className = "rowButton"
    let onClick = (add ? addTile : subtractTile)
    if (long) {
      className += " long"
      onClick = add ? addRow : subtractRow
    }
    className +=  add ? " add" : " subtract"
    const text = add ? "+" : "–"
    return (
        <div className={className} onClick={desktop && enabled ? onClick : undefined}
            style={style}>{text}</div>
    )
  }
}