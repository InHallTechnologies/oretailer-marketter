import React from 'react';
import './marketters.styles.scss'

const Marketters = ({marketter}) => {
    return(
        <div className='marketter-card'>
            <h3>{marketter.Name}</h3>
            <span>{marketter.EmailId}</span>
            <span>{marketter.City}</span>
        </div>
    )
}
export default Marketters;