import React, { Component } from 'react'

export default class RowButton extends Component {
  render(){
    const {desktop, add, buttonSize, row, height, updateComposition, border} = this.props
    const addTile = () => updateComposition((c)=>{
              c.addTileToRow(row.row)})
    const subtractTile = () => updateComposition((c)=>{
              c.subtractTileFromRow(row.row)})
    const enabled = add ? row.tilesAddable() : row.tilesSubtractable()
    let style = {
      height: height + "px",
      lineHeight: height + "px",
      width: buttonSize + "px",
      borderRadius: add ? "0px 10px 10px 0px" : "10px 0 0 10px"
    }
    if(!desktop || !enabled){
      style = {...style,  opacity: 0, cursor: "default" }
    }
    let className = "compButton"
    let onClick = (add ? addTile : subtractTile)
    const text = add ? "+" : "–"
    return (
        <div className={className} onClick={desktop && enabled ? onClick : undefined}
            style={style}>{text}</div>
    )
  }
}