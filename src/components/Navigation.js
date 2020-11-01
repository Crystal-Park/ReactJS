import React from 'react';
//href로 링크를 걸면 리액트 페이지가 죽고 새로고침 되어버림.'
//Link를 쓰면 페이지를 죽이지 않고 빠르게 동작한다.
import { Link } from "react-router-dom"; 
import "./Navigation.css";

function Navigation() {
    return(
        <div className="nav">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </div>
    );
}

export default Navigation;