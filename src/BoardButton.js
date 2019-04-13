import React, { Component } from 'react'

export default class BoardButton extends Component {
  render(){
    const {desktop, add, composition, buttonSize, updateComposition} = this.props
    const addRow = () => updateComposition((c)=>{
              c.addRow()})
    const subtractRow = () => updateComposition((c)=>{
              c.subtractRow()})
    const enabled = 
      add ? composition.rowsAddable() : composition.rowsSubtractable()
    let style = {
      lineHeight: buttonSize + "px", 
      height: buttonSize + "px",
      margin: "0 " + buttonSize + "px",
      borderRadius: add ? "0 0 10px 10px" : "10px 10px 0 0"
    } 
    if(!desktop || !enabled){
      style = {...style,  opacity: 0, cursor: "default" }
    }
    let className = "compButton board"
    let onClick = add ? addRow : subtractRow
    const text = add ? "+" : "–"
    return (
        <div className={className} onClick={desktop && enabled ? onClick : undefined}
            style={style}>{text}</div>
    )
  }
}