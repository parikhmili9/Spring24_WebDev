import { Navigate, Route, Routes, useParams} from "react-router-dom";
import CourseNavigation from "./Navigation";
import Breadcrumb from "./breadcrumb";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import Grades from "./Grades";
import { useState, useEffect } from "react";
import axios from "axios";

function Courses() {
  const { courseId } = useParams();
  const COURSES_API = "http://localhost:4000/api/courses";
  const [course, setCourse] = useState<any>({ _id: "" });
  const findCourseById = async (courseId?: string) => {
    const response = await axios.get(
      `${COURSES_API}/${courseId}`
    );
    setCourse(response.data);
  };
  useEffect(() => {
    findCourseById(courseId);
  }, [courseId]);

  // const {pathname} = useLocation();
  // const course = db.courses.find((course) => course._id === courseId);

  // const { courseId } = useParams();
  // const course = courses.find((course) => course._id === courseId);

  return (
    <div>
      <div>
        <Breadcrumb />
      </div>
      <CourseNavigation />
      <div>
        <div
          className="overflow-y-scroll position-fixed bottom-0 end-0"
          style={{ left: "250px", top: "80px" }} >
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home/>} />
            <Route path="Modules" element={<Modules/>} />
            <Route path="Piazza" element={<h1>Piazza</h1>} />
            <Route path="Assignments" element={<Assignments/>} />
            <Route path="Assignments/:assignmentId" element={<AssignmentEditor/>}/>
            <Route path="Grades" element={<Grades/>} />
            <Route path="Quizzes" element={<h1>Quizzez</h1>} />
          </Routes>
        </div>
      </div>

    </div>
  );
}
export default Courses;

