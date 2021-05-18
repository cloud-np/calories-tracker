import React, { Component } from 'react';
import './ProgressBar.css';

const ProgressBar = (props) => {
    
    const { width = '55%', title = '', ...restProps } = props;

    return (
        <div className="ProgressBar-Container">
            <p className="target-text description">TARGET {title.toUpperCase()}</p>
            <p className="target-text description float-right percentage">{props.width}</p>
            <div style={{ width }} className="ProgressBar mt-1"></div>
            <div className="ProgressBar-bg"></div>
        </div>
    );
}

export default ProgressBar;