import { Link, useLocation } from "react-router-dom";
import "./index.css";
import { FaTachometerAlt, FaRegUserCircle, FaBook, FaRegCalendarAlt, FaHistory, FaSignOutAlt } from "react-icons/fa";
import { BiSolidHelpCircle} from "react-icons/bi";
import { BsFillInboxFill } from 'react-icons/bs';
import { PiMonitorPlayBold } from 'react-icons/pi';


function KanbasNavigation() {
  const links = [
    { label: "Account",   icon: <FaRegUserCircle className="wd-icon-account" /> },
    { label: "Dashboard", icon: <FaTachometerAlt className="wd-icon" /> },
    { label: "Courses",   icon: <FaBook className="wd-icon" /> },
    { label: "Calendar",  icon: <FaRegCalendarAlt className="wd-icon" /> },
    { label: "Inbox",  icon: <BsFillInboxFill className="wd-icon" /> },
    { label: "History",  icon: <FaHistory className="wd-icon" /> },
    { label: "Studio",  icon: <PiMonitorPlayBold className="wd-icon" /> },
    { label: "Commons",  icon: <FaSignOutAlt className="wd-icon" /> },
    { label: "Help",  icon: <BiSolidHelpCircle className="wd-icon" /> },
    
  ];

  const { pathname } = useLocation();

  return (
    <div className="wd-kanbas-navigation d-none d-sm-block" style={{width: 80}}>
      <img
        src='https://instructure-uploads.s3.amazonaws.com/account_145230000000000001/attachments/949/NU_MonoLVX_RGB_RW.png'
        alt='Description_of_the_image' width='' height='80' />
      {links.map((link, index) => (
        <li key={index} className={pathname.includes(link.label) ? "wd-active" : ""}>
            <Link to={`/Kanbas/${link.label}`}>
                {link.icon} <br/> {link.label} 
            </Link>
        </li>
      ))}
    </div>
  );
}
export default KanbasNavigation;