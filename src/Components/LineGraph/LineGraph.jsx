import React from 'react';
import './LineGraph.css';
import { EXAMPLE_DATA, DARK_THEME } from './sample';
import Charty from 'react-charty';


function LineGraph({props = EXAMPLE_DATA}) {

    return (
        <div className="LineGraph">

            <Charty title="Example" theme={DARK_THEME} {...props}/>
        </div>
    );
}

export default LineGraph;

