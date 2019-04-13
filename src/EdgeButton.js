import React, { Component } from 'react'

export default class EdgeButton extends Component {
  render(){
    const {desktop, children} = this.props
    let {style, enabled, onClick} = this.props
    if(!desktop || !enabled){
      style = {...style,  opacity: 0, cursor: "default" }
    }
    let className = "compButton"
    return (
        <div className={className} onClick={desktop && enabled ? onClick : undefined}
            style={style}>{children}</div>
    )
  }
}