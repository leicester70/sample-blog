import React, { Component } from 'react';
import monthsArray from "./monthsArray.json"

class monthSelect extends Component {

    componentDidMount() {
    }

    render() {
        return (
            <div>
                {
                    monthsArray.map((object =>
                        <p key={`${object.abbreviation}`}>{object.name}</p>
                    ))
                }
            </div>
        );
    }
}

export default monthSelect;