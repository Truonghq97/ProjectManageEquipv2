// SideBar.js

import React, {Component} from 'react';
import {Link} from 'react-router-dom'

export default class SideBar extends Component {
    render(){
        return (
            <aside className="main-sidebar">
                <section className="sidebar">
                    <div className="user-panel ">
                        <div className="pull-left image">
                            <img src="img/user2-160x160.jpg" className="img-circle" alt="User" />
                        </div>
                        <div className="pull-left info ">
                            <p>Truong HQ</p>
                            <Link to="#" className="fa fa-circle text-success">Online</Link>
                            {/* <a href="#"><i className="fa fa-circle text-success"></i> Online</a> */}
                        </div>
                    </div>
                    <form action="#" method="get" className="sidebar-form">
                        <div className="input-group">
                        <input type="text" name="q" className="form-control" placeholder="Search..." />
                        <span className="input-group-btn">
                                <button type="submit" name="search" id="search-btn" className="btn btn-flat"><i className="fa fa-search"></i>
                                </button>
                            </span>
                        </div>
                    </form>
                    <ul className="sidebar-menu" data-widget="tree">
                        <li className="header">MAIN NAVIGATION</li>
                        
                        <li>
                        <Link to="/list-employee">
                        <i className="fa fa-files-o"></i> <span>Manage Employees</span>
                            <span className="pull-right-container">
                            <small className="label pull-right bg-green">MEm</small>
                            </span>
                        </Link>
                        </li>
                        <li>
                        <Link to="/list-equipment">
                        <i className="fa fa-th"></i> <span>Manage Equipment</span>
                            <span className="pull-right-container">
                            <small className="label pull-right bg-green">MEq</small>
                            </span>
                        </Link>
                        </li>
                       
                        
                        
                    </ul>
                </section>
            </aside> 
        )
    }
}