import React, { Component } from 'react'
import './App.css'
import Tone from 'tone'
import Composition from './Composition'
import Board from './Board'
import Controls from './Controls'

const PPQ = 24
const BPM = 60

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      composition: new Composition(),
      play: () => {
        Tone.Transport.scheduleRepeat((time)=>{
          this.state.updateComposition((c)=>{
            c.playAtPosition(time)
          })
        }, "1i")
        Tone.start()
        Tone.Transport.start("+0.2")
        this.state.updateComposition((c)=>{
          c.play()
        })
      },
      stop: () => {
        Tone.Transport.stop()
        Tone.Transport.cancel()
        this.state.updateComposition((c)=>{
          c.stop()
        })
      },
      updateComposition: (fn) => {
        this.setState((prevState) => {
          fn(prevState.composition)
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
    Tone.Transport.PPQ = PPQ
    Tone.Transport.bpm.value = BPM
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