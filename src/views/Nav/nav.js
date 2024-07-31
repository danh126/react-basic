import React from "react";
import {
    Link, NavLink
} from "react-router-dom";

/**
 * Link: sử dụng để không reload lại trang web
 * 
 */
class Nav extends React.Component {
    render() {
        return (
            <div className="topnav">
                {/* <Link to="/">Home</Link>
                <Link to="/todo">Todos</Link>
                <Link to="/about">About</Link> */}
                <NavLink to="/" exact activeClassName="active">
                    Home
                </NavLink>
                <NavLink to="/todo" activeClassName="active">
                    Todos
                </NavLink>
                <NavLink to="/about" activeClassName="active">
                    About
                </NavLink>
                <NavLink to="/users" activeClassName="active">
                    Users
                </NavLink>
            </div>
        )
    }
}
export default Nav;