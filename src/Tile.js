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
  render(){
    return (
      <div className={this.props.playing ? "Tile playing" : "Tile"}
        style={{
          width: this.props.width
        }}
      >
        <div 
          className="TileInner" 
          onClick={this.props.functions.change}
          data-row={this.props.row}
          data-col={this.props.col}
          style={{
            background: colour(this.props.value)
          }}>
        </div>
      </div>
    )
  }
}