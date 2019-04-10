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
    let {board, player, col, cols, row, tile} = this.props
    let width = (100 / cols).toString() + "%"
    const colour = colours[Object.keys(colours)[this.props.note]]
    return (
      <div className={player.tileIsPlaying(col, cols) ? "Tile playing" : "Tile"}
        style={{ width: width }}
      >
        <div 
          className="TileInner" 
          onClick={()=>board.changeTile(row, col, tile)}
          style={{ background: colour }}>
        </div>
      </div>
    )
  }
}