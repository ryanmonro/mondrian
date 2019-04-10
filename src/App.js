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
      play: () => {
        Tone.Transport.scheduleRepeat((time)=>{
          this.state.updateComposition((composition)=>{
            composition.play(time)
          })
        }, "1i")
        Tone.Transport.start("+0.2")
        Tone.start()
        this.state.updateComposition((composition)=>{
          composition.playing = true
          composition.position = 1
        })
      },
      stop: () => {
        Tone.Transport.stop()
        Tone.Transport.cancel()
        this.state.updateComposition((composition)=>{
          composition.position = 0
          composition.playing = false
          composition.randomiseNext = false
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
    Tone.Transport.PPQ = 24
    Tone.Transport.bpm.value = 60
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