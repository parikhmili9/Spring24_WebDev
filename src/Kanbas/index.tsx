import { Routes, Route, Navigate } from "react-router-dom";
import KanbasNavigation from "./Navigation";
import Dashboard from "./Dashboard";
import Courses from "./Courses";

function Kanbas() {
    return(
      <div className="d-flex">
         <div>
            <KanbasNavigation />
         </div>
         <div>
            <Routes>
               <Route path="/" element={<Navigate to="Dashboard" />} /> {/* Dashboard is the default screen */}
               <Route path="Account" element={<h1>Account</h1>} />
               <Route path="Dashboard" element={<Dashboard />} />
               <Route path="Courses/:courseId/*" element={<Courses />} />
            </Routes>
         </div>
         

      </div>
   );
} 
 export default Kanbas
 