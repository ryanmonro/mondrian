import React, { Component } from 'react';
import Tile from './Tile';
import './Row.css';

export default class Row extends Component {
  render(){
    let {data, row} = this.props
    return (
      <div className="Row">
        { data.map((v, k) => 
          <Tile data={v} key={k} row={row} col={k} 
            tileClicked={this.props.tileClicked} 
            width={ 100 / data.length }
            cols={data.length}
            position={ this.props.position}>
          </Tile> ) 
        }
      </div>
    )
  }
}