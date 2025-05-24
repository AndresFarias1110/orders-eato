import { Button, Card, CardBody, CardTitle } from "react-bootstrap";
import { useEffect, useState } from "react";

import { AppTable } from "../../components/table/AppTable";
import "./Home.css";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import type { AppDispatch } from "../../store/store";
import { ModalOrder } from "../../components/modalOrder/ModalOrder";
import { getApiOrders } from "../../store/slices/orders/orderThunks";
import { getApiProducts } from "../../store/slices/products/productsThunks";

const columns = [
    "Id",
    "Folio",
    "Productos",
    "Subtotoal",
    "Creación",
    "Estatus"
];

export function Home() {
    const dispatch: AppDispatch = useAppDispatch();
    const { orderList } = useAppSelector(
        state => state.orderState,
    );
    const [show, setShow] = useState(false);

    useEffect(() => {
        dispatch(getApiOrders());
        dispatch(getApiProducts());
    }, []);

    const handleClick = () => {
        setShow(!show);
    };

    const handleShowModal = () => {
        setShow(!show);
    };

    return (
        <div className="" >
            <div className="mt-4 mb-4 text-white">
                <h2>Administración de órdenes</h2>
            </div>
            <div className="container">
                <Card bg="light">
                    <CardBody>
                        <CardTitle>Lista de usuarios</CardTitle>
                        <AppTable columns={columns} orderList={orderList} />
                    </CardBody>
                     <Card.Body>
                        <Card.Link>
                            <Button onClick={handleClick} variant="primary">Nueva orden</Button>
                        </Card.Link>
                    </Card.Body>
                </Card>
            </div>
            {show ? <ModalOrder onClickModalUser={handleShowModal} /> : ""}
        </div>
    );
}