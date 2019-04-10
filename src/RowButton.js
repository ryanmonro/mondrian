import React, { Component } from 'react'

export default class RowButton extends Component {
  render(){
    const {desktop, long, add, row, height, handler} = this.props
    let className = "rowButton", outerClassName = "rowButtonOuter"
    let onClick = add ? ()=>handler('addTile', row) : ()=>handler('subtractTile', row)
    if (long) {
      className += " long"
      outerClassName = "longButtonOuter"
      onClick = add ? ()=>handler('addRow') : ()=>handler('subtractRow')
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