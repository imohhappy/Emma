import React from 'react'
import {useEffect, useState} from 'react'
import axios from "axios";

const baseUrl='https://staff.admissionsupportworldwide.co.uk/api';
function Login() {
  const [studentLoginData, setstudentLoginData]=useState({
    email:'',
    password:''
  });

  const [errorMsg, seterrorMsg]=useState('')

  const handleChange=(event)=>{
    setstudentLoginData({
      ...studentLoginData,
      [event.target.name]:event.target.value
    });
  }

    const submitForm=()=>{
    const StudentFormData=new FormData;
    StudentFormData.append('email', studentLoginData.email)
    StudentFormData.append('password', studentLoginData.password)
    try{
        axios.post(baseUrl+'/student-login', StudentFormData)
        .then((res)=>{
          if(res.data.bool==true){
            localStorage.setItem('studentLoginStatus', true);
            localStorage.setItem('studentId',res.data.student_id);
            window.location.href='/user-dashboard';
          }else{
            seterrorMsg('invalid email or password')
          }
        })

    }catch(error){
      console.log(error)
    }
  }

  const studentLoginStatus=localStorage.getItem('studentLoginStatus')
  if(studentLoginStatus==='true'){
    window.location.href='/user-dashboard';
  }



  useEffect(()=>{
    document.title='Student Login'
  })

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-6 offset-3">
          <div className="card">
            <h5 className="card-header">User Login</h5>
            <div className="card-body">
              {errorMsg && <p className="text-danger">{errorMsg}</p>}
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">Email</label>
                  <input value={studentLoginData.email} onChange={handleChange} name="email" type="email" className="form-control" />
                  </div>
                <div className="mb-3">
                  <label for="exampleInputPassword1" className="form-label">Password</label>
                  <input value={studentLoginData.password} onChange={handleChange} name="password" type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                {/* <div className="mb-3 form-check">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                  <label className="form-check-label" for="exampleCheck1">Remember me</label>
                </div> */}
                <button onClick={submitForm} type="submit" className="btn btn-primary">Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login