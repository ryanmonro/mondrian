import React, { Component } from 'react';
import Row from './Row';
import './Board.css';

export default class Board extends Component {
  constructor(props){
    super(props)
    this.state = {
      data: props.data
    }
    this.change = this.change.bind(this)
  }
  change(row, col){
    let data = this.state.data
    let oldValue = data[row][col]
    data[row][col] = (oldValue + 1) % 6
    console.log(data)
    this.setState({data: data})
    
  }
  render(){
    let data = this.state.data
    return (
      <div className="Board">
        { data.map((v, k) => <Row data={v} key={k} row={k} tileClicked={this.change} position={this.props.position}></Row> ) }
      </div>
    )
  }
}