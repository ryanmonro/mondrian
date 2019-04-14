import React, { Component } from 'react'
import './App.css'
import Tone from 'tone'
import Composition from './Composition'
import Board from './Board'
import Controls from './Controls'
import AboutModal from './AboutModal'

Tone.Transport.PPQ = 12
Tone.Transport.bpm.value = 90

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      modalOpen: false,
      openModal: ()=> this.setState({modalOpen: true}),
      closeModal: ()=> this.setState({modalOpen: false}),
      composition: new Composition(),
      synth: new Tone.PolySynth(8, Tone.Synth).toMaster(),
      play: () => {
        Tone.Transport.scheduleRepeat((time)=>{
          const ticksPerBar = Tone.Transport.PPQ * 4
          const position = (Tone.Transport.ticks) % ticksPerBar
          const c = this.state.composition
          const tiles = c.tilesToPlayAtPosition(position, ticksPerBar)
          for(const tile of tiles){
            const duration = 60 * 4 * tile.duration / Tone.Transport.bpm.value / 2
            console.log(duration)
            this.state.synth.triggerAttackRelease(tile.midiNote(), duration, time)
          }
          if (tiles.length > 0) {
            console.log('state')
            this.setState((prevState)=>{
              return {composition: c}
            })
          }
          
        }, "1i")
        Tone.start()
        Tone.Transport.start()
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
          console.log('state')
          fn(prevState.composition)
          return {composition: prevState.composition}
        })
      }
    }
  }
  updateWindowDimensions = () => {
    const windowWidth = window.innerWidth
    const windowHeight = window.innerHeight
    const desktop = windowWidth > 600
    const whitespaceHeight = windowHeight - 64 
    const boardSize = whitespaceHeight < windowWidth ? whitespaceHeight : windowWidth
    const border = boardSize / 200 // 1% (halved, there are always 2 borders)
    this.setState({
      boardSize: boardSize, 
      border: {
        string: border + "px solid #212121",
        value: border
      },
      buttonSize: desktop ? 40 : 20,
      marginTop: (whitespaceHeight - boardSize) / 2,
      desktop: desktop,
      windowDimensions: {
        height: windowHeight,
        width: windowWidth
      }
    })

  }
  componentWillMount(){
    this.updateWindowDimensions()
    window.addEventListener("resize", this.updateWindowDimensions)

  }
  componentDidMount(){
    const synth = this.state.synth
    synth.set("oscillator", {"type": "sine"})
    synth.set("volume", -12)
    synth.set("envelope", {decay: 0.2, sustain: 0.3, release: 0.4})
    // synth.set('filter', {Q: 0, rolloff: -12})
    // synth.set("filterEnvelope", {attack: 0.01, octaves: 1, decay: 0.8,
      // baseFrequency: 2000, release: 2})
    this.setState({synth: synth})
  }
  render() {
    return (
      <div className="App">
        <Controls {...this.state} />
        <AboutModal {...this.state} />
        <Board {...this.state} />
      </div>
    )
  }
}

export default App