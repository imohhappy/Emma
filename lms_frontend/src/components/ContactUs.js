import { Link } from "react-router-dom";
import React from 'react'
import {useEffect, useState} from 'react'
import axios from "axios";

const baseUrl='http://127.0.0.1:8000/api/contact/';
function ContactUs() {
  const [ContactData,setContactData] = useState({
    'full_name':'',
    'email':'',
    'query':'',
    'status':''
  });

  // Change Element value
  const handleChange=(event)=>{
    setContactData({
      ...ContactData,
      [event.target.name]:event.target.value
    });
  }
  // End

  // Submit Form
  const submitForm=()=>{
      const contactFormData=new FormData();
      contactFormData.append("full_name", ContactData.full_name)
      contactFormData.append("email", ContactData.email)
      contactFormData.append("query", ContactData.query)
      try{
          axios.post(baseUrl, contactFormData).then((response)=>{
            setContactData({
              'full_name':'',
              'email':'',
              'query':'',
              'status':'success'
            });
      });
      }catch(error){
        console.log(error);
        setContactData({'status':'error'})
      }

  };
  // End
  const listStyle={
    'list-style':'none'
  }

  useEffect(()=>{
    document.title='Contact Us'
  })
  
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-7">
          {ContactData.status=='success' && <p class="text-success"> Thanks for contacting us</p>}
          {ContactData.status=='error' && <p class="text-danger"> Something wrong happened</p>}
          <div className="card">
            <h5 className="card-header">Contact Us</h5>
            <div className="card-body">
             {/* <form> */}
                  <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Fullname</label>
                    <input value={ContactData.full_name} onChange={handleChange} name="full_name" type="full_name" className="form-control" />
                    </div>

                    <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email</label>
                    <input value={ContactData.email} onChange={handleChange} name="email" type="email" className="form-control" />
                    </div>

                  <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Query</label>
                    <textarea rows='10' value={ContactData.query} onChange={handleChange} name="query" className="form-control"></textarea>
                  </div>

                  <button onClick={submitForm} type="submit" className="btn btn-primary">Send</button>
                {/* </form> */}
            </div>
          </div>
        </div>
        <div className="col-4 offset-1">
          <h5 className="border-botton">Address</h5>
          <ul className="m-0 p-0" style={listStyle}>

            <li>
              <label className="fw-bold">Name:-</label>
              <span className="ms-2">Erhlton Udosen</span>
            </li>

            <li>
              <label className="fw-bold">Address:-</label>
              <span className="ms-2">Suit 2 First floor House 797</span>
            </li>
            <li>
              <label className="fw-bold">Title:-</label>
              <span className="ms-2">Branch Consultant</span>
            </li>
            <li>
              <label className="fw-bold">Moblie No:-</label>
              <span className="ms-2">+234 8081760351</span>
            </li>

             <li className="mt-4">
              <label className="fw-bold">Name:-</label>
              <span className="ms-2">Frank Ukofia</span>
            </li>

            <li>
              <label className="fw-bold">Address:-</label>
              <span className="ms-2">Uk</span>
            </li>
            <li>
              <label className="fw-bold">Title:-</label>
              <span className="ms-2">Head Office</span>
            </li>
            <li>
              <label className="fw-bold">Moblie No:-</label>
              <span className="ms-2">+44 7950469909</span>
            </li>

            <li className="mt-4">
              <label className="fw-bold">Name:-</label>
              <span className="ms-2">Imoh Gerald</span>
            </li>
            <li>
              <label className="fw-bold">Address:-</label>
              <span className="ms-2">Uyo, Akwa Ibom</span>
            </li>
            <li>
              <label className="fw-bold">Title:-</label>
              <span className="ms-2">Sub Office</span>
            </li>
            <li>
              <label className="fw-bold">Moblie No:-</label>
              <span className="ms-2">+234 08089505062</span>
            </li>
          </ul>
        </div>

           
      </div>
    </div>
  )
}

export default ContactUs