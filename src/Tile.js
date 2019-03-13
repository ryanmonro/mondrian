import React, { Component } from 'react';
import './Tile.css';

const colours = {
  "black": "#212121",
  "red": "#F70F0F",
  "yellow": "#FCE318",
  "blue": "#0F7FBF",
  "grey": "#A3A3A3",
  "white": "#FFFFFF"
}

const colour = (index) => colours[Object.keys(colours)[index]]

export default class Tile extends Component {
  constructor(props){
    super(props)
    this.change = this.change.bind(this)
  }
  change(event){
    event.preventDefault()
    const {functions, row, col} = this.props
    functions.change(row, col)
  }
  render(){
    return (
      <div className="Tile"
        style={{
            width: this.props.width,
            padding: this.props.playing ? "2px" : 0
        }}
      >
        <div 
          className="TileInner" 
          onClick={this.change}
          style={{
            background: colour(this.props.value)
          }}>
        </div>
      </div>
    )
  }
}