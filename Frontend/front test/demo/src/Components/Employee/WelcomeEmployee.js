import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import WelcomeMessage from './WelcomeMessage';
import ViewProfile from './ViewProfile';
import UpdateProfile from './UpdateProfile';
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import { useSession } from '../../Security/SessionContext';
import Authentication from '../../Security/SessionContext';
import ChangePassword from './ChangePassword';
import BankServices from '../../BankService/BankServices';
import { HttpStatusCode } from 'axios';
import AccountListForm from './AccountListForm';
import EmployeeInletOutletMoneyForm from './EmployeeInletOutletMoneyForm';
import EmployeeTransactionForm from './EmployeeTransactionForm';


const WelcomeEmployee = () => {

  const [activeOption, setActiveOption] = useState('home');
  const [render, setRender] = useState(false);
  const { isLoggedIn, setIsLoggedIn } = useSession();
  const { item, setItem } = useSession();
  const history=useHistory();
const [user,setUser]=useState();

  useEffect(()=>{
    if(!Authentication.checkAutherization('MANAGER',isLoggedIn,setIsLoggedIn))
      history.push('/employee_login');
    console.log("in employee welcome :-item := "+item)
  BankServices.getEmployee(item).then((obj)=>displayMassage(obj));
   console.log(user);
  console.log(item);
  },[])


  const handleOptionClick = (option) => {
    setActiveOption(option);
  };
  function displayMassage(obj){
    const message = document.getElementById('message');
  var bool= obj.status===HttpStatusCode.Ok ? true :false;
  if (bool) {
   // message.textContent = `Your Balance :- ${obj.data}`;
    message.style.color = 'green';
    setUser(obj.data);
    setRender(true);
  } else {
    setRender(false);
    message.textContent = obj.response.data.message;
    message.style.color = 'red';
    }
  }
  const defaultRender = () => {
    console.log("in default render in welcome page !!");
    setActiveOption("home");
    setRender(false);
     BankServices.getEmployee(item).then((obj) => displayMassage(obj));
  }
  return (
    <Container fluid>
      {" "}
      <div id="message"></div>
      {render === true && (
        <Row>

          <Col md={2}>
            <Nav className="flex-column">
              <Nav.Link onClick={() => handleOptionClick("home")}>
                Home
              </Nav.Link>
              <Nav.Link onClick={() => handleOptionClick("accounts")}>
                Check Accounts
              </Nav.Link>
              <Nav.Link onClick={() => handleOptionClick("viewProfile")}>
                View Profile
              </Nav.Link>
              <Nav.Link onClick={() => handleOptionClick("changePassword")}>
                Change Password
              </Nav.Link>
              <Nav.Link onClick={() => handleOptionClick("updateProfile")}>
                Update Profile
              </Nav.Link>
              <Nav.Link onClick={() => handleOptionClick("inletOutlet")}>
                Money Inlet/Outlet in Branch
              </Nav.Link>
              <Nav.Link onClick={() => handleOptionClick("transactionHistory")}>
                Transactions
              </Nav.Link>

            </Nav>
          </Col>
          <Col md={10}>

            {activeOption === "home" && <WelcomeMessage user={user} />}
            {activeOption === "accounts" && <AccountListForm user={user} />}
            {activeOption === "viewProfile" && <ViewProfile user={user} />}
            {activeOption === "changePassword" && (
              <ChangePassword user={user} />
            )}
            {activeOption === "updateProfile" && (
              <UpdateProfile defaultRenderHandler={defaultRender} user={user} />
            )}
            {activeOption === "inletOutlet" && (
              <EmployeeInletOutletMoneyForm user={user} />
            )}
            {activeOption === "transactionHistory" && (
              <EmployeeTransactionForm user={user} />
            )}

          </Col>
        </Row>
      )}
    </Container>
  );
};

export default WelcomeEmployee;
