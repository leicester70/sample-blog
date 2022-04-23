import React, { Component } from 'react';
import style from './style.css';
import MonthSelect from './monthSelect/monthSelect';

class timeLine extends Component {
    render() {
        return (
            <div className="tl-container">
                <h2 className='tl-header'>Timeline</h2>
                <hr></hr>
                <MonthSelect/>
            </div>
        );
    }
}

export default timeLine;