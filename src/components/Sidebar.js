import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link,  useLocation} from "react-router-dom"

export default function SideBar({LINKS, closeSidebar}) {

    const location = useLocation()

    return(
        <div className="sidebar" onClick={() => closeSidebar()}>
            {LINKS.map((link) => (
                <Link  className={location.pathname === link.path ? "sidebar-link active" : "sidebar-link"} to={link.path} key={link.name}>
                    <FontAwesomeIcon icon={link.icon} /> 
                    {link.name}
                </Link>
            ))}
        </div>
    )
}