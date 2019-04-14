import React, { Component } from 'react'
import Modal from '@material-ui/core/Modal'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'
import './AboutModal.scss'
require('typeface-lato')

class AboutModal extends Component {
  render(){
    const {modalOpen, closeModal, windowDimensions, desktop} = this.props
    const centerVertically = {display: "flex", justifyContent: "center", flexDirection: "column"}
    const className = desktop ? "AboutModal" : "AboutModal mobile"
    const lato = {fontFamily: "Lato"}
    const headingStyle = {...lato, fontWeight: 700, textAlign: "center", color: "#212121"}
    const top = (windowDimensions.height - 400) / 2
    return (
      <Modal open={modalOpen} onClose={closeModal}>
        <div className={className} style={{top: top}}>
          <Typography variant="display1" style={headingStyle}>
            Mondrian Sequencer
          </Typography>
          <Typography variant="subtitle2" style={{textAlign: "center"}}>
            Code: <a href="https://www.github.com/ryanmonro/mondrian"
              target="_new">github.com/ryanmonro/mondrian</a>
          </Typography>
          <Typography variant="body1" style={{flex: 3}}>
            Each row represents an octave.<br />
            Tile colour determines the note (white is a rest).<br />
            Tile width determines note length.<br />
            Click the edge buttons (or swipe on mobile) to add/subtract tiles or rows.<br />
            Auto mode randomises the board every four bars.
          </Typography>
          <div style={centerVertically}>
            <Button variant="contained" onClick={closeModal}>OK</Button>
          </div>
        </div>
      </Modal>
    )
  }
}

export default AboutModal