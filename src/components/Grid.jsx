import React, { Component } from 'react';
import axios from 'axios';
import GridItem from './GridItem';
import { Link } from 'react-router-dom';
import Delorean from '../images/delorean.gif';
import SelfDestruct from './Selfdestruct';
// ${props.match.params.periodId}

class Grid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            displayingGrid: false
        }
        console.log(props)
        axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/search?departmentId=${props.match.params.periodId}&isHighlight=true&q=*`)
            // .then(response => console.log(response))
            .then(response => response.data)
            .then(data => {
                const shortArray = data.objectIDs.slice(0, 50);
                // console.log(shortArray)
                this.setState({ items: [...this.state.items, ...shortArray] });
            })
    }
    render() {
        return (
            <div>
                <SelfDestruct expirationDate={new Date(Date.now() + 4000)}>
                    <div className='lastGrid'>
                        <img className='Delorean' src={Delorean} alt='Delorean Working' />
                    </div>
                </SelfDestruct>
                <div className={'grid'}>
                    {this.state.items
                        .map((item) => (
                            <Link to={`/object/${item}`}>
                                <GridItem item={item} key={item} />
                            </Link>
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default Grid;