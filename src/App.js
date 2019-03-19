import React, { Component } from 'react';
import './App.css';
import Board from './Board';
import Tone from 'tone';

function randomBoard(){
  let board = []
  const height = Math.ceil(Math.random() * 6)
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
    let synths = []
    for (let i = 0; i < 6; i++){
      synths.push(new Tone.Synth({
        oscillator  : {
          type  : "sine"
        }
      }).toMaster())
    }
    this.start = this.start.bind(this)
    this.state = {
      data: randomBoard(),
      position: 0,
      synths: synths
    }

  }
  componentDidMount(){
    Tone.Transport.PPQ = 24
    Tone.Transport.scheduleRepeat((time)=>{
      let {position, data, playPosition, synths} = this.state
      for(const [i, row] of data.entries()){
        const notes = [0, 'C', 'D', 'E', 'G', 'A']
        let newPos = Math.floor((position / 100) * row.length)
        if (playPosition[i] != newPos) {
          playPosition[i] = newPos
          if (playPosition[i] === row.length) {
            playPosition[i] = 0
          }
          const note = notes[row[playPosition[i]]]
          console.log(note, row, playPosition, i)
          if(note !== 0){
            synths[i].triggerAttackRelease(note + (i + 2).toString(), "16n", time)
          }
        }
      }
      if (position >= 100) {
        position = 1
      } else {
        position += (100 / (24 * 4))
      }
      this.setState({position: position, playPosition: playPosition})
    }, "1i")
  }
  start(){
    Tone.Transport.start()
    Tone.start()
    let playPosition = []
    for(let i = 0; i < 6; i++){
      playPosition[i] = -1
    }
    this.setState({position: 1, playPosition: playPosition})
  }
  render() {
    let data = this.state.data
    return (
      <div className="App">
        <button onClick={this.start}>Start</button>
        <Board data={data} position={this.state.position}>
        </Board>
      </div>
    );
  }
}

export default App;
