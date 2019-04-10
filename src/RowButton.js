import React, { Component } from 'react'

export default class RowButton extends Component {
  render(){
    const {desktop, long, add, row, height, updateComposition} = this.props
    const addTile = () => updateComposition((composition)=>{
              composition.addTileToRow(row.row)})
    const subtractTile = () => updateComposition((composition)=>{
              composition.subtractTileFromRow(row.row)})
    const addRow = () => updateComposition((composition)=>{
              composition.addRow()})
    const subtractRow = () => updateComposition((composition)=>{
              composition.subtractRow()})
    let className = "rowButton", outerClassName = "rowButtonOuter"
    let onClick = add ? addTile : subtractTile
    if (long) {
      className += " long"
      outerClassName = "longButtonOuter"
      onClick = add ? addRow : subtractRow
    }
    className +=  add ? " add" : " subtract"
    const text = add ? "+" : "–"
    return (
      <div className={outerClassName}>
        <div className={className} onClick={desktop ? onClick : undefined}
            style={{ lineHeight: height }}>{text}</div>
      </div>
    )
  }
}