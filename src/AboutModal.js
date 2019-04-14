import React, { Component } from 'react'
import Modal from '@material-ui/core/Modal'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'
import './AboutModal.scss'

class AboutModal extends Component {
  render(){
    const {modalOpen, closeModal, desktop} = this.props
    const centerVertically = {display: "flex", justifyContent: "center", flexDirection: "column", flex: 1}
    const className = desktop ? "AboutModal" : "AboutModal mobile"
    return (
      <Modal open={modalOpen} onClose={closeModal}>
        <div className={className}>
          <div>
          <Typography variant="headline" >
            Mondrian Sequencer
          </Typography>
          <Typography variant="subtitle1">
            Code: <a href="https://www.github.com/ryanmonro/mondrian"
              target="_new">github.com/ryanmonro/mondrian</a>
          </Typography>
          </div>
          <Typography variant="body1">
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