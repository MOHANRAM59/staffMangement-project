import { Link,Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap-grid.css";
import "bootstrap/dist/js/bootstrap.bundle.js";

export default function Layout(){
    
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  
  <button className="navbar-brand navbar navbar-inverse" link="">Staff data</button>
  
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <button className="nav-link" ><Link to="/Home">Home </Link></button>
      </li>
      <li className="nav-item">
        <button className="nav-link"><Link to="/Contact">Contact</Link></button>
      </li>
      
      
      
     
      
      <li className="nav-item">
        <button className="nav-link"><Link to="/professional">Staffs</Link></button>
      </li>
      <li className="nav-item">
        <button className="nav-link"><Link to="/Addprofessional">AddStaff</Link></button>
      </li>
      <li className="nav-item">
        <button className="nav-link"><Link to="/Remove">Remove</Link></button>
      </li>
    </ul>
  </div>
</nav>
            <Outlet/>
        </div>
    )
}