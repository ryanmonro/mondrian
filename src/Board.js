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
        'subtract': this.subtractTile.bind(this)
      }
    }
    this.addRow = this.addRow.bind(this)
    this.subtractRow = this.subtractRow.bind(this)
  }
  change(e){
    const {row, col} = e.target.dataset
    let data = this.state.data
    let oldValue = data[row][col]
    data[row][col] = (oldValue + 1) % 6
    this.setState({data: data})
  }
  addTile(e){
    let data = this.state.data
    const row = e.target.parentNode.dataset.row
    if (data[row].length < 9){
      data[row].push(0)
      this.setState({data: data})
    }
  }
  subtractTile(e){
    let data = this.state.data
    const row = e.target.parentNode.dataset.row
    if (data[row].length > 1){
      data[row].pop()
      this.setState({data: data})
    }
  }
  addRow(){
    let data = this.state.data
    if (data.length < 6){
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
        <div className="rowButton long subtract" onClick={this.subtractRow}>–</div>
        { data.map((v, k) => 
          <Row data={v} key={k} row={k} 
            functions={this.state.functions} 
            position={this.props.position} 
            height={ (800 / data.length).toString() + "px" }>
          </Row> ) }
        <div className="rowButton long add" onClick={this.addRow}>+</div>
      </div>
    )
  }
}