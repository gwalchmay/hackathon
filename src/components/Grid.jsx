import React, { Component } from 'react';
import axios from 'axios';
import GridItem from './GridItem';
import DisplayItem from './DisplayItem'
import { BrowserRouter as Switch, Route, Link } from 'react-router-dom';


class Grid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        }
        axios.get('https://collectionapi.metmuseum.org/public/collection/v1/search?departmentId=6&isHighlight=true&q=*')
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
                        <Link to={`object/${item}`}>
                            <GridItem item={item} key={item} />
                        </Link>
                    ))
                }
                <Switch>
                    <Route path="/object/:itemId" component={DisplayItem} />
                </Switch>
            </div>

        )
    }
}

export default Grid;