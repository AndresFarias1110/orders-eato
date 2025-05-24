import { Button, Modal } from "react-bootstrap";
import { AppSelect } from "../select/AppSelect";
import { useAppDispatch } from "../../hooks/hooks";
import type { AppDispatch } from "../../store/store";
import { getApiOrders, postApiOrders } from "../../store/slices/orders/orderThunks";

interface PropsModalUser {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClickModalUser: any;
}

export function ModalOrder({ onClickModalUser }: PropsModalUser) {
  const dispatch: AppDispatch = useAppDispatch();
  let listProducts: any[] = [];
  const handleOnChange = (value: any) => {
    listProducts = value;
  };

  const handleClickSave = () => {
    dispatch(postApiOrders({
      state: 'InProcess',
      products: listProducts.map(p => p.value),
      userId: 1,
    }));
    dispatch(getApiOrders());
  };

  return (
    <Modal show={true} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>Agregar nueva orden</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <AppSelect onSelectChange={handleOnChange} />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClickModalUser}>
          Cancelar
        </Button>
        <Button variant="primary" onClick={handleClickSave}>Guardar</Button>
      </Modal.Footer>
    </Modal>
  );
}
