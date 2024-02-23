import React, { useState } from "react";
import "./index.css";
import db from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";


function ModuleList() {
    const { courseId } = useParams();
    const modules = db.modules;
    const modulesList = modules.filter((module) => module.course === courseId);
    const [selectedModule, setSelectedModule] = useState(modulesList[0]);
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
            <button style={{ backgroundColor: 'red', color: 'white' }}>
                <i className='fa fa-plus 'aria-hidden='true' style={{ marginRight: 5 }} />
                <FaPlusCircle style={{color: 'white', marginBottom: '4px' }} />
                Module
            </button>
            <button className='btn'>
                <FaEllipsisV />
            </button>
        </div>

        <hr></hr>

        <div style={{margin: '20px'}}>
            <ul className='list-group wd-modules' style={{margin: '8px'}}>
            {   modulesList.map((module, index) => (
                <li key={index} className='list-group-item' onClick={() => setSelectedModule(module)}>
                    <div>
                        <FaEllipsisV className="me-2" />
                        {module.name}
                        <span className="float-end">
                            <FaCheckCircle className="text-success" />
                            <FaPlusCircle className="ms-2" />
                            <FaEllipsisV className="ms-2" />
                        </span>
                    </div>
                    {selectedModule._id === module._id && (
                        <ul className="list-group" style={{margin: '8px'}}>
                            {module.lessons?.map((lesson, index) => (
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