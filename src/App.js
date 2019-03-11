import React, { Component } from 'react';
import './App.css';
import Board from './Board';

function randomBoard(){
  let board = []
  for(var i = 0; i < 4; i++){
    var row = []
    for(var t = 0; t < 4; t++){
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
      data: randomBoard()
    }    
  }
  render() {
    let data = this.state.data
    return (
      <div className="App">
        <Board data={data}>
        </Board>
      </div>
    );
  }
}

export default App;
