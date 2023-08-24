import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import ReorderIcon from '@mui/icons-material/Reorder';
import { useState } from 'react';

function Navbar() {

    const [expandNavbar, setExpandNavbar] = useState(false);

    return (<div className="navbar" id={expandNavbar? "open" : "close"}> 
        <div className="toggleButton">
            <button onClick={() => {setExpandNavbar((prev) => !prev)}}>
                <ReorderIcon />
            </button>
        </div>
        <div className="links">
            <Link to="/"> Home </Link>
            <Link to="/page2"> Page2 </Link>
            <Link to="/page3"> Page3 </Link>
        </div>
    </div>)
}

export default Navbar;