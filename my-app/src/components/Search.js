import React, { Component } from 'react';
import PictureSearch from './PictureSearch'

export default class Search extends Component {
    state = { query: 'photoartwork'}
    onSearchChange = e => {this.setState({ query: e.target.value });}

    handleSubmit = e => {
        e.preventDefault();
        this.setState({ query: this.state.query });
        e.currentTarget.reset();
    }
    //Search sensible to keystrokes
    render() {
        return (
            <div>              
                <form onSubmit={this.handleSubmit}>
                    <input className="search" type="search" onChange={this.onSearchChange} placeholder="Search Images" />
                    <i className="fa fa-search"></i>
                </form>
                <PictureSearch query={this.state.query} api={this.props.api} />
            </div>
        )
    }
}