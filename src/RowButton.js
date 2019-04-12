import React, { Component } from 'react'

export default class RowButton extends Component {
  render(){
    const {desktop, long, add, row, height, enabled, updateComposition} = this.props
    const addTile = () => updateComposition((composition)=>{
              composition.addTileToRow(row.row)})
    const subtractTile = () => updateComposition((composition)=>{
              composition.subtractTileFromRow(row.row)})
    const addRow = () => updateComposition((composition)=>{
              composition.addRow()})
    const subtractRow = () => updateComposition((composition)=>{
              composition.subtractRow()})
    console.log(enabled)
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