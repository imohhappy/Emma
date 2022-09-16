import { Link } from "react-router-dom";
 import {useEffect, useState} from 'react'
 import axios from 'axios'

const baseUrl='http://127.0.0.1:8000/api/course/'
function AllCourses() {
  const [courseData, setCourseData]=useState([]);
  const [nextUrl, setnextUrl]=useState();
  const [previousUrl, setpreviousUrl]=useState();
    // fetch course when page loads
   useEffect(()=>{
    try{
      axios.get(baseUrl).then((res)=>{
          setnextUrl(res.data.next)
          setpreviousUrl(res.data.previous)
          setCourseData(res.data.results);
      });
    }catch(error){
      console.log(error)
    }
  },[]);

  const paginationHandler=(url)=>{
    try{
      axios.get(url).then((res)=>{
        setnextUrl(res.data.next)
        setpreviousUrl(res.data.previous)
        setCourseData(res.data.results);
      });
    }catch(error){
      console.log(error)
    }
  };
  return (
    <div className="container mt-3">
   {/* Latest Course */}

    <h3 className="pb-1 mb-4">Latest Courses</h3>
    <div className="row mb-4">
      {courseData && courseData.map((course, index)=>
      <div className="col-md-3 mt-4">
        <div className="card">
          <img src={course.featured_img} className="card-img-top" alt={course.title} />
          <div className="card-body">
          <h5 className="card-title"><a href="#">{course.title}</a></h5>
          <p className="card-text">{course.university} is a good a university to study {course.title}</p>
          <h5 className="card-ttle"><Link to={"/detail/"+course.id} className="btn btn-primary">{course.university}</Link></h5>
          </div>
        </div>
      </div>
      )}
    </div>
    {/* End Latest Course */}
    {/* Pagination start */}

    <nav aria-label="Page navigation example">
  <ul className="pagination justify-content-center">
    {previousUrl &&
    <li className="page-item"><button className="page-link" onClick={()=>paginationHandler(previousUrl)}><i className="bi bi-arrow-left"></i>Previous</button></li>
    }
    {nextUrl &&
    <li className="page-item"><button className="page-link" onClick={()=>paginationHandler(nextUrl)}>Next<i className="bi bi-arrow-right"></i></button></li>
    }
  </ul>
</nav>

{/* End */} 
    </div>
  );
}

export default AllCourses;
