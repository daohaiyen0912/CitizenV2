import React from 'react';
import ReactDOM from 'react-dom';
import {Routes, Route} from 'react-router-dom';

import TongQuan from './menu/TongQuan.js';

function Bar() {
    return (
    <div id='bar'>
        <img src="img/CitizenVbar2.png"></img>
    </div>
    )
}

//
function SideBar() {
    return (
        <div>
            <nav id="sidebar">
                <div id="account">
                    <img></img>
                    <h2>Cán bộ A1</h2>
                    <h3>Tổng cục dân số</h3>
                </div>
                <ul>
                    <li>
                        <a href="/">Tổng quan</a>
                    </li>
                    <li>
                        <a href="/A2">Quản lí tài khoản A2</a>
                    </li>
                    <li>
                        <a href="/Tinh">Quản lí mã tỉnh</a>
                    </li>
                    <li>
                        <a href="/DS">Quản lí dân số</a>
                    </li>
                </ul>
                <div id="control">
                    <h2>Holy shit</h2>
                </div>
            </nav>
        </div>
    )
}

function QuanLi() {
    return (
        <>
        <Bar />
        <SideBar />
        </>
    )
}

ReactDOM.render(<QuanLi />, document.getElementById('root'));

export default QuanLi;