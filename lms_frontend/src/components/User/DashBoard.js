import { Link } from "react-router-dom";
import SideBar from './SideBar'
import {useState, useEffect} from 'react'
import axios from "axios";

const baseUrl='http://127.0.0.1:8000/api'
function DashBoard(){
  const [dashboardData,setdashboardData] = useState([]);
  const studentId=localStorage.getItem('studentId')

  useEffect(()=>{
    try{
      axios.get(baseUrl+'/student/dashboard/'+studentId).then((res)=>{
        setdashboardData(res.data);
      });
    }catch(error){
      console.log(error)
    }
},[])
  return (
    <div className="container mt-4">
      <div className="row">
        <aside className="col-md-3">
         <SideBar />
        </aside>
        <section className='col-md-9'>
          <div className="row">
            <div className="col-md-4">
              <div className="card border-primary">
                <h5 className="card-header bg-primary text-white">Enrollled Courses</h5>
                <div className="card-body">
                  <h3><Link to="/my-courses">{dashboardData.enrolled_courses}</Link></h3>
                </div>
              </div>
            </div>
            </div>
        </section>
      </div>
    </div>
  )
}

export default DashBoard