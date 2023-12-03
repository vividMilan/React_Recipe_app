import { useState } from "react"
import SideBar from "./Sidebar"
import {faHome, faList, faCog} from '@fortawesome/free-solid-svg-icons'
import { Link, useLocation } from "react-router-dom"

export default function Navbar() {

    const location = useLocation()

    const [showSidebar, setShowSidebar] = useState(false)

    const LINKS = [
        {
            name: "Home",
            path: '/',
            icon: faHome
        },
        {
            name: "Recipies",
            path: '/recipies',
            icon: faList
        },
        {
            name: "Settings",
            path: '/settings',
            icon: faCog
        }
    ]

    function closeSidebar() {
        setShowSidebar(false)
    }

    return (
        <>
            <div className="navbar container">
                <Link to="/" className="logo">F<span>oo</span>desHub</Link>
                <div className="nav-links">
                    {LINKS.map((link) => (
                        <Link className={location.pathname === link.path ? "active" : ''} to = {link.path} key={link.name}>{link.name}</Link>
                    ))}
                </div>
                <div onClick={() => setShowSidebar(!showSidebar)} className={showSidebar ? "sidebar-btn active" : "sidebar-btn"}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            </div>
            {showSidebar && 
                <SideBar 
                    LINKS ={LINKS}
                    closeSidebar = {closeSidebar}
                />
            }
            
        </>
    )
}