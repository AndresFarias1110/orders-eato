import { Button, Modal } from "react-bootstrap";

interface PropsModalUser {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClickModalUser: any;
}

export function ModalUser({ onClickModalUser }: PropsModalUser) {
  return (
    <Modal show={true} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>Agregar nuevo usuario</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClickModalUser}>
          Close
        </Button>
        <Button variant="primary">Understood</Button>
      </Modal.Footer>
    </Modal>
  );
}
