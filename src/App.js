import React, { Component } from 'react'
import './App.css'
import Board from './Board'
import Tone from 'tone'
import Controls from './Controls'
import Composition from './Composition'

const settings = {
  minHeight: 2,
  maxHeight: 4,
  maxWidth: 5,
  notes: [0, 'C', 'D', 'E', 'G', 'A'],
  chanceOfRest: 0.5,
  subdivs: [3,4,5,6,8]
}

function randomBoard(){
  let board = []
  const height = 4
  // settings.minHeight + Math.floor(Math.random() * (settings.maxHeight - settings.minHeight + 1))
  for(var i = 0; i < height; i++){
    var row = []
    let width = settings.subdivs[Math.floor(Math.random() * 5)]
    //Math.pow(2, Math.floor(Math.random() * 4))
      // Math.ceil(Math.random() * settings.maxWidth))
    for(var t = 0; t < width; t++){
      let note = 0
      if (Math.random() > settings.chanceOfRest){
        note = Math.ceil(Math.random() * (settings.notes.length - 1))
      }
      row.push(note)
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
        oscillator: {
          type: "sine"
        },
        volume: -12
      }).toMaster())
    }
    this.state = {
      composition: new Composition(),
      board: {
        data: randomBoard(),
        'changeTile': (row, col, tile) => {
          let {board, composition} = this.state
          // board.data[row][col] = (board.data[row][col] + 1) % 6
          composition.change(row, col)
          this.setState({board: board, composition: composition})
        },
        'addTile': (row) => {
          let {board} = this.state
          if (board.data[row].length < 9){
            board.data[row].push(0)
            this.setState({board: board})
          }
        },
        'subtractTile': (row) => {
          let {board} = this.state
          if (board.data[row].length > 1){
            board.data[row].pop()
            this.setState({board: board})
          }
        },
        'addRow': () => {
          let {board} = this.state
          if (board.data.length < 6){
            board.data.push([0,0,0,0])
            this.setState({board: board})
          }
        },
        'subtractRow': () => {
          let {board} = this.state
          if (board.data.length > 1){
            board.data.pop()
            this.setState({board: board})
          }
        }
      },
      player: {
        synths: synths,
        position: 0,
        playPosition: [],
        tileIsPlaying: function(col, cols) {
          const percent = this.position / 100
          if (this.position === 0) return false
          return percent >= col / cols && percent <= (col + 1) / cols
        },
      },
      start: () => {
        Tone.Transport.scheduleRepeat((time)=>{
          let {player, board} = this.state
          for(const [i, row] of board.data.entries()){
            const notes = settings.notes
            let newPos = Math.floor((player.position / 100) * row.length)
            if (playPosition[i] !== newPos) {
              playPosition[i] = newPos
              if (playPosition[i] === row.length) {
                playPosition[i] = 0
              }
              const note = notes[row[playPosition[i]]]
              if(note !== 0){
                synths[i].triggerAttackRelease(note + (i + 2).toString(), "16n", time)
              }
            }
          }
          if (player.position >= 100) {
            player.position = 1
            if (this.state.randomiseNext === true){
              const newData = randomBoard()
              let board = this.state.board
              board.data = newData
              this.setState({board: board, randomiseNext: false})
            }
          } else {
            player.position += (100 / (24 * 4))
          }
          this.setState({player: player, playPosition: playPosition})
        }, "1i")
        Tone.Transport.start("+0.1")
        Tone.start()
        let playPosition = []
        for(let i = 0; i < 6; i++){
          playPosition[i] = -1
        }
        let {player} = this.state
        player.position = 1
        this.setState({player: player, playPosition: playPosition, playing: true})
      },
      stop: ()=>{
        Tone.Transport.stop()
        Tone.Transport.cancel()
        let {player} = this.state
        let playPosition = []
        for(let i = 0; i < 6; i++){
          playPosition[i] = -1
        }
        player.position = 0
        this.setState({player: player, playPosition: playPosition, playing: false, randomiseNext: false})
      },
      randomise: ()=>{
        if (this.state.playing === true) {
          this.setState({randomiseNext: true})
        } else {
          const newData = randomBoard()
          let board = this.state.board
          board.data = newData
          this.setState({board: board})
        }
      },
      playing: false,
      synths: synths,
      randomiseNext: false,
      randomiseInterval: 4
    }
  }
  componentDidMount(){
    Tone.Transport.PPQ = 24
    Tone.Transport.bpm.value = 60
  }
  render() {
    const desktop = window.innerWidth > 600
    const boardHeight = desktop ? window.innerHeight - 160 : window.innerHeight - 110
    return (
      <div className="App">
        <Controls {...this.state} />
        <Board {...this.state} desktop={desktop} boardHeight={boardHeight}/>
      </div>
    )
  }
}

export default App;