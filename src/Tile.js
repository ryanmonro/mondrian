import React, { Component } from 'react';
import './Tile.scss';

const colours = [
  "#FFFFFF", // white
  "#F70F0F", // red
  "#FCD318", // yellow
  "#344D90", // blue
  "#A3A3A3", // grey
  "#212121" // black
]

export default class Tile extends Component {
  isPlaying(){
    const {tile, composition} = this.props
    const position = composition.position
    const cols = composition.rows[tile.row].tiles.length
    const percent = position / 100
    if (tile.note === 0 || position === 0) return false 
    const result = percent >= tile.col / cols && percent <= (tile.col + 1) / cols
    return result
  }
  render(){
    let {tile, handler, width} = this.props
    const colour = colours[tile.note]
    return (
      <div className={this.isPlaying() ? "Tile playing" : "Tile"}
        style={{ width: width }}
      >
        <div 
          className="TileInner" 
          onClick={()=>handler('change', tile)}
          style={{ background: colour }}>
        </div>
      </div>
    )
  }
}