import React, { Component } from 'react';
import './Tile.css';

const colours = {
  "white": "white",
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
  render(){
    return (
      <div 
        className="Tile" 
        onClick={this.change}
        style={{background: colour(this.props.data)}}>
      </div>
    )
  }
}