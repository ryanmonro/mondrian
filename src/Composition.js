// function randomBoard(){
//   let board = []
//   const height = 4
//   // settings.minHeight + Math.floor(Math.random() * (settings.maxHeight - settings.minHeight + 1))
//   for(var i = 0; i < height; i++){
//     var row = []
//     let width = settings.subdivs[Math.floor(Math.random() * 5)]
//     //Math.pow(2, Math.floor(Math.random() * 4))
//       // Math.ceil(Math.random() * settings.maxWidth))
//     for(var t = 0; t < width; t++){
//       let note = 0
//       if (Math.random() > settings.chanceOfRest){
//         note = Math.ceil(Math.random() * (settings.notes.length - 1))
//       }
//       row.push(note)
//     }
//     board.push(row)
//   }
//   return board
// }



const MINROWS = 2
const MAXROWS = 8
const INITIALROWS = 4
const MINWIDTH = 1
const MAXWIDTH = 5
const NOTES = [0, 'C', 'D', 'E', 'G', 'A']
const CHANCEOFREST = 0.5
const SUBDIVS = [2,3,4,5,6,8]

class Composition {
  constructor(){
    this.rows = []
    this.randomise()
  }
  change(row, col){
    this.rows[row].tiles[col].change()
  }
  randomise(){
    let numberOfRows = 1 + Math.ceil(Math.random() * 3)
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

}

class CompositionRow {
  constructor(row){
    this.tiles = []
    this.row = row
    this.randomise()
  }
  randomise(){
    let numberOfTiles = 1 + Math.ceil(Math.random() * 7)
    for(let i = 0; i < numberOfTiles; i++){
      this.tiles.push(new CompositionTile(this.row, this.tiles.length, true))
    }
  }
  addTile(){
    this.tiles.length < MAXWIDTH && this.tiles.push(new CompositionTile(this.row, this.tiles.length))
  }
  subtractTile(){
    this.tiles.length < MINWIDTH && this.tiles.pop()
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
      this.note = Math.floor(Math.random() * 6) + 1
    }
  }
}

export default Composition