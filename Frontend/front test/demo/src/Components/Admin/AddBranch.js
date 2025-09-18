import React, { useEffect } from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import BankServices from '../../BankService/BankServices';
import {  useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import "./style.css";
import { HttpStatusCode } from 'axios';
import { useSession } from '../../Security/SessionContext';
import Authentication from '../../Security/SessionContext';
const AddBranch=()=> {
  const { isLoggedIn, setIsLoggedIn } = useSession();
    const [branch,setBranch]=useState({branchName:'',phoneNumber:'',street:'',city:'',state:'',country:''});
    const history=useHistory();
    useEffect(()=>{
      if(!Authentication.checkAutherization('ADMIN',isLoggedIn,setIsLoggedIn))
      history.push('/employee_login');
  },[])
    const onsubmit=()=>{
        
        console.log(branch.branchName+branch.phoneNumber+" "+branch.city+" "+branch.country+" "+branch.state+" "+branch.street);

       

        BankServices.addBranch(branch).then((obj)=>{console.log(obj);displayMassage(obj)});
        setBranch({branchName:'',phoneNumber:'',street:'',city:'',state:'',country:''})
       
    }
  
    function displayMassage(obj){
        const message = document.getElementById('message');
      var bool=  obj.status===HttpStatusCode.Created ? true :false;
      if (bool) {
       // message.textContent = 'Successfully added !';
        message.style.color = 'green';
        alert(obj.data);
      } else {
        message.textContent = obj.response.data.message;
        message.style.color = 'red';
      }
    }


  return (
    <div className="bg_addbranch">
    <div className="container d-flex justify-content-center align-items-center">
    <div className="border rounded-5 m-2 px-3 py-2">
    <Form><h3>Add Branch</h3>
    <Form.Group className="mb-3" >
    <div id="message"></div>
        <Form.Label>Branch name</Form.Label>
        <Form.Control type="text" value={branch.branchName}  placeholder="Enter Branch Name" onChange={(event)=>setBranch({...branch,branchName:event.target.value})} maxLength={10} minLength={3} required />
        
      </Form.Group>
      
      <Form.Group className="mb-3" >
        <Form.Label>Phone No</Form.Label>
        <Form.Control type="text" value={branch.phoneNumber} name='phoneNumber' placeholder="Enter Phone Number" onChange={(event)=>setBranch({...branch,phoneNumber:event.target.value})} maxLength={12} required pattern='^(?:(?:\+|0{0,2})212(\s*[\-]\s*)?|0)?[5-7]\d{8}$'/>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Street name</Form.Label>
        <Form.Control type="text" value={branch.street} name='street' placeholder="Enter street Name" onChange={(event)=>setBranch({...branch,street:event.target.value})} maxLength={30} minLength={3} required />
        
        </Form.Group>

        <Form.Group className="mb-3" >
        <Form.Label>City</Form.Label>
        <Form.Control type="text" value={branch.city} name='city' placeholder="Enter City" onChange={(event)=>setBranch({...branch,city:event.target.value})} maxLength={10} minLength={3} required/>
        </Form.Group>
        <Form.Group className="mb-3" >
        <Form.Label>State name</Form.Label>
        <Form.Control type="text" value={branch.state} name='state' placeholder="Enter State" onChange={(event)=>setBranch({...branch,state:event.target.value})} maxLength={10} minLength={3} required />
       
        </Form.Group>
        
        <Form.Group className="mb-3" >
        <Form.Label>Country Name</Form.Label>
        <Form.Control type="text" value={branch.country} name='country' placeholder="Enter country" onChange={(event)=>setBranch({...branch,country:event.target.value})} maxLength={10} minLength={3} required/>
      </Form.Group>
     
      <Button variant="primary" type="button" onClick={onsubmit} className='px-3 m-2'>
        Submit
      </Button>
      </Form>
      
      </div>


      </div>

      </div>
  );
}

export default AddBranch;

