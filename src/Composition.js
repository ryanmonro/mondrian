import Tone from 'tone'

const MINROWS = 2
const MAXROWS = 6
const MINWIDTH = 1
const MAXWIDTH = 5
const CHANCEOFREST = 0.5
const NOTES = [0, 'C', 'D', 'E', 'G', 'A']
const SUBDIVS = [2,3,4,5,6,8]
// const INITIALROWS = 4


class Composition {
  constructor(){
    Tone.Transport.PPQ = 24
    Tone.Transport.bpm.value = 60
    this.randomise()
    let synths = []
    for (let i = 0; i < 6; i++){
      synths.push(new Tone.Synth({
        oscillator: {
          type: "sine"
        },
        volume: -12
      }).toMaster())
    }
    this.player = {
      synths: synths,
      position: 0,
      playPosition: [],
      playing: false,
      randomiseNext: false,
      // randomiseInterval: 4,
      tileIsPlaying: function(col, cols) {
        const percent = this.position / 100
        if (this.position === 0) return false
        return percent >= col / cols && percent <= (col + 1) / cols
      },
    }
  }
  change(row, col){
    this.rows[row].tiles[col].change()
  }
  start(){
    // Tone.Transport.scheduleRepeat((time)=>{
    //   let {player, board} = this.state
    //   for(const [i, row] of board.data.entries()){
    //     const notes = settings.notes
    //     let newPos = Math.floor((player.position / 100) * row.length)
    //     if (playPosition[i] !== newPos) {
    //       playPosition[i] = newPos
    //       if (playPosition[i] === row.length) {
    //         playPosition[i] = 0
    //       }
    //       const note = notes[row[playPosition[i]]]
    //       if(note !== 0){
    //         synths[i].triggerAttackRelease(note + (i + 2).toString(), "16n", time)
    //       }
    //     }
    //   }
    //   if (player.position >= 100) {
    //     player.position = 1
    //     if (this.state.randomiseNext === true){
    //       const newData = randomBoard()
    //       let board = this.state.board
    //       board.data = newData
    //       this.setState({board: board, randomiseNext: false})
    //     }
    //   } else {
    //     player.position += (100 / (24 * 4))
    //   }
    //   this.setState({player: player, playPosition: playPosition})
    // }, "1i")
    // Tone.Transport.start("+0.1")
    // Tone.start()
    // let playPosition = []
    // for(let i = 0; i < 6; i++){
    //   playPosition[i] = -1
    // }
    // let {player} = this.state
    // player.position = 1
    // this.setState({player: player, playPosition: playPosition, playing: true})
  }
  stop(){
    // Tone.Transport.stop()
    // Tone.Transport.cancel()
    // let {player} = this.state
    // let playPosition = []
    // for(let i = 0; i < 6; i++){
    //   playPosition[i] = -1
    // }
    // player.position = 0
    // this.setState({player: player, playPosition: playPosition, playing: false, randomiseNext: false})
  }
  randomise(){
    this.rows = []
    let numberOfRows = 1 + Math.ceil(Math.random() * 3)
    for(let i = 0; i < numberOfRows; i++){
      this.addRow()
    }
    // if (this.state.playing === true) {
      // this.setState({randomiseNext: true})
    // } else {
      // const newData = randomBoard()
      // let board = this.state.board
      // board.data = newData
      // this.setState({board: board})
    // }
  }
  addRow(){
    // currently adds a random row. Should it?
    this.rows.length < MAXROWS && this.rows.push(new CompositionRow(this.rows.length))
  }
  subtractRow(){
    this.rows.length > MINROWS && this.rows.pop()
  }
  addTileToRow(row){
    this.rows[row].addTile()
  }
  subtractTileFromRow(row){
    this.rows[row].subtractTile()
  }
}

class CompositionRow {
  constructor(row){
    this.tiles = []
    this.row = row
    this.randomise()
  }
  randomise(){
    let numberOfTiles = SUBDIVS[Math.floor(Math.random() * SUBDIVS.length)]
    for(let i = 0; i < numberOfTiles; i++){
      this.tiles.push(new CompositionTile(this.row, this.tiles.length, true))
    }
  }
  addTile(){
    this.tiles.length < MAXWIDTH && this.tiles.push(new CompositionTile(this.row, this.tiles.length))
  }
  subtractTile(){
    this.tiles.length > MINWIDTH && this.tiles.pop()
  }
}

class CompositionTile {
  constructor(row, col, randomise=false){
    this.note = 0
    this.row = row
    this.col = col
    randomise && this.randomise()
  }
  change(){
    this.note = (this.note + 1) % 6
  }
  randomise(){
    if (Math.random() > CHANCEOFREST){
      this.note = Math.floor(Math.random() * (NOTES.length - 1)) + 1
    }
  }
  isPlaying(){
    // come back to this
    return false
  }
}

export default Composition