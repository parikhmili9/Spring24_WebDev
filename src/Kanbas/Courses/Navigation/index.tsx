import { Link, useLocation } from "react-router-dom";
import "./index.css"; // feel free to use the CSS from previous assignments
function CourseNavigation() {
  const links = ["Home", 
                "Modules",
                "Zoom Meetings",
                "Assignments",
                "Quizzes", 
                "Grades",
                "People",
                "Discussions",
                "Piazza",
                "Settings" 
                ];
  const { pathname } = useLocation();
  return (
    <div className="d-none d-md-block">
      <ul className="wd-navigation overflow-y-scoll position-fixed">
        {links.map((link, index) => (
          <li key={index} className={pathname.includes(link) ? "wd-active" : ""}>
            <Link to={link}>{link}</Link>
          </li>
        ))}
      </ul>
    </div>
    
  );
}
export default CourseNavigation;