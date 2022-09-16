import React from 'react'
import {useParams} from 'react-router-dom'
import { Link } from "react-router-dom";
import {useEffect, useState} from 'react'
import axios from 'axios'
import {Carousel, Card, Button, Placeholder, Col, Row} from 'react-bootstrap'
import Swal from "sweetalert2";

const baseUrl='http://127.0.0.1:8000/api'
function CourseDetail() {
  const [chapterData, setchapterData]=useState([]);
  const [teacherData, setteacherData]=useState([]);
  const [courseData, setcourseData]=useState([]);
  const [techListData, settechListData]=useState([]);
  const [relatedcourseData, setrelatedcourseData]=useState([]);
  const [userLoginStatus, setuserLoginStatus]=useState();
  const [enrollStatus, setenrollStatus]=useState();
  let {course_id}=useParams();
  const studentId=localStorage.getItem("studentId")
    // fetch course when page loads

  useEffect(()=>{
  try{
    axios.get(baseUrl+'/course/'+course_id).then((res)=>{
          setcourseData(res.data);
          setchapterData(res.data.course_chapters);
          setteacherData(res.data.teacher);
          setrelatedcourseData(JSON.parse(res.data.related_videos));
          settechListData(res.data.tech_list);
    });
  }catch(error){
    console.log(error)
  }
// fetch enroll status
  try{
    axios.get(baseUrl+'/fetch-enroll-status/'+studentId+'/'+course_id).then((res)=>{
          if(res.data.bool==true){
            setenrollStatus('success')
          }
    });
  }catch(error){
    console.log(error)
  }

  const studentLoginStatus=localStorage.getItem("studentLoginStatus");
  if(studentLoginStatus=='true'){
    setuserLoginStatus('success')
  }
  },[]);

  
  const enrollCourse=()=>{
    const studentId=localStorage.getItem('studentId')
    const _formData=new FormData();
    _formData.append("course", course_id);
    _formData.append('student',studentId);
    try{
       axios.post(baseUrl+'/student-enroll-course/', _formData,{
        headers: {
          'content-type': 'multipart/form-data'
        }
       })
       .then((res)=>{
            if(res.status==200||res.status==201){
              Swal.fire({
                title: 'you have suceesfully enrolled in this course',
                toast: true,
                icon: 'success',
                timer:300000000,
                position:'Top right',
                timerProgressBar: 'true',
                showConfirmButton:false
              })
            window.location.reload()
            setenrollStatus('success')
            }
              
            });
          }catch(error){
        console.log(error);
          }
    }

  // console.log(relatedcourseData)
  return (

    <>
    <div className='container'>
      <div className='card-body'>
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={courseData.featured_img}
          alt="First slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    </div>
    <div className='container mt-4'>
      <div className='card card-body'>
    <h2 className='mt-4 text-danger text-center'>Admission Details</h2>


<i className='mt-3 text-bold'>When you are thinking about studying overseas, it is important that you understand all 
the costs involved and budget accordingly. It is essential to budget for your studies prior to leaving your home country 
and to arrange all your funding for BOTH your tuition fees and your living costs. The  list of documents are found bellow</i>
  <br/>
<b><b>.</b> {courseData.bird}</b>
<b><b>.</b> {courseData.table}</b>
<b><b>.</b> {courseData.chick}</b>
<b><b>.</b> {courseData.fowl}</b>
<b><b>.</b> {courseData.eagle}</b>
<br/>

<h2 className='mt-4 text-danger text-center'>UK university for {courseData.title} {courseData.section}</h2>
<i className='mt-3 text-bold'>{courseData.schooldescription}-</i>

<h2 className='mt-4 text-danger'>{courseData.university}</h2>
<h5 className='mt-4 text-danger'>{courseData.title}</h5>

<i className='mt-3 text-bold'>Students who want to earn a degree in {courseData.title} in the {courseData.university} 
will run the program through different ways</i>

<i className='mt-3 text-bold'>{courseData.description}</i>
<br/>
<i><b>Intake</b>- {courseData.intake}</i>
<i><b>Duration</b>- {courseData.duration}</i>
<i><b>Study Mode</b>- {courseData.studymode}</i>
<i><b>Tuition Fees</b>- £{courseData.tuitionfees} (full-time)</i>
<br/>

<h2 className='mt-4 text-danger text-center'>Application Deadline</h2>
<br/>
<br/>
<b>{courseData.deadline} </b>
This is the deadline for applications to be completed and sent for this course. If the university or college still has places 
available you can apply after this date, but your application is not guaranteed to be considered

<i>There will be a variety of career paths for skilled graduates of {courseData.title}. Again, they 
  can go for further study and research after completing the course</i>
<br/>
<br/>
<div className='text-center'>
           {enrollStatus==='success' && userLoginStatus=='success' &&
             <p><span className='btn btn-success'>Enrolled Awaiting Admission</span></p>
           }
           {userLoginStatus==='success' && enrollStatus!=='success' &&
             <p><button type="button" onClick={enrollCourse} className='btn btn-success'>Enroll In This Course</button></p>
           }
           {userLoginStatus!=='success' &&
             <Link to="/user-login">Please Loging To Enroll In This Course</Link>
           }
           </div>
<br/>
</div>
    </div>

    </>
    
  )
}

export default CourseDetail
