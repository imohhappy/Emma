import { Link } from "react-router-dom";
import SideBar from './SideBar'
 import {useEffect, useState} from 'react'
 import axios from 'axios'

const baseUrl='http://127.0.0.1:8000/api'
function MyCourses(){
  const [courseData, setcourseData]=useState([]);
  const studentId=localStorage.getItem('studentId')

   // fetch course when page loads

   useEffect(()=>{
    try{
      axios.get(baseUrl+'/fetch-enrolled-courses/'+studentId).then((res)=>{
        console.log(res.data)
        setcourseData(res.data);
      });
    }catch(error){
      console.log(error)
    }
  },[]);

  return (
      <div className="container mt-4">
      <div className="row">
        <aside className="col-md-3">
         <SideBar />
        </aside>
        <section className='col-md-9'>
        <div className="card-body">
          <div className="card-header">My Courses</div>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Course</th>
                  <th>School</th>
                  <th>Time</th>
                  <th>Status</th>
                  {/* <th>Action</th> */}
                </tr>
              </thead>
                <tbody>
                  {courseData.map((row, index) =>
                  <tr>
                    <td><Link Link to={"/detail/"+row.course.id}>{row.course.title}</Link></td>
                    <td>{row.course.university}</td>
                    <td>{row.enrolled_time}</td>
                    <td>Admission</td>
                </tr>
                  )}
                </tbody>
    
            </table>
          </div>
        
        </section>
      </div>
    </div>
  )
}

export default MyCourses;