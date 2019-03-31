import React, { Component } from 'react';
import './Tile.scss';

const colours = {
  "black": "#212121",
  "red": "#F70F0F",
  "yellow": "#FCD318",
  "blue": "#344D90",
  "grey": "#A3A3A3",
  "white": "#FFFFFF"
}

const colour = (index) => colours[Object.keys(colours)[index]]

export default class Tile extends Component {
  render(){
    let {functions, row, col} = this.props
    return (
      <div className={this.props.playing ? "Tile playing" : "Tile"}
        style={{
          width: this.props.width
        }}
      >
        <div 
          className="TileInner" 
          onClick={()=>this.props.functions.change(row, col)}
          style={{
            background: colour(this.props.value)
          }}>
        </div>
      </div>
    )
  }
}