import {Link} from 'react-router-dom'
import {useState} from 'react'

const baseUrl='http://127.0.0.1:8000/api'
function Header() {
  const [searchString,setsearchString] = useState({
    'search':''
  });
  const teacherLoginStatus=localStorage.getItem('teacherLoginStatus')
  const studentLoginStatus=localStorage.getItem('studentLoginStatus')

  const handleChange=(event)=>{
    setsearchString({
      ...searchString,
      [event.target.name]:event.target.value
    });
  }

  const searchCourse = () =>{
     if (searchString.search!==''){
      window.location.href='/search/'+searchString.search
     }
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">ASW</Link>
                <a href='https://twitter.com/Vector78756493?t=MOmHHroOi1-lniWiNwNE_w&s=09'><button type="button" class="btn btn-link"><span class="bi bi-twitter"></span></button></a>
        <a href='https://wa.me/message/H6EPMV7BITKFO1'><button type="button" class="btn btn-link"><span class="bi bi-whatsapp"></span></button></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <form class='d-flex'>
          <input name='search' onChange={handleChange} class='form-control me-2' type='search' placeholder='Search by course title' aria-label='Search' />
          <button onClick={searchCourse} class='btn btn-warning' type='button'>Search</button>
        </form>
          <div className="navbar-nav ms-auto">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            <Link className="nav-link active" to="/about">About</Link>
            <Link className="nav-link active" to="/contact-us">ContactUs</Link>
            {/* <Link className="nav-link active" to="/reply-contact-us">ReplyContactus</Link> */}

            <li className="nav-item dropdown" >
              <a className="nav-link active dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Staff Portal
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            {teacherLoginStatus!=='true' &&
            <>
            <li><Link className="dropdown-item" to="/teacher-login">Login</Link></li>
            <li><Link className="dropdown-item" to="/teacher-register">Register</Link></li></>
            }
            {teacherLoginStatus==='true' &&
            <>
            <li><Link className="dropdown-item" to="/teacher-dashboard">DashBoard</Link></li>
            <li><Link className="dropdown-item" to="/teacher-logout">Logout</Link></li>
            </>
            }
          </ul>
          </li>

           <li className="nav-item dropdown" >
          <a className="nav-link active dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            User
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            {studentLoginStatus!=='true' &&
            <>
            <li><Link className="dropdown-item" to="/user-login">Login</Link></li>
            <li><Link className="dropdown-item" to="/user-register">Register</Link></li>
            </>
            }
            {studentLoginStatus==='true' &&
            <>
            <li><Link className="dropdown-item" to="/user-dashboard">DashBoard</Link></li>
            <li><Link className="dropdown-item" to="/logout">Logout</Link></li>
            </>
            }
          </ul>
          </li>
      </div>
    </div>
  </div>
</nav>
  );
}

export default Header;
