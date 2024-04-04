import { useNavigate, useParams, Link } from "react-router-dom";
// import db from "../../../Database";
import "./../index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from "react-redux";
import { addAssignment, selectAssignment, updateAssignment } from "../assignmentReducer";
import { KanbasState } from "../../../store";
import * as client from ".././client";

function AssignmentEditor() {
  const { assignmentId, courseId } = useParams();
  // const assignments = db.assignments;
  // const assignment = assignments.find(
  //   (assignment) => assignment._id === assignmentId);

  const assignment = useSelector((state: KanbasState) => state.assignmentReducer.assignment);
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const handleSave = async () => {
    const status = await client.updateAssignment(assignment);
    if(assignmentId === "new") {
      // const newAssignment = {
      //   ...assignment,
      //   _id: new Date().getTime().toString(),
      // };
      dispatch(addAssignment({...assignment, course: courseId}));
    }
    else {
      dispatch(updateAssignment(assignment));
    }
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };

  return (
    <div style={{margin: '40px'}}>
      
      <div className="wd-grid-col-assignments-edit">
        <div className="wd-flex-grow-1">
            <div className="mb-3">
                <label className="form-label">Assignment Name</label>
                <input className="form-control" 
                  value={assignment?.title}
                  onChange={(e) => dispatch(selectAssignment({...assignment, title: e.target.value}))}/>
            </div>
            <div className="mb-3">
                <textarea className="form-control" rows = {5} 
                  value={assignment?.description}
                  onChange={(e) => dispatch(selectAssignment({...assignment, description: e.target.value}))} />
            </div>
            <br/>

            <div>
                <div className="mb-3 row justify-content-center">
                    <label className="col-sm-2 col-form-label">Points</label>
                    <div className="col-md-6 col-form-item">
                        <input type="text" className="form-control" 
                          value={assignment?.points}
                          onChange={(e) => dispatch(selectAssignment({...assignment, points: e.target.value}))}  />
                    </div>
                </div>
                <br/>
                <div className="mb-3 row justify-content-center">
                  <label className="col-sm-2 col-form-label">Assign</label>
                  <div className="col-md-6 col-form-item" style={{border: '1px'}}>
                    <div style={{border: '1px solid black'}}>
                      <label style={{margin: '10px', marginBottom: '5px'}}>
                          <b>Due</b>
                      </label>
                      <br/>
                      <input className="form-control-c" type="date"
                          style= {{margin: '10px', width: '95%'}}
                          value={assignment?.dueDate}
                          onChange={(e) => dispatch(selectAssignment({...assignment, dueDate: e.target.value}))} />
                      <br/>
                      <label style={{width: '49%', marginLeft:'10px', marginBottom: '1px'}}>
                          <b>Available From</b>
                      </label>
                      <label>
                          <b>Until</b>
                      </label>
                      <br/>
                      <input
                          className="form-control-c"
                          type="date"
                          style= {{margin: '10px', width:'45%'}}
                          value={assignment?.availableFromDate}
                          onChange={(e) => dispatch(selectAssignment({...assignment, availableFromDate: e.target.value}))} />
                      <input
                          className="form-control-c"
                          type="date"
                          style= {{margin: '10px', width: '45%'}}
                          value={assignment?.availableUntilDate}
                          onChange={(e) => dispatch(selectAssignment({...assignment, availableUntilDate: e.target.value}))} />
                    </div>
                  </div>
                </div>
                <hr/>
                <div>
                  <button className="btn btn-success float-end" onClick={handleSave}>
                    Save
                  </button>
                  <Link to={`/Kanbas/Courses/${courseId}/Assignments`} style={{color: 'black'}}
                    className="btn btn-danger float-end">
                    Cancel
                  </Link>
                </div>
            </div>
        </div>
        
      </div> 
    </div>
      
  );}
export default AssignmentEditor;

