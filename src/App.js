import React, { Component } from 'react'
import './App.css'
import Tone from 'tone'
import Composition from './Composition'
import Board from './Board'
import Controls from './Controls'

Tone.Transport.PPQ = 24
Tone.Transport.bpm.value = 60

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      composition: new Composition(),
      synth: new Tone.PolySynth(8, Tone.Synth).toMaster(),
      play: () => {
        Tone.Transport.scheduleRepeat((time)=>{
          const ticksPerBar = Tone.Transport.PPQ * 4
          const position = Tone.Transport.ticks % ticksPerBar
          const c = this.state.composition
          const tiles = c.playAtPosition(position, ticksPerBar)
          for(const tile of tiles){
            this.state.synth.triggerAttackRelease(tile.midiNote(), "32n", time)
          }
          this.setState((prevState)=>{
            return {composition: c}
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
    this.updateWindowDimensions()
    window.addEventListener("resize", this.updateWindowDimensions)
    const synth = this.state.synth
    synth.set("oscillator", {"type": "sine"})
    synth.set("volume", -12)
    synth.set("envelope", {"attack": .015, "release": 1})
    this.setState({synth: synth})
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

export default App