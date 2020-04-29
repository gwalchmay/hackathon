import React from 'react';
import {Link} from 'react-router-dom';
import home from '../assets/home.png';

class NavBar extends React.Component{

    render() {
        return(
            <nav>  
                <ul>
                    <li><Link to="/home"><img src={home} style={{width: 40}}/></Link></li>
                </ul>
                <h1>Historical journey</h1>
            </nav>
        )
    }
}


export default NavBar;