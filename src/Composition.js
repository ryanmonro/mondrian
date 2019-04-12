const MINROWS = 1
const MAXROWS = 6
const MINWIDTH = 1
const MAXWIDTH = 9
const CHANCEOFREST = 0.4
const NOTES = [0, 'C', 'D', 'E', 'G', 'A']
const SUBDIVS = [2,3,4,5,6,8]
const INITIALROWS = 4

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
  playAtPosition = (current, total)=>{
    let tiles = []
    for(const row of this.rows){
      let playingTile = Math.floor(current * row.tiles.length / total)
      for(const tile of row.tiles){
        const note = NOTES[tile.note]
        if (note !== 0 && tile.col === playingTile) {
          if (!tile.isPlaying) {
            tile.isPlaying = true
            tiles.push(tile)
          }
        } else {
          tile.isPlaying = false
        }
      }
    }
    if (current === total - 1 && this.randomiseNext === true){
      this.randomiseRows()
    }
    return tiles
  }
  play = ()=>{
    this.playing = true
  }
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
    let numberOfRows = INITIALROWS
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
  rowsAddable(){
    return this.rows.length < MAXROWS
  }
  rowsSubtractable(){
    return this.rows.length > MINROWS
  }
}

class CompositionRow {
  constructor(composition, row){
    this.composition = composition
    this.tiles = []
    this.row = row
    this.randomise()
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
  tilesAddable(){
    return this.tiles.length < MAXWIDTH
  }
  tilesSubtractable(){
    return this.tiles.length > MINWIDTH
  }
}

class CompositionTile {
  constructor(composition, row, col, randomise=false){
    this.composition = composition
    this.note = 0
    this.row = row
    this.col = col
    this.isPlaying = false
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
  midiNote(){
    return NOTES[this.note] + (this.row + 2).toString()
  }
}

export default Composition