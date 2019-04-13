import React, { Component } from 'react'
import EdgeButton from './EdgeButton'

export default class BoardButton extends Component {
  render(){
    const {add, composition, buttonSize, updateComposition} = this.props
    const addRow = () => updateComposition((c)=>{
              c.addRow()})
    const subtractRow = () => updateComposition((c)=>{
              c.subtractRow()})
    const enabled = 
      add ? composition.rowsAddable() : composition.rowsSubtractable()
    let style = {
      display: "block",
      lineHeight: buttonSize + "px", 
      height: buttonSize + "px",
      margin: "0 " + buttonSize + "px",
      borderRadius: add ? "0 0 10px 10px" : "10px 10px 0 0"
    } 
    let onClick = add ? addRow : subtractRow
    const text = add ? "+" : "–"
    return (
        <EdgeButton {...this.props} onClick={onClick}
            style={style} enabled={enabled}>{text}</EdgeButton>
    )
  }
}