import React, { Component } from 'react';

export default class TopBar extends Component{
    render(){
        return (
            <div id="top-bar">
                <i className="material-icons">menu</i>
                <div className="search-container">
                    <input type="text" id="search-field" placeholder="search"/>
                </div>
                <i className="material-icons">shopping_cart</i>
            </div>
        );
    }
}