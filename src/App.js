import React, { Component } from 'react'
import './App.css'
import Board from './Board'
import Tone from 'tone'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import PlayArrowIcon from '@material-ui/icons/PlayArrow'
import StopIcon from '@material-ui/icons/Stop'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
// import AppBar from '@material-ui/core/AppBar'
// import TextField from '@material-ui/core/TextField'
// import Switch from '@material-ui/core/Switch'
// import FormControlLabel from '@material-ui/core/FormControlLabel'
// import FormControl from '@material-ui/core/FormControl'
// import MenuItem from '@material-ui/core/MenuItem'

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
    this.state = {
      data: randomBoard(),
      position: 0,
      playing: false,
      synths: synths,
      randomiseNext: false,
      randomiseInterval: 4,
      functions: {
        'change': this.change.bind(this),
        'add': this.addTile.bind(this),
        'subtract': this.subtractTile.bind(this),
        'addRow': this.addRow.bind(this),
        'subtractRow': this.subtractRow.bind(this)
      },
    }

  }
  componentDidMount(){
    Tone.Transport.PPQ = 24
    Tone.Transport.scheduleRepeat((time)=>{
      let {position, data, playPosition, synths} = this.state
      for(const [i, row] of data.entries()){
        const notes = [0, 'C', 'D', 'E', 'G', 'A']
        let newPos = Math.floor((position / 100) * row.length)
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
      if (position >= 100) {
        position = 1
        if (this.state.randomiseNext === true){
          const newData = randomBoard()
          this.setState({data: newData, randomiseNext: false})
        }
      } else {
        position += (100 / (24 * 4))
      }
      this.setState({position: position, playPosition: playPosition})
    }, "1i")
  }
  randomise(){
    if (this.state.playing === true) {
      this.setState({randomiseNext: true})
    } else {
      const newData = randomBoard()
      this.setState({data: newData})
    }
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
  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  }
  start(){
    Tone.Transport.start()
    Tone.start()
    let playPosition = []
    for(let i = 0; i < 6; i++){
      playPosition[i] = -1
    }
    this.setState({position: 1, playPosition: playPosition, playing: true})
  }
  stop(){
    Tone.Transport.stop()
    let playPosition = []
    for(let i = 0; i < 6; i++){
      playPosition[i] = -1
    }
    this.setState({position: 0, playPosition: playPosition, playing: false, randomiseNext: false})
  }
  buttonStyle(){
    return {margin: '5px'}
  }
  render() {
    let data = this.state.data
    return (
      <div className="App">
        <MuiThemeProvider theme={theme}>
          
          <Toolbar style={{display: 'inline-block'}}>
          <Button variant="contained" onClick={this.start} disabled={this.state.playing} style={this.buttonStyle()}><PlayArrowIcon /></Button>
          <Button variant="contained" onClick={this.stop} disabled={!this.state.playing} style={this.buttonStyle()}><StopIcon /></Button>
          <Button variant="contained" onClick={this.randomise} disabled={this.state.randomiseNext} style={this.buttonStyle()}>Randomise</Button>
          </Toolbar>
          
        </MuiThemeProvider>
        <Board data={data} position={this.state.position} functions={this.state.functions}>
        </Board>
      </div>
    );
  }
}

export default App;
