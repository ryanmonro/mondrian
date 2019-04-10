import React, { Component } from 'react'

export default class RowButton extends Component {
  render(){
    const {desktop, long, add, row, height, handleCompositionChange} = this.props
    let className = "rowButton", outerClassName = "rowButtonOuter"
    let onClick = add ? ()=>handleCompositionChange('addTile', row) : ()=>handleCompositionChange('subtractTile', row)
    if (long) {
      className += " long"
      outerClassName = "longButtonOuter"
      onClick = add ? ()=>handleCompositionChange('addRow') : ()=>handleCompositionChange('subtractRow')
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