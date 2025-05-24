import { Button, Modal } from "react-bootstrap";
import { AppSelect } from "../select/AppSelect";
import { useAppDispatch } from "../../hooks/hooks";
import type { AppDispatch } from "../../store/store";
import { getApiOrders, postApiOrders } from "../../store/slices/orders/orderThunks";
import { AppAlert } from "../AppAlert/AppAlert";

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

  const handleClickSave = async () => {
    if (listProducts.length) {
      await dispatch(postApiOrders({
        state: 'InProcess',
        products: listProducts.map(p => p.value),
        userId: 1,
      }));
      dispatch(getApiOrders());
      onClickModalUser();
    } else {
      new AppAlert('Selecciona al menos un producto a la orden.', 2);
    }

  };

  return (
    <Modal show={true} backdrop="static" keyboard={false}>
      <Modal.Header>
        <Modal.Title>Agregar nueva orden</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="row">
          <div className="col mb-4">
            <span>Selecciona los productos para agregar a la orden</span>
          </div>
        </div>
        <div className="row">
          <div className="col mb-4">
            <AppSelect onSelectChange={handleOnChange} />
          </div>
        </div>
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
