import React, { Component } from 'react';
import './App.css';
import Board from './Board';

function randomBoard(){
  let board = []
  const height = Math.ceil(Math.random() * 8)
  for(var i = 0; i < height; i++){
    var row = []
    let width = Math.ceil(Math.random() * 8)
    for(var t = 0; t < width; t++){
      row.push(Math.floor(Math.random() * 6))
    }
    board.push(row)
  }
  return board
}

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      data: randomBoard(),
      position: 0
    }
  }
  componentDidMount(){
    // this.timer = setInterval(() => {
    //   let position = this.state.position
    //   if (position === 100) {
    //     position = 1
    //   } else {
    //     position++
    //   }
    //   this.setState({position: position})
    // }, 20) 
  }
  render() {
    let data = this.state.data
    return (
      <div className="App">
        <Board data={data} position={this.state.position}>
        </Board>
      </div>
    );
  }
}

export default App;
