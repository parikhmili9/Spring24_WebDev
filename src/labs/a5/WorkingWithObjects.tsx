import React, { useEffect, useState } from "react";
import axios from "axios";

function WorkingWithObjects() {

  const [assignment, setAssignment] = useState({
    id: 1, title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10", completed: false, score: 0,
  });

  const [module, setModule] = useState({
    id: 1, name: "NodeJS Module",
    description: "Practicing on my own",
    course: "RS101",
  });

  const ASSIGNMENT_URL = "https://kanbas-node-server-app-jy0a.onrender.com/a5/assignment";
  const MODULE_URL = "https://kanbas-node-server-app-jy0a.onrender.com/a5/module";
  const RENDER_SERVER_URL = "https://kanbas-node-server-app-jy0a.onrender.com";

  const fetchAssignment = async () => {
    const response = await axios.get(`${ASSIGNMENT_URL}`);
    setAssignment(response.data);
  };
  const updateTitle = async () => {
    const response = await axios
      .get(`${ASSIGNMENT_URL}/title/${assignment.title}`);
    setAssignment(response.data);
  };
  useEffect(() => {
    fetchAssignment();
  }, []);

  return (
    <div>
      <h3>Working With Objects</h3>
      <h4>Retrieving Objects</h4>
      <a className="btn btn-primary" href="https://kanbas-node-server-app-jy0a.onrender.com/a5/assignment">
        Get Assignment
      </a>
      <span>  </span>
      <a className="btn btn-primary" href="https://kanbas-node-server-app-jy0a.onrender.com/a5/module">
        Get Module
      </a>

      <h4>Retrieving Properties</h4>
      <a className="btn btn-primary" href="https://kanbas-node-server-app-jy0a.onrender.com/a5/assignment/title">
        Get Assignment Title
      </a>
      <span>  </span>
      <a className="btn btn-primary" href="https://kanbas-node-server-app-jy0a.onrender.com/a5/module/name">
        Get Module Name
      </a>

      <h4>Modifying Properties</h4>
      <a className="btn btn-primary" href={`${ASSIGNMENT_URL}/title/${assignment.title}`}>
        Update Assignment Title
      </a>
      <span>  </span>
      <input type="text" 
        onChange={(e) => setAssignment({ ...assignment,
            title: e.target.value })}
        value={assignment.title}/>
      <br/>
      <br/>
      <a className="btn btn-primary" href={`${ASSIGNMENT_URL}/score/${assignment.score}`}>
        Update Assignment Score
      </a>
      <span>  </span>
      <input type="number" 
        onChange={(e) => setAssignment({ ...assignment,
            score: e.target.valueAsNumber })}
        value={assignment.score}/>
      <br/>
      <br/>

      <a className="btn btn-primary" href={`${ASSIGNMENT_URL}/completed/${assignment.completed}`}>
        Assignment completed
      </a>
      <span>  </span>
      <span>  </span>
      <input type="checkbox" style={{fontSize: 'larger'}}
        onChange={(e) => setAssignment({ ...assignment,
            completed: e.target.checked })}
        checked={assignment.completed}/>
      <br/>
      <br/>

      <a className="btn btn-primary" href={`${MODULE_URL}/name/${module.name}`}>
        Update Module Name
      </a>
      <span>  </span>
      <input type="text" 
        onChange={(e) => setModule({ ...module,
            name: e.target.value })}
        value={module.name}/>
      <br/>
      <br/>

      <a className="btn btn-primary" href={`${MODULE_URL}/description/${module.description}`}>
        Update Module Description
      </a>
      <span>  </span>
      <textarea
        onChange={(e) => setModule({ ...module,
            description: e.target.value })}
        value={module.description}/>

      <h3>Modifying Properties</h3>
      <input onChange={(e) => setAssignment({
            ...assignment, title: e.target.value })}
        value={assignment.title} type="text" />
      <br/>
      <button onClick={updateTitle} >
        Update Title to: {assignment.title}
      </button>
      <br/>
      <button onClick={fetchAssignment} >
        Fetch Assignment
      </button>



    </div>
  );
}
export default WorkingWithObjects;

