import { OrderEnum } from "../../enums/OrderEnum";

import './OrderState.css';

interface PropsOrderState {
    state: string;
}

export function OrderState({ state }: PropsOrderState) {
    switch (state) {
        case OrderEnum.inProcess:
            return <div className="bg-info order-status"></div>;
        case OrderEnum.onTheWay:
            return <div className="bg-info on-order-status"></div>;
        case OrderEnum.delivered:
            return <div className="bg-success order-status"></div>;
        default:
            break;
    }
}