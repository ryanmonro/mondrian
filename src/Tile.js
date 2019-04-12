import React, { Component } from 'react';
import './Tile.scss';

const colours = [
  "#FFFFFF", // white
  "#F70F0F", // red
  "#FCD318", // yellow
  "#344D90", // blue
  "#A3A3A3", // grey
  // "#548417", // green
  "#212121" // black
]

export default class Tile extends Component {
  render(){
    const {tile, composition, updateComposition} = this.props
    const colour = colours[tile.note]
    const row = composition.rows[tile.row]
    const width = (100 / row.tiles.length).toString() + "%"
    const onClick = () => updateComposition((composition)=>{
              composition.change(tile.row, tile.col)})
    return (
      <div className="Tile"
        style={{ width: width, background: colour }}
          onClick={onClick}
      >
        <div 
          className={tile.isPlaying ? "TileFlasher playing" : "TileFlasher"} >
        </div>
      </div>
    )
  }
}