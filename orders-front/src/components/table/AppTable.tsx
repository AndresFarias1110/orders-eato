import { Table } from "react-bootstrap";

import type { OrderModel } from "../../models/orders.model";
import type { Product } from "../../models/product.model";
import { OrderState } from "../state/OrderState";

interface PropsAppTable {
  orderList: OrderModel[];
  columns: string[];
}

export function AppTable({
  orderList,
  columns
} : PropsAppTable) {

  const subTotal = (products: Product[]): number => {
    let subtotal = 0;
    products?.forEach(p => subtotal += Number(p.price));
    return subtotal;
  };
  
  return (
    <Table striped variant="dark" responsive >
      <thead>
        <tr>
          {columns.map((c: string, index: number) => <th key={index}>{c}</th>)}
        </tr>
      </thead>
      <tbody>
        
          {orderList.map((order: OrderModel) => (
            <tr>
              <td>{order.id}</td>
              <td>{order.folio}</td>
              <td>{order.products?.length}</td>
              <td>$ {subTotal(order.products)}</td>
              <td>{order.createdAt}</td>
              <td><OrderState state={order.state} /></td>
            </tr>
          ))}
      </tbody>
    </Table>
  );
}
