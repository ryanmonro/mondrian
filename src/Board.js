import React, { Component } from 'react';
import Row from './Row';
import './Board.css';

export default class Board extends Component {
  constructor(props){
    super(props)
    this.change = this.change.bind(this)
    this.addTile = this.addTile.bind(this)
    this.state = {
      data: props.data,
      functions: {
        'change': this.change,
        'add': this.addTile,
        'subtract': this.subtractTile
      }
    }
  }
  change(row, col){
    let data = this.state.data
    let oldValue = data[row][col]
    data[row][col] = (oldValue + 1) % 6
    this.setState({data: data})
  }
  addTile(row){
    let data = this.state.data
    if (data[row].length < 9){
      data[row].push(0)
      this.setState({data: data})
    }
  }
  subtractTile = (row) => {
    let data = this.state.data
    if (data[row].length > 1){
      data[row].pop()
      this.setState({data: data})
    }
  }
  render(){
    let data = this.state.data
    return (
      <div className="Board">
        { data.map((v, k) => <Row data={v} key={k} row={k} functions={this.state.functions} position={this.props.position}></Row> ) }
      </div>
    )
  }
}