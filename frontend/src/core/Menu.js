import React from "react"
import {Link,withRouter} from "react-router-dom"



const currenttab=(history,path)=>{
    if(history.location.pathname === path){
        return {color :"#F9690E"}

    }
    else{
        return{color: "#E29C45"}
    }
}





const Menu= ({history}) => (
    <div>
        <ul className="nav nav-tabs bg-dark">
            <li className="nav-item">
                <Link style={currenttab(history,"/")} className="nav-link" to="/">
                    Home
                </Link>
            </li>
            <li className="nav-item">
                <Link style={currenttab(history,"/cart")} className="nav-link" to="/cart">
                    Cart
                </Link>
            </li>
            <li className="nav-item">
                <Link style={currenttab(history,"/user/dashboard")} className="nav-link" to="/user/dashboard">
                    DashBoard
                </Link>
            </li>
            <li className="nav-item">
                <Link style={currenttab(history,"/admin/dashboard")} className="nav-link" to="/admin/dashboard">
                    A.Dashboard
                </Link>
            </li>
            <li className="nav-item">
                <Link style={currenttab(history,"/signin")} className="nav-link" to="/signin">
                   Sign in
                </Link>
            </li>
            <li className="nav-item">
                <Link style={currenttab(history,"/signup")}className="nav-link" to="/signup">
                   Sign up
                </Link>
            </li>
            <li className="nav-item">
                <Link style={currenttab(history,"/signout")} className="nav-link" to="/signout">
                   Sign out
                </Link>
            </li>
        </ul>
    </div>
)

export default withRouter(Menu);