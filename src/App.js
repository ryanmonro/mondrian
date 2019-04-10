import React, { Component } from 'react'
import './App.css'
import Tone from 'tone'
import Composition from './Composition'
import Board from './Board'
import Controls from './Controls'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      composition: new Composition(),
      updateComposition: (fn) => {
        this.setState((prevState) => {
          fn(prevState)
          return {composition: prevState.composition}
        })
      },
      play: () => {
        Tone.Transport.scheduleRepeat((time)=>{
          this.state.updateComposition((prevState)=>{
            prevState.composition.play(time)
          })
        }, "1i")
        Tone.Transport.start("+0.2")
        Tone.start()
        this.state.updateComposition((prevState)=>{
          prevState.composition.playing = true
          prevState.composition.position = 1
        })
      },
      stop: () => {
        Tone.Transport.stop()
        Tone.Transport.cancel()
        this.state.updateComposition((prevState)=>{
          prevState.composition.position = 0
          prevState.composition.playing = false
          prevState.composition.randomiseNext = false
        })
      },
      handler: (cmd, data) => {
        this.setState((prevState) => {
          switch(cmd){
            case 'change':
              prevState.composition.change(data.row, data.col)
              break
            case 'addRow':
              prevState.composition.addRow()
              break
            case 'subtractRow':
              prevState.composition.subtractRow()
              break
            case 'addTile':
              prevState.composition.addTileToRow(data.row)
              break
            case 'subtractTile':
              prevState.composition.subtractTileFromRow(data.row)
              break
            case 'randomise':
              prevState.composition.randomise()
              break
            default:
              console.log('Bad composition change command: ' + cmd)
              break
          }
          return {composition: prevState.composition}
        })
      }
    }
  }
  updateWindowDimensions = () => {
    const desktop = window.innerWidth > 600
    const boardHeight = desktop ? window.innerHeight - 160 : 
      window.innerHeight - 110
    this.setState({boardHeight: boardHeight, desktop: desktop})

  }
  componentDidMount(){
    this.updateWindowDimensions()
    window.addEventListener("resize", this.updateWindowDimensions);
  }
  render() {
    return (
      <div className="App">
        <Controls {...this.state} />
        <Board {...this.state} />
      </div>
    )
  }
}

export default App;