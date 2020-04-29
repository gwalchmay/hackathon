import React from 'react';
import {Link} from 'react-router-dom';

class NavBar extends React.Component{

    render() {
        return(
            <nav>  
                <ul>
                    <li><Link to="/home">home</Link></li>
                </ul>
                <h1>Historical journey</h1>
            </nav>
        )
    }
}


export default NavBar;