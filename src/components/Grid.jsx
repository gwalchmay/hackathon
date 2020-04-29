import React, { Component } from 'react';
import axios from 'axios';
import GridItem from './GridItem';


class Grid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        }
        axios.get('https://collectionapi.metmuseum.org/public/collection/v1/search?departmentId=13&isHighlight=true&q=*')
            // .then(response => console.log(response))
            .then(response => response.data)
            .then(data => {
                this.setState({ items: [...this.state.items, ...data.objectIDs] });
            })
    }

    render() {
        // console.log(...this.state.items)
        return (
            <div>
                {this.state.items
                    .map((item) => (
                        <GridItem item ={item} key={item} />
                    ))}
            </div>
        )
    }
}

export default Grid;