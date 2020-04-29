import React, { useState } from 'react';
import axios from 'axios';

function GridItem(props) {
    // console.log(props)
    const [itemPicUrl, setItemPicUrl] = useState("");
    const [itemPicAlt, setItemPicAlt] = useState("");


    axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${props.item}`)
        .then(response => response.data)
        .then(data => {
            setItemPicUrl(data.primaryImageSmall);
            setItemPicAlt(data.title);
        })

    return (
        <img src={itemPicUrl} alt={itemPicAlt} />
    )
}



export default GridItem;