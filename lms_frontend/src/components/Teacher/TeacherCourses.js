import { Link } from "react-router-dom";
import TeacherSideBar from './TeacherSideBar'
 import {useEffect, useState} from 'react'
 import axios from 'axios'

const baseUrl='http://127.0.0.1:8000/api'
function TeacherCourses(){
  const [courseData, setCourseData]=useState([]);
  const teacherId=localStorage.getItem('teacherId')
    // fetch course when page loads

   useEffect(()=>{
    try{
      axios.get(baseUrl+'/teacher-courses/'+teacherId).then((res)=>{
            setCourseData(res.data);
      });
    }catch(error){
      console.log(error)
    }
  },[]);
  return (
      <div className="container mt-4">
      <div className="row">
        <aside className="col-md-3">
         <TeacherSideBar />
        </aside>
        <section className='col-md-9'>
        <div className="card">
          <div className="card-header">My Courses</div>
          <div className="card-body">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Image</th>
                  <th>Total Enrolled</th>
                </tr>
              </thead>
                <tbody>
                  {courseData.map((course, index) =>
                  <tr>
                    <td><Link to={'/all-chapters/'+course.id}>{course.title}</Link></td>
                    <td><img src={course.featured_img} width='80' className="rounded" alt={course.title}/></td>
                    <td><Link to={"/enrolled-students/"+course.id}>{course.total_enrolled_students}</Link></td>
                    <td>
                    </td>
                  </tr>
                  )}
                </tbody>
    
            </table>
          </div>
        </div>
        </section>
      </div>
    </div>
  )
}

export default TeacherCourses;