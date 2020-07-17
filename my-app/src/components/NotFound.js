import React, { Component } from 'react';
import {Link, withRouter } from 'react-router-dom';



class NotFound extends Component {
    componentDidMount() {
        const path = `/error/404`;
        this.props.history.push(path);
    }

    componentWillUnmount() {
        clearInterval(this.props.history);
    }

    render() {
        return (
            <div>
                <h3> Error 404 </h3>
                <p>No Results Found. Try again.</p>
                <Link to={'/'}><p>Home</p></Link>
            </div>
        );
    }
}

export default withRouter(NotFound);
      
