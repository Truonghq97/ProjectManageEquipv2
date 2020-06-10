import React, { Component } from 'react'


import Header from  './partials/Header'
import SideBar from './partials/SideBar'
import ContentEquip from './partials/ContentEquip'

export default class listEquipment extends Component {
    render() {
        return (
            <div>
                <Header />
                <SideBar />
                <ContentEquip />
            </div>
        )
    }
}
