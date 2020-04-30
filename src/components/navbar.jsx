import React from 'react';
import {Link} from 'react-router-dom';
import home from '../assets/home.png';

class NavBar extends React.Component{

    render() {
        return(
            <nav>  
                <ul>
                    <li><Link to="/home"><img src={home} alt={'Home symbol'} style={{width: 40}}/></Link></li>
                </ul>
                <h1>Historical Journey</h1>
            </nav>
        )
    }
}


export default NavBar;