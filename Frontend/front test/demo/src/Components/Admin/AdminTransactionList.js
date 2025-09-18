import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import {
  useHistory,
  useLocation,
} from "react-router-dom/cjs/react-router-dom.min";
import Authentication, { useSession } from "../../Security/SessionContext";
const AdminTransactionList = (props) => {
  const { isLoggedIn, setIsLoggedIn } = useSession();
  const [list, setList] = useState([
    {
      id: 1,
      transactionType: "Ahmed",
      transactionDate: "2025-09-15",
      amount: "1000",
      accountNo: "Rabat1234",
      receiverAccountNo: "MHA5678",
    },
  ]);
  const history = useHistory();
  useEffect(() => {
    if (!Authentication.checkAutherization("ADMIN", isLoggedIn, setIsLoggedIn))
      history.push("/employee_login");

    setList(props.list);
  }, []);

  return (
    <section className="py-3 px-5">
      <h3>Transaction List </h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>id</th>
            <th>transaction Type </th>
            <th>account No</th>
            <th>amount</th>
            <th>transaction Date</th>
            <th>receiver Account No</th>
          </tr>
        </thead>
        <tbody>

          {list.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.transactionType}</td>
              <td>{item.accountNo}</td>
              <td>{item.amount}</td>
              <td>{item.transactionDate}</td>
              <td>{item.receiverAccountNo}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </section>
  );
};

export default AdminTransactionList;
