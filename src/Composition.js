// function randomBoard(){
//   let board = []
//   const height = settings.minHeight + Math.floor(Math.random() * (settings.maxHeight - settings.minHeight + 1))
//   for(var i = 0; i < height; i++){
//     var row = []
//     let width = Math.ceil(Math.random() * settings.maxWidth)
//     for(var t = 0; t < width; t++){
//       row.push(Math.floor(Math.random() * settings.notes.length))
//     }
//     board.push(row)
//   }
//   return board
// }

// const settings = {
//   minHeight: 2,
//   maxHeight: 4,
//   maxWidth: 5,
//   notes: [0, 'C', 'D', 'E', 'G', 'A']
// }

const chanceOfRest = 0.5

class Composition {
  constructor(){
    this.rows = []
    this.randomise()
    console.log(this.rows)
  }
  randomise(){
    let numberOfRows = 1 + Math.ceil(Math.random() * 3)
    for(let i = 0; i < numberOfRows; i++){
      this.addRow()
    }
  }
  addRow(){
    this.rows.push(new CompositionRow())
  }
  subtractRow(){
    this.rows.pop()
  }

}

class CompositionRow {
  constructor(){
    this.tiles = []
    this.randomise()
  }
  randomise(){
    let numberOfTiles = 1 + Math.ceil(Math.random() * 7)
    for(let i = 0; i < numberOfTiles; i++){
      this.tiles.push(new CompositionTile(true))
    }
  }
  addTile(){
    this.tiles.push(new CompositionTile())
  }
  subtractTile(){
    this.tiles.pop()
  }
}

class CompositionTile {
  constructor(randomise=false){
    this.note = 0
    randomise && this.randomise()
  }
  change(){
    console.log(this.note)
    this.note = (this.note + 1) % 6
    console.log(this.note)
  }
  randomise(){
    if (Math.random() > chanceOfRest){
      this.note = Math.floor(Math.random() * 6) + 1
    }
  }
}

export default Composition