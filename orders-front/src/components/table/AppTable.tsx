import { Table } from "react-bootstrap";
import type { UserModel } from "../../models/users.model";

interface PropsAppTable {
  userList: UserModel[];
  columns: string[];
}

export function AppTable({
  userList,
  columns
} : PropsAppTable) {
  
  return (
    <Table striped variant="dark" responsive >
      <thead>
        <tr>
          {columns.map((c: string, index: number) => <th key={index}>{c}</th>)}
        </tr>
      </thead>
      <tbody>
        
          {userList.map((user: UserModel) => (
            <tr>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email }</td>
              <td>{user.age}</td>
            </tr>
          ))}
      </tbody>
    </Table>
  );
}
