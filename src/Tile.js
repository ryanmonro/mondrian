import React, { Component } from 'react';
import Tone from 'tone'
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
    const ticksPerBar = Tone.Transport.PPQ * 4
    const transport = Tone.Transport.ticks % ticksPerBar
    const cols = composition.rows[tile.row].tiles.length
    const position = Math.floor(transport * cols / ticksPerBar)
    const playing = Tone.Transport.state === "started"
    if (tile.note === 0 || !playing) return false 
    const result = position >= tile.col && 
      position <= (tile.col + 1) 
    return result
  }
  render(){
    let {tile, updateComposition, width} = this.props
    const colour = colours[tile.note]
    const onClick = () => updateComposition((composition)=>{
              composition.change(tile.row, tile.col)})
    return (
      <div className="Tile"
        style={{ width: width, background: colour }}
          onClick={onClick}
          
      >
        <div 
          className={this.isPlaying() ? "TileFlasher playing" : "TileFlasher"} >
        </div>
      </div>
    )
  }
}