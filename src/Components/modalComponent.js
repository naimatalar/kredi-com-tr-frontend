import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


const ModalComponent = (props) => {
  const {
    buttonLabel,
    className,
    show,
    body,
    title
  } = props;

  const [modal, setModal] = useState(show);

  const toggle = () => setModal(!modal);

  return (
    <div>
      {/* <Button color="danger" onClick={toggle}>{buttonLabel}</Button> */}
      <Modal isOpen={modal} modalTransition={{ timeout: 700 }} backdropTransition={{ timeout: 1300 }}
        toggle={toggle} className={className}>
        <ModalHeader  toggle={toggle}>{title}</ModalHeader>
        <ModalBody>
          {body}
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Tamam</Button>{' '}
          {/* <Button color="secondary" onClick={toggle}>Kapat</Button> */}
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalComponent;