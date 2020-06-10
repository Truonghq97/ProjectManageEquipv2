import React, { Component } from 'react'


import Header from  './partials/Header'
import SideBar from './partials/SideBar';
import ContentUser from './partials/ContentAdmin'

export default class listUser extends Component {
    render() {
        return (
            <div>
                <Header />
                <SideBar />
                <ContentUser />
            </div>
        )
    }
}
