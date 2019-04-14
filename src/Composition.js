const MINROWS = 1
const MAXROWS = 6
const MINWIDTH = 1
const MAXWIDTH = 9
const CHANCEOFREST = 0.3
const NOTES = [0, 'C', 'D', 'E', 'G', 'A']
const SUBDIVS = [2,3,4,5,8]
const INITIALROWS = 4
const AUTOBARS = 4

class Composition {
  constructor(){
    this.playing = false
    this.rows = []
    this.randomiseNext = false
    this.firstBar = true
    this.auto = true
    this.randomise()
    this.barCount = 1
  }
  change(row, col){
    this.rows[row].tiles[col].change()
  }
  toggleAuto(){
    this.auto = !this.auto
    if (this.auto) {
      this.barCount = 1
    }
  }
  tilesToPlayAtPosition = (current, total)=>{
    const tiles = []
    const lastStep = current === total - 1
    for(const row of this.rows){
      const tileCount = row.tiles.length
      for(const tile of row.tiles){
        const note = NOTES[tile.note]
        const tileStartPosition = Math.ceil(tile.col * total / tileCount)
        const nextTileStartPosition = Math.ceil((tile.col + 1) * total / tileCount)
        const playNow = current === tileStartPosition
        const isPlaying = current >= tileStartPosition &&
          current < nextTileStartPosition
        if (note !== 0 && isPlaying) {
          if (!tile.isPlaying) {
            tile.isPlaying = true
            tile.duration = 1 / row.tiles.length
            // to ensure the first note gets played
            if (playNow || (this.firstBar === true && tile.col === 0)) {
              tiles.push(tile)
            }
          }
        } else {
          tile.isPlaying = false
        }
      }
    }
    if (lastStep) {
      if (this.firstBar === true ) {
        this.firstBar = false
      }
      if (this.randomiseNext === true) {
        this.randomiseRows()
      } else if (this.auto === true) {
        this.barCount++
        if (this.barCount >= AUTOBARS) {
          this.randomiseNext = true
        }
      }
    }
    return tiles
  }
  play = ()=>{
    this.playing = true
    this.firstBar = true
  }
  stop = ()=>{
    this.playing = false
    this.randomiseNext = false
    this.barCount = 1
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
    this.barCount = 1
    let numberOfRows = INITIALROWS
    for(let i = 0; i < numberOfRows; i++){
      this.addRow()
    }
  }
  addRow(){
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
  rowsAddable(){
    return this.rows.length < MAXROWS
  }
  rowsSubtractable(){
    return this.rows.length > MINROWS
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
      this.addTile(true)
    }
  }
  addTile(random = false){
    this.tiles.length < MAXWIDTH && this.tiles.push(new CompositionTile(this.row, this.tiles.length, random))
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
  constructor(row, col, randomise=false){
    this.note = 0
    this.duration = 0
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