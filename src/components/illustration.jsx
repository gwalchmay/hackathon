import React from 'react';
import DeloreanFixe from  '../images/deloreanfixe.png';

function Illustration(props) {
    console.log(props)

    return(
        <img id="unique" src={DeloreanFixe} alt="Logo" />
    );
};

export default Illustration;