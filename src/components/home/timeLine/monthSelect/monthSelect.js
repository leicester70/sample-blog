import React, { Component } from 'react';

class monthSelect extends Component {

    componentDidMount() {
    }

    render() {

        const monthsArray = [
            {
                "abbreviation": "Jan",
                "name": "January"
            },
            {
                "abbreviation": "Feb",
                "name": "February"
            },
            {
                "abbreviation": "Mar",
                "name": "March"
            },
            {
                "abbreviation": "Apr",
                "name": "April"
            },
            {
                "abbreviation": "May",
                "name": "May"
            },
            {
                "abbreviation": "Jun",
                "name": "June"
            },
            {
                "abbreviation": "Jul",
                "name": "July"
            },
            {
                "abbreviation": "Aug",
                "name": "August"
            },
            {
                "abbreviation": "Sep",
                "name": "September"
            },
            {
                "abbreviation": "Oct",
                "name": "October"
            },
            {
                "abbreviation": "Nov",
                "name": "November"
            },
            {
                "abbreviation": "Dec",
                "name": "December"
            }
        ]


        return (
            <div>
                {
                    monthsArray.map((object =>
                        <p key="">
                            {object.name}
                        </p>
                    ))
                }
            </div>
        );
    }
}

export default monthSelect;