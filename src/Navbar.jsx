import { Link } from 'react-router-dom'
import './App.css'




function Navbar() {
    return (
        <>
  <nav class="navbar navbar-expand-lg ">
            <div class="container">
              <a class="navbar-brand" href="#">
                <img src="/photos/logo.png" alt="logo"/>
              </a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
               <li>
               <Link to="/">Home</Link>
               </li>
               <li>
               <Link to="/About">About</Link>
               </li>
               <li>
               <Link to="/skill">Skill</Link>
               </li>

               <li>
               <Link to="/resume">Resume</Link>
               </li>


                </ul>
                <button class="navbtn">Hire Me</button>
              </div>
            </div>
          </nav>
        </>
 
    )
}

export default Navbar
