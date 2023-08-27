import "./Nav.css"
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav className="navbar">
            <ul>
                <li className="logo"><Link to="/"><a >Attendance System</a></Link></li>
                <li><Link to="/studentlist"><a >Student List</a></Link></li>
                <li><Link to="/addstudent"><a >Add Student</a></Link></li>
            </ul>
        </nav>
    )
}

export default Nav;