import { Outlet, Link } from "react-router-dom";
import './Header.css';
import logo from '../assets/logo/logo-main.svg';


const Header = () =>{
    return (<>
    
    <nav className="navbar navbar-expand-lg navbar-light ">
  <div className="container-fluid">
    <Link
     className="navbar-brand px-3" to="#"><img src={logo} alt="logo" className="logo" /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link
           className="nav-link active px-3" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item"><Link className="nav-link px-3" to='/feature'>Features</Link></li>
        <li className="nav-item"><Link className="nav-link px-3" to="/diets">Diets</Link></li>
        <li className="nav-item"><Link className="nav-link px-3" to="/food">Food</Link></li>
        <li className="nav-item"><Link className="nav-link px-3" to="/library">Library</Link></li>
        <li className="nav-item"><Link className="nav-link px-3" to="/business">Business pushpa1 cvxcv</Link></li>
        <div className="right_logo px-3">
       
       <div className="sign_up_btn"><Link to="#" className="sigup">Sign Up</Link></div>
       <div className="sign_up_in"><Link to="#" className="signin">Sign In</Link></div>

     </div>
        
      </ul>
     
    </div>
  </div>
</nav>
<Outlet/>
    </>)
}

export default Header;