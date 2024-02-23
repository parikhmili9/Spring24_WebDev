import React from "react";
import { FaCheckCircle, FaEllipsisV, FaPlusCircle } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import { HiPlusSm } from "react-icons/hi";
function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const assignmentList = assignments.filter(
    (assignment) => assignment.course === courseId);
  return (
    <div>
      <div className="wd-new-container" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <input type="text" placeholder="Search for Assignments" style={{marginRight: '10px', height: '40px'}}>
        </input>
        <div style={{display: 'flex', alignItems: 'center'}}>
          <button className="button">
            <i className="fa fa-plus" aria-hidden="true" style={{marginRight: '5px'}}/>
            <HiPlusSm style={{color: 'black', marginBottom: '4px'}}/>
            Group
          </button>
          <button style={{backgroundColor: 'red', color: 'white', marginLeft: '10px'}}>
            <i className="fa fa-plus" aria-hidden="true" style={{marginRight: '5px'}}/>
            <HiPlusSm style={{color: 'white', marginBottom: '4px'}}/>
            Assigment
          </button>
          <button className="btn" style={{marginLeft: '10px'}}>
            <FaEllipsisV/>
          </button>
        </div>
      </div>

      <hr></hr>
      
      <ul className="list-group wd-modules" style={{margin: '8px'}}>
        <li className="list-group-item">
          <div>
            <FaEllipsisV className="me-2" /> ASSIGNMENTS
            <span className="float-end">
              <FaCheckCircle className="text-success" />
              <FaPlusCircle className="ms-2" /><FaEllipsisV className="ms-2" />
            </span>
          </div>
          <ul className="list-group" style={{margin: '8px'}}>
            {assignmentList.map((assignment) => (
              <li className="list-group-item">
                <FaEllipsisV className="me-2" />
                <Link to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}>
                  {assignment.title}
                </Link>
                <span className="float-end">
                  <FaCheckCircle className="text-success" /><FaEllipsisV className="ms-2" /></span>
              </li>))}
          </ul>
        </li>
      </ul>
    </div>
);}
export default Assignments;