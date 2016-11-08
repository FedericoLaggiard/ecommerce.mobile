import React, { Component } from 'react';

import style from '../../styles/main.less';


import TopBar from './topBar';

export default class App extends Component{
    render(){
        return (
            <div className="app-view">
                <TopBar />
                OK
            </div>
        );
    }
}