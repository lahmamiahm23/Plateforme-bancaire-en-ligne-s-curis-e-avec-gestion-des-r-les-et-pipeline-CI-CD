import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import BankServices from '../../BankService/BankServices';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import {  useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { HttpStatusCode } from 'axios';
import { useSession } from '../../Security/SessionContext';
import Authentication from '../../Security/SessionContext';
const EmployeeList = (props) => {
  const { isLoggedIn, setIsLoggedIn } = useSession();
    const [list,setList]=useState([]);
    const history=useHistory();
    useEffect(()=>{
     
        if(!Authentication.checkAutherization('ADMIN',isLoggedIn,setIsLoggedIn))
        history.push('/employee_login');
  
        BankServices.getEmployees().then((data)=>displayMassage(data));

    },[])
    function displayMassage(obj){
      const message = document.getElementById('message');
    var bool=  obj.status===HttpStatusCode.Ok ? true :false;
    if (bool) {
    //  message.textContent = 'List of Employees :-';
      message.style.color = 'green';
     setList(obj.data);
      
    } else {
      message.textContent = obj.response.data.message;
      message.style.color = 'red';
    }
  }

    return (
      <div className="bg_addbranch">
        <section className="py-3 px-5">
          <h3>All Employee Informations</h3>
          <div id="message"></div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>id</th>
                <th>firstName</th>
                <th>lastName</th>
                <th>branch Name</th>
                <th>phone No</th>
                <th>gender</th>
                <th>City</th>
                <th>Options</th>
              </tr>
            </thead>
            <tbody>
              {/* Map through the data array to generate table rows dynamically */}
              {list.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.firstName}</td>
                  <td>{item.lastName}</td>
                  <td>{item.branchName}</td>
                  <td>{item.mobileNumber}</td>
                  <td>{item.gender}</td>
                  <td>{item.city}</td>
                  <td>
                    {" "}
                    <Button onClick={(e) => props.deleteHandler(item)}>delete</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </section>
      </div>
    );
}

export default EmployeeList
