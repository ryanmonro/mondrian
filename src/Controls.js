import React, { Component } from 'react'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import PlayArrowIcon from '@material-ui/icons/PlayArrow'
import StopIcon from '@material-ui/icons/Stop'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'

const theme = createMuiTheme({
  palette: {
    type: 'dark'
  },
  typography: {
    useNextVariants: true,
  }
});

class Controls extends Component {
  render(){
    const buttonStyle = {margin: '5px', float: 'left'}
    return (
      <MuiThemeProvider theme={theme}>
        <AppBar position="static" color='default'>
        <Toolbar>
        <Button variant="contained" onClick={this.props.start} disabled={this.props.playing} style={buttonStyle}><PlayArrowIcon /></Button>
        <Button variant="contained" onClick={this.props.stop} disabled={!this.props.playing} style={buttonStyle}><StopIcon /></Button>
        <Button variant="contained" onClick={this.props.randomise} disabled={this.props.randomiseNext} style={buttonStyle}>Randomise</Button>
        </Toolbar>
        </AppBar>
      </MuiThemeProvider>
    )
  }
}

export default Controls;