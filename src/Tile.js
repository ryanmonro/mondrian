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
  colour(){
    return colours[Object.keys(colours)[this.props.note]]
  }
  render(){
    let {board, player, col, cols, rowIndex} = this.props
    let width = (100 / cols).toString() + "%"
    return (
      <div className={player.tileIsPlaying(col, cols) ? "Tile playing" : "Tile"}
        style={{ width: width }}
      >
        <div 
          className="TileInner" 
          onClick={()=>board.changeTile(rowIndex, col)}
          style={{
            background: this.colour()
          }}>
        </div>
      </div>
    )
  }
}