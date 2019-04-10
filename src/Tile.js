import React, { Component } from 'react';
import './Tile.scss';

const colours = {
  "white": "#FFFFFF",
  "red": "#F70F0F",
  "yellow": "#FCD318",
  "blue": "#344D90",
  "grey": "#A3A3A3",
  "black": "#212121",
}

export default class Tile extends Component {
  render(){
    let {player, col, cols, tile} = this.props
    let width = (100 / cols).toString() + "%"
    const colour = colours[Object.keys(colours)[this.props.note]]
    return (
      <div className={tile.isPlaying() ? "Tile playing" : "Tile"}
        style={{ width: width }}
      >
        <div 
          className="TileInner" 
          onClick={()=>this.props.changeTile(tile)}
          style={{ background: colour }}>
        </div>
      </div>
    )
  }
}