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
    let {tile, changeTile, width} = this.props
    const colour = colours[Object.keys(colours)[tile.note]]
    return (
      <div className={tile.isPlaying() ? "Tile playing" : "Tile"}
        style={{ width: width }}
      >
        <div 
          className="TileInner" 
          onClick={()=>changeTile(tile)}
          style={{ background: colour }}>
        </div>
      </div>
    )
  }
}