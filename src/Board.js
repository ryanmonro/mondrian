import React, { Component } from 'react';
import Row from './Row';
import './Board.css';

export default class Board extends Component {
  constructor(props){
    super(props)
    this.state = {
      data: props.data,
      functions: {
        'change': this.change.bind(this),
        'add': this.addTile.bind(this),
        'subtract': this.subtractTile.bind(this),
        'addRow': this.addRow,
        'subtractRow': this.subtractRow
      }
    }
  }
  change(e){
    const {row, col} = e.target.dataset
    let data = this.state.data
    let oldValue = data[row][col]
    data[row][col] = (oldValue + 1) % 6
    this.setState({data: data})
  }
  addTile(row){
    let data = this.state.data
    console.log(data)
    // const row = e.target.dataset.row
    if (data[row].length < 9){
      data[row].push(0)
      this.setState({data: data})
    }
  }
  subtractTile(row){
    let data = this.state.data
    if (data[row].length > 1){
      data[row].pop()
      this.setState({data: data})
    }
  }
  addRow(){
    let data = this.state.data
    if (data.length < 8){
      data.push([0,0,0,0])
      this.setState({data: data})
    }
  }
  subtractRow(){
    let data = this.state.data
    if (data.length > 1){
      data.pop()
      this.setState({data: data})
    }
  }
  render(){
    let data = this.state.data
    return (
      <div className="Board">
        <div className="rowButton long subtract">–</div>
        { data.map((v, k) => <Row data={v} key={k} row={k} functions={this.state.functions} position={this.props.position}></Row> ) }
        <div className="rowButton long add">+</div>
      </div>
    )
  }
}