import React, {Component} from 'react';

function GetYear() {
    const year = new Date().getYear();
    console.log(year);
    return <footer><p>CopyRight {year}</p></footer>
}

export default class Footer extends Component {
    render() {
        return(
            <GetYear />
        )
    }
}