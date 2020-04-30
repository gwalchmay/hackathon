import React, { Component } from 'react';
import axios from 'axios';
import GridItem from './GridItem';
import { Link } from 'react-router-dom';
// ${props.match.params.periodId}

class Grid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        }
        console.log(props)
        axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/search?departmentId=${props.match.params.periodId}&isHighlight=true&q=*`)
            // .then(response => console.log(response))
            .then(response => response.data)
            .then(data => {
                const shortArray = data.objectIDs.slice(0, 50);
                console.log(shortArray)
                this.setState({ items: [...this.state.items, ...shortArray] });
            })
    }

    render() {
        return (
            <div className='grid'>
                {this.state.items
                    .map((item) => (
                        <Link to={`/object/${item}`}>
                            <GridItem item={item} key={item} />
                        </Link>
                    ))
                }
            </div>

        )
    }
}

export default Grid;