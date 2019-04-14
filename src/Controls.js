import React, { Component } from 'react'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import PlayArrowIcon from '@material-ui/icons/PlayArrow'
import StopIcon from '@material-ui/icons/Stop'
import ShuffleIcon from '@material-ui/icons/Shuffle'
import HelpOutlineIcon from '@material-ui/icons/HelpOutline'
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
    const {composition, play, stop, updateComposition, openModal} = this.props
    const appBarStyle = {alignItems: 'center'}
    const buttonStyle = {margin: '2px'}
    const randomise = () => updateComposition((composition) => {
      composition.randomise()
    })
    return (
      <MuiThemeProvider theme={theme}>
        <AppBar position="static" color='default' style={appBarStyle}>
        <Toolbar>
        <IconButton  onClick={play} disabled={composition.playing} style={buttonStyle}><PlayArrowIcon /></IconButton>
        <IconButton size="small" onClick={stop} disabled={!composition.playing} style={buttonStyle}><StopIcon /></IconButton>
        <IconButton size="small" onClick={randomise} disabled={composition.randomiseNext} style={buttonStyle}><ShuffleIcon /></IconButton>
        <FormControlLabel
          style={buttonStyle}
          control={
          <Checkbox
                checked={composition.auto}
                color="primary"
                onChange={()=>updateComposition((c)=>c.toggleAuto())}
                value="AUTO"
              />
            }
            label="AUTO"
        />
        <IconButton size="small" variant="contained" onClick={openModal} style={buttonStyle}><HelpOutlineIcon /></IconButton>
        </Toolbar>
        </AppBar>
      </MuiThemeProvider>
    )
  }
}

export default Controls;