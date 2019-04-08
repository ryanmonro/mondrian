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
  isPlaying(){
    const {player, col, row} = this.props
    const cols = row.length
    const percent = player.position / 100
    if (player.position === 0) return false
    return percent >= col / cols && percent <= (col + 1) / cols
  }
  render(){
    let {board, change, row} = this.props
    let width = (100 / row.length).toString() + "%"
    return (
      <div className={this.isPlaying() ? "Tile playing" : "Tile"}
        style={{ width: width }}
      >
        <div 
          className="TileInner" 
          onClick={change}
          style={{
            background: this.colour()
          }}>
        </div>
      </div>
    )
  }
}