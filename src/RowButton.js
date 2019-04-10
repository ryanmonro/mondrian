import React, { Component } from 'react'

export default class RowButton extends Component {
  render(){
    const {desktop, long, add, row, height} = this.props
    let className = "rowButton", outerClassName = "rowButtonOuter"
    let onClick = add ? ()=>this.props.addTile(row) : ()=>this.props.subtractTile(row)
    if (long) {
      className += " long"
      outerClassName = "longButtonOuter"
      onClick = add ? this.props.addRow : this.props.subtractRow
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