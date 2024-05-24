import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const MainModal = ({
  modalBodyText,
  children,
  args,
  toggleModal,
  modal,
  Modaltitle,
  cancelToggle,
  CancelBtn,
}) => {


  return (
    <div>
      <div onClick={toggleModal}>{children}</div>
      <Modal isOpen={modal} toggle={toggleModal} {...args}>
        <ModalHeader toggle={toggleModal}>{Modaltitle}</ModalHeader>
        <ModalBody>{modalBodyText}</ModalBody>
        <ModalFooter>
          <Button className="" color="primary" onClick={cancelToggle}>
            {CancelBtn}
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default MainModal;
