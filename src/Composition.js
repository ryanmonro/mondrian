import Tone from 'tone'

const MINROWS = 2
const MAXROWS = 6
const MINWIDTH = 1
const MAXWIDTH = 9
const CHANCEOFREST = 0.5
const NOTES = [0, 'C', 'D', 'E', 'G', 'A']
const SUBDIVS = [2,3,4,5,6,8]
// const INITIALROWS = 4

class Composition {
  constructor(){
    this.playing = false
    this.rows = []
    this.randomiseNext = false
    this.randomise()
  }
  change(row, col){
    this.rows[row].tiles[col].change()
  }
  play = (time)=>{
    const ticksPerBar = Tone.Transport.PPQ * 4
    const transport = Tone.Transport.ticks % ticksPerBar
    for(const row of this.rows){
      let newPos = Math.floor(transport * row.tiles.length / ticksPerBar)
      if (row.position !== newPos) {
        row.position = newPos
        if (row.position === row.tiles.length) {
          row.position = 0
        }
        const note = NOTES[row.tiles[row.position].note]
        if(note !== 0){
          row.synth.triggerAttackRelease(note + (row.row + 2).toString(), "32n", time)
        }
      }
    }
    if (transport === ticksPerBar - 1 && this.randomiseNext === true){
      this.randomiseRows()
    }
  }
  // play = ()=>{
  //   this.playing = true
  // }
  stop = ()=>{
    this.playing = false
    this.randomiseNext = false
  }
  randomise = ()=>{
    if (this.playing === true) {
      this.randomiseNext = true
    } else {
      this.randomiseRows()
    }
  }
  randomiseRows = ()=>{
    this.rows = []
    this.randomiseNext = false
    let numberOfRows = 1 + Math.ceil(Math.random() * 3)
    for(let i = 0; i < numberOfRows; i++){
      this.addRow()
    }
  }
  addRow(){
    // currently adds a random row. Should it?
    this.rows.length < MAXROWS && this.rows.push(new CompositionRow(this, this.rows.length))
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
  constructor(composition, row){
    this.composition = composition
    this.tiles = []
    this.row = row
    this.randomise()
    this.position = 0
    this.synth = new Tone.Synth({
      oscillator: {
        type: "sine"
      },
      volume: -12
    }).toMaster()
  }
  randomise(){
    let numberOfTiles = SUBDIVS[Math.floor(Math.random() * SUBDIVS.length)]
    for(let i = 0; i < numberOfTiles; i++){
      this.tiles.push(new CompositionTile(this.composition, this.row, this.tiles.length, true))
    }
  }
  addTile(){
    this.tiles.length < MAXWIDTH && this.tiles.push(new CompositionTile(this.composition, this.row, this.tiles.length))
  }
  subtractTile(){
    this.tiles.length > MINWIDTH && this.tiles.pop()
  }
}

class CompositionTile {
  constructor(composition, row, col, randomise=false){
    this.composition = composition
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
}

export default Composition