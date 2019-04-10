const MINROWS = 2
const MAXROWS = 6
const MINWIDTH = 1
const MAXWIDTH = 5
const CHANCEOFREST = 0.5
const NOTES = ['C', 'D', 'E', 'G', 'A']
// const INITIALROWS = 4
// const SUBDIVS = [2,3,4,5,6,8]

class Composition {
  constructor(){
    this.randomise()
  }
  change(row, col){
    this.rows[row].tiles[col].change()
  }
  randomise(){
    this.rows = []
    let numberOfRows = 1 + Math.ceil(Math.random() * 3)
    for(let i = 0; i < numberOfRows; i++){
      this.addRow()
    }
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
  length(){
    return this.rows.length
  }
}

class CompositionRow {
  constructor(row){
    this.tiles = []
    this.row = row
    this.randomise()
  }
  randomise(){
    // consider restricting to one of SUBDIVS again
    let numberOfTiles = 1 + Math.ceil(Math.random() * 7)
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
  length(){
    return this.tiles.length
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
      this.note = Math.floor(Math.random() * NOTES.length)
    }
  }
  isPlaying(){
    // come back to this
    return false
  }
}

export default Composition