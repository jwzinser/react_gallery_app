import React, { Component } from 'react';
import {Link, withRouter } from 'react-router-dom';



/**Generate a error message - 404
 */
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
                <p>No Results Found. You enter a wrong URL or your search did not return any results. Please try again.</p>
                <Link to={'/'}><p>Home</p></Link>
            </div>
        );
    }
}

export default withRouter(NotFound);
      
