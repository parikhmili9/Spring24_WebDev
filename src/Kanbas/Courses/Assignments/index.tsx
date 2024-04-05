import { FaCheckCircle, FaEllipsisV, FaPlusCircle } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { HiPlusSm } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { addAssignment, deleteAssignment, selectAssignment, setAssignments } from "./assignmentReducer";
import { KanbasState } from "../../store";
import { useEffect } from "react";
import * as client from "./client";

function Assignments() {
  const { courseId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    client.findAssignmentsForCourse(courseId)
      .then((assignments) =>
        dispatch(setAssignments(assignments))
    );
  }, [courseId, dispatch]);   

  const handleAddAssignment = () => {
    client.createAssignment(courseId, assignmentUp).then((assignment) => {
        dispatch(addAssignment(assignment));
    });
  };

  const handleDeleteAssignment = (assignmentId: string) => {
    client.deleteAssignment(assignmentId).then((status) => {
      dispatch(deleteAssignment(assignmentId));
    });
  };


  // const assignments = db.assignments;
  // const assignmentList = assignments.filter((assignment) => assignment.course === courseId);
  const assignmentList = useSelector((state: KanbasState) => state.assignmentReducer.assignments);
  const assignmentUp = useSelector((state: KanbasState) => state.assignmentReducer.assignment);

  const newAssignment = {
    title: "New Title",
    description: "New Description",
    points: "100",
    dueDate: "2024-03-21",
    availableFromDate: "2024-02-21",
    availableUntilDate: "2024-03-30",
  }
  
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
            <Link key={new Date().getTime().toString()}
              to={`/Kanbas/Courses/${courseId}/Assignments/new`}
              className="list-group-item"
              style={{display: "block", width: "100%"}}
              onClick={handleAddAssignment}>
              {/* onClick={() => dispatch(addAssignment({...assignment, course: courseId}))}>  */}
                <HiPlusSm style={{color: 'white', marginBottom: '4px'}}/>
                Assigment
              </Link>
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
            {/* If there are no assignments in database */}
            {
              assignmentList.length === 0 ? (
                <div className="list-group-item">
                  <span className="text-muted">No assignments</span>
                </div>
              ) : null
            }

            {/* Displaying list of assignments from database */}
            {assignmentList.filter((assignment) => assignment.course === courseId)
            .map((assignment, index) => (
              <li key={index} className="list-group-item">
                <FaEllipsisV className="me-2" />
                <Link key={assignment._id} to={`/Kanbas/Courses/${courseId}/Assignments/${assignmentUp._id}`}
                  onClick={() => dispatch(selectAssignment(assignment))}>
                  <span>{assignment.title}</span>
                </Link>
                <span className="float-end" style={{alignItems: 'center'}}>
                  <FaCheckCircle className="text-success" />
                  <FaEllipsisV className="ms-2" />
                  <button className="btn btn-danger"
                    onClick={(e) => {
                      e.preventDefault();
                      const confirmDelete = window.confirm("Are you sure?");
                      if(confirmDelete){
                        handleDeleteAssignment(assignment._id);
                      }
                    }}>
                    Delete
                  </button>
                </span>
                <br/>
                <span style={{marginLeft: '30px'}}>
                  {assignment.description} | Due: {assignment.dueDate} | Points: {assignment.points}
                </span>
              </li>))}
          </ul>
        </li>
      </ul>
    </div>
);}
export default Assignments;