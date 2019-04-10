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
  render(){
    let {tile, handleCompositionChange, width} = this.props
    const colour = colours[tile.note]
    return (
      <div className={tile.isPlaying() ? "Tile playing" : "Tile"}
        style={{ width: width }}
      >
        <div 
          className="TileInner" 
          onClick={()=>handleCompositionChange('change', tile)}
          style={{ background: colour }}>
        </div>
      </div>
    )
  }
}