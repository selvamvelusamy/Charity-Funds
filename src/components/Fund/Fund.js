import React from 'react';

import './Fund.css';

const Fund = (props) => {
    return (
        <div className="fund-container">
            <div className="title">{props.for}</div>
            <div className="amount">{0}</div>
        </div>
    );
}

export default Fund;