import React, { Component } from 'react';

class Course extends Component {

    parseQuery(searchPart) {
        var search = searchPart.substring(1);
        return JSON.parse('{"' + search.replace(/&/g, '","').replace(/=/g, '":"') + '"}', function (key, value) { return key === "" ? value : decodeURIComponent(value) });
    }

    render() {
        console.log(this.props)

        const params = this.parseQuery(this.props.location.search);
        console.log(params);

        return (
            <div>
                <h1>{params.title}</h1>
                <p>You selected the Course with ID: {this.props.match.params.id}</p>
            </div>
        );
    }
}

export default Course;