import axios from "axios";

const API_BASE = process.env.REACT_APP_API_BASE;

const COURSES_API = "https://kanbas-node-server-app-jy0a.onrender.com/api/courses";
const ASSIGNMENTS_API = "https://kanbas-node-server-app-jy0a.onrender.com/api/modules";

export const updateAssignment = async (assignment: any) => {
    const response = await axios.
      put(`${ASSIGNMENTS_API}/${assignment._id}`, assignment);
    return response.data;
};  

export const deleteAssignment = async (assignmentId: any) => {
  const response = await axios
    .delete(`${ASSIGNMENTS_API}/${assignmentId}`);
  return response.data;
};

export const findAssignmentsForCourse = async (courseId: any) => {
  const response = await axios
    .get(`${COURSES_API}/${courseId}/assignments`);
  return response.data;
};

export const createAssignment = async (courseId: any, assignment: any) => {
    const response = await axios.post(
        `${COURSES_API}/${courseId}/assignments`,
        assignment
    );
    return response.data;
};  
