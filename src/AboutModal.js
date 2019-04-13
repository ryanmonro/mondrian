import React, { Component } from 'react'
import Modal from '@material-ui/core/Modal'

class AboutModal extends Component {
  render(){
    const {modalOpen, closeModal} = this.props
    const style = {
      position: "fixed",
      top: "25%",
      left: "25%",
      height: "50%",
      width: "50%",
      outline: "none",
      background: "white"
    }
    return (
      <Modal open={modalOpen} onClose={closeModal}>
        <div style={style}>Hey</div>
      </Modal>
    )
  }
}

export default AboutModal