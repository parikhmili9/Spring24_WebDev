import "./index.css";
import db from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { addModule, deleteModule, updateModule, setModule,} from "./moduleReducer";
import { KanbasState } from "../../store";

function ModuleList() {
    const { courseId } = useParams();

    //Redux
    const moduleList = useSelector((state: KanbasState) => 
        state.modulesReducer.modules);
    const module = useSelector((state: KanbasState) => 
        state.modulesReducer.module);
    const dispatch = useDispatch();

    //Getting modules from database
    const modules = db.modules;


    // const modulesList = modules.filter((module) => module.course === courseId);
    // const [moduleList, setModuleList] = useState<any[]>(modules);
    // const [selectedModule, setSelectedModule] = useState(modulesList[0]);

    // const [module, setModule] = useState({
    //     _id: new Date().getTime().toString(),
    //     name: "New Module",
    //     description: "New Description",
    //     course: courseId,
    // });

    // const addModule = (module: any) => {
    //     const newModule = { ...module,
    //       _id: new Date().getTime().toString() };
    //     const newModuleList = [newModule, ...moduleList];
    //     setModuleList(newModuleList);
    // };

    // const deleteModule = (moduleId: string) => {
    //     const newModuleList = moduleList.filter(
    //       (module) => module._id !== moduleId );
    //     setModuleList(newModuleList);
    // };
    
    // const updateModule = (module: any) => {
    //     const newModuleList = moduleList.map((m) => {
    //       if (m._id === module._id) {
    //         return module;
    //       } else {
    //         return m;
    //       }
    //     });
    //     setModuleList(newModuleList);
    // };
    
    
    
    return (
    <div>
        <div className="wd-new-container">
            <button className='btn'>Collapse All</button>
            <button className='btn'>View Progress</button>
            <div className='dropdown'>
                <button className='btn btn-secondary dropdown-toggle' type='button' data-bs-toggle='dropdown' aria-expanded='false'>
                    <i className='fa fa-check-circle' aria-hidden='true' style={{marginRight: 4, color:'green'}}/>
                    <FaCheckCircle style={{fontSize: '15px', color:'green', marginBottom: '4px'}}/>
                    Publish All
                </button>
                <ul className='dropdown-menu'>
                    <li>
                        <a className='dropdown-item' href="#top">
                            Action
                        </a>
                        <a className='dropdown-item' href="#top">
                            Another Action
                        </a>
                        <a className='dropdown-item' href="#top">
                            One more Action
                        </a>
                    </li>
                </ul>
            </div>
            <button style={{ backgroundColor: 'red', color: 'white' }}
                onClick={() => dispatch(addModule({ ...module, course: courseId }))}>
                <i className='fa fa-plus 'aria-hidden='true' style={{ marginRight: 5 }} />
                <FaPlusCircle style={{color: 'white', marginBottom: '4px' }} />
                Module
            </button>
            <button className='btn'>
                <FaEllipsisV />
            </button>
        </div>

        <hr></hr>

        <div className="list-group-item" style={{margin: '40px'}}>
            <div style={{ width: '100%'}}>
                <label style={{paddingRight: '20px'}}>Module Name:</label>
                <input value={module.name} 
                    style={{flex: '0.50', marginRight: '10px',padding: '5px',
                    border: '1px solid #ccc'}} 
                    onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))}
                />
                <br/>
                <br/>
                <label style={{paddingRight: '20px'}}>Module Description: </label>
                <textarea value={module.description} 
                    style={{flex: '0.50', marginRight: '10px', width: '50%', padding: '5px', border: '1px solid #ccc' }} rows={1}
                    onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))}
                />
                <br/>
                <br/>
                <div style={{ display: 'flex' }}>
                    <button className="btn btn-success"  
                        onClick={() => dispatch(addModule({ ...module, course: courseId }))}>
                        Add
                    </button>
                    <button className="btn btn-warning"
                        onClick={() => dispatch(updateModule(module))}>
                        Update
                    </button>
                </div>
            </div>
        </div>
        <div style={{margin: '20px'}}>
            <ul className='list-group wd-modules' style={{margin: '8px'}}>
                

            {   moduleList.filter((module) => module.course === courseId)
                .map((module, index) => (
                <li key={index} className='list-group-item'>
                    <div>
                        <FaEllipsisV className="me-2" />
                        {module.name}
                        <span className="float-end">
                            <FaCheckCircle className="text-success" />
                            {/* <FaPlusCircle className="ms-2" />
                            <FaEllipsisV className="ms-2" /> */}
                            <button className="btn btn-warning"
                                onClick={() => dispatch(setModule(module))}>
                                Edit
                            </button>
                            <button className="btn btn-danger"
                                onClick={() => dispatch(deleteModule(module._id))}>
                                Delete
                            </button>
                        </span>
                        <p style={{fontSize: 'small', marginLeft: '20px'}}>{module.description}</p>
                    </div>
                    {module.lessons && (
                        <ul className="list-group" style={{margin: '8px'}}>
                            {module.lessons?.map((lesson: any, index: number) => (
                                <li className="list-group-item" key={index}>
                                <FaEllipsisV className="me-2" />
                                {lesson.name}
                                <span className="float-end">
                                    <FaCheckCircle className="text-success" />
                                    <FaEllipsisV className="ms-2" />
                                </span>
                                </li>
                            ))}
                        </ul>
                    )}
                </li>
                ))}
            </ul>
        </div>

        
    </div>
    );
}
export default ModuleList;