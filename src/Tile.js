import React, { Component } from 'react';
import './Tile.css';

const colours = {
  "white": "#FFFFFF",
  "red": "#F70F0F",
  "yellow": "#FCE318",
  "blue": "#0F7FBF",
  "grey": "#A3A3A3",
  "black": "#212121"
}

const colour = (index) => colours[Object.keys(colours)[index]]

export default class Tile extends Component {
  constructor(props){
    super(props)
    this.change = this.change.bind(this)
  }
  change(event){
    event.preventDefault()
    const {tileClicked, row, col} = this.props
    tileClicked(row, col)
  }
  isPlaying(){
    const {position, cols, col} = this.props
    const percent = position / 100
    return percent >= col / cols && percent <= (col + 1) / cols
  }
  render(){
    return (
      <div className="Tile"
        style={{
            width: this.props.width + "%",
            padding: this.isPlaying() ? "2px" : 0
        }}
      >
        <div 
          className="TileInner" 
          onClick={this.change}
          style={{
            background: colour(this.props.data),
            // filter: this.props.playing ? "brightness(150%)" : "none"
            // opacity: this.props.playing ? 0.8 : 1
          }}>
        </div>
      </div>
    )
  }
}