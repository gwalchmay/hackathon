import React, { useState } from 'react';
import axios from 'axios';

function DisplayItem(props) {
    // console.log(props.match.params.itemId)
    const [itemPicUrl, setItemPicUrl] = useState("");
    const [itemName, setItemName] = useState("");
    const [itemDate, setItemDate] = useState("");


    axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${props.match.params.itemId}`)
        .then(response => response.data)
        .then(data => {
            setItemPicUrl(data.primaryImage);
            setItemName(data.title);
            setItemDate(data.objectDate)
        })

    return (
        <div>
            <h3>{itemName}</h3>
            <img src={itemPicUrl} alt={itemName} />
            <h4>{itemDate}</h4>
        </div>
    )
}

export default DisplayItem;