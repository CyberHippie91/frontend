import React, { Component } from "react"
import Modal from 'react-bootstrap/Modal'
import ModalDialog from 'react-bootstrap/ModalDialog'
import ModalHeader from 'react-bootstrap/ModalHeader'
import ModalTitle from 'react-bootstrap/ModalTitle'
import ModalBody from 'react-bootstrap/ModalBody'
import ModalFooter from 'react-bootstrap/ModalFooter'
import Button from 'react-bootstrap/Button'



export default function EditModal(props) {
    return (
        

      <Modal
        {...props}
        size="lg"
        aria-labelledby="edit modal"
        centered
      >
        <ModalHeader closeButton>
          <ModalTitle id="contained-modal-title-vcenter">
            Modal heading
          </ModalTitle>
        </ModalHeader>
        <ModalBody>
          <h4>Centered Modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </p>
        </ModalBody>
        <ModalFooter>
          <Button onClick={props.onHide}>Close</Button>
        </ModalFooter>
      </Modal>
    );
  }

