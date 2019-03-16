import React, { Component } from 'react';
import './App.css';
import Board from './Board';
import Tone from 'tone';

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
    this.start = this.start.bind(this)
    this.state = {
      data: randomBoard(),
      position: 0,
      synths: [new Tone.Synth().toMaster(), new Tone.Synth().toMaster(), new Tone.Synth().toMaster(), new Tone.Synth().toMaster(), new Tone.Synth().toMaster(), new Tone.Synth().toMaster(), new Tone.Synth().toMaster(), new Tone.Synth().toMaster()]
    }
  }
  componentDidMount(){
    Tone.Transport.PPQ = 24
    Tone.Transport.scheduleRepeat((time)=>{
      let {position, data, playPosition, synths} = this.state
      // for(let i = 0; i < data.length; i++){
      for(const [i, row] of data.entries()){
        const notes = [0, 'C', 'D', 'E', 'G', 'A']
        // const row = data[i]
        const pos = playPosition[i]  // 4
        if ((position / 100) > (pos) / row.length 
            && !(pos === 0 && (position / 100 > (row.length - 1) / row.length))
          ) {
          const note = notes[row[pos]]
          if( note !== 0){
            synths[i].triggerAttackRelease(note + (8 - i).toString(), "16n", time)
          }
          playPosition[i] = playPosition[i] + 1
          if (playPosition[i] === row.length) {
            playPosition[i] = 0
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
    for(let i = 0; i < 8; i++){
      playPosition[i] = 0
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
