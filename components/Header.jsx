import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <>
    <div className="links">
     <Link to="/students/login"><b><p>Parents' login</p></b></Link><hr />
              <Link to="/teacher/login"><b><p>Teachers' login </p></b></Link><hr />
                <Link to="/contact"><b><p> Enroll Now</p></b></Link><hr />
                 <Link to="/updates"><b> <p>Updates</p></b></Link>
    </div>
    
    </>
  )
}

export default Header;
