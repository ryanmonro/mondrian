import React, { Component } from 'react'
import './App.css'
import Board from './Board'
import Tone from 'tone'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import PlayArrowIcon from '@material-ui/icons/PlayArrow'
import StopIcon from '@material-ui/icons/Stop'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'

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

const theme = createMuiTheme({
  palette: {
    type: 'dark'
  },
  typography: {
    useNextVariants: true,
  }
});

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
    this.start = this.start.bind(this)
    this.stop = this.stop.bind(this)
    this.randomise = this.randomise.bind(this)
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this)
    this.state = {
      windowWidth: 0,
      windowHeight: 0,
      board: {
        data: randomBoard(),
        functions: {
          'change': (row, col) => {
            let {board} = this.state
            board.data[row][col] = (board.data[row][col] + 1) % 6
            this.setState({board: board})
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
      },
      player: {
        position: 0,

      },
      playing: false,
      synths: synths,
      randomiseNext: false,
      randomiseInterval: 4
    }

  }
  componentDidMount(){
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
    Tone.Transport.PPQ = 24
    Tone.Transport.bpm.value = 60
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ windowWidth: window.innerWidth, windowHeight:window.innerHeight });
  }
  randomise(){
    if (this.state.playing === true) {
      this.setState({randomiseNext: true})
    } else {
      const newData = randomBoard()
      let board = this.state.board
      board.data = newData
      this.setState({board: board})
    }
  }
  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  }
  start(){
    Tone.Transport.scheduleRepeat((time)=>{
      let {player, board, playPosition, synths} = this.state
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
  }
  stop(){
    Tone.Transport.stop()
    Tone.Transport.cancel()
    let {player} = this.state
    let playPosition = []
    for(let i = 0; i < 6; i++){
      playPosition[i] = -1
    }
    player.position = 0
    this.setState({player: player, playPosition: playPosition, playing: false, randomiseNext: false})
  }
  buttonStyle(){
    return {margin: '5px', float: 'left'}
  }
  render() {
    let {board, player} = this.state, desktop = this.state.windowWidth > 600
    return (
      <div className="App">
        <MuiThemeProvider theme={theme}>
          <AppBar position="static" color='default'>
          <Toolbar>
          <Button variant="contained" onClick={this.start} disabled={this.state.playing} style={this.buttonStyle()}><PlayArrowIcon /></Button>
          <Button variant="contained" onClick={this.stop} disabled={!this.state.playing} style={this.buttonStyle()}><StopIcon /></Button>
          <Button variant="contained" onClick={this.randomise} disabled={this.state.randomiseNext} style={this.buttonStyle()}>Randomise</Button>
          </Toolbar>
          </AppBar>
        </MuiThemeProvider>
        <Board board={board} player={player} width={this.state.windowWidth} height={desktop ? this.state.windowHeight - 160 : this.state.windowHeight - 110} desktop={desktop}>
        </Board>
      </div>
    );
  }
}

export default App;