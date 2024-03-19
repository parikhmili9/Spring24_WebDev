import React, { useState } from "react";
function ArrayStateVariable() {
    // declare array state event handler appends random number at end of
    // array event handler removes element by index
    const [array, setArray] = useState([1, 2, 3, 4, 5]);
    const addElement = () => {
    setArray([...array, Math.floor(Math.random() * 100)]);
    };
    const deleteElement = (index: number) => {
    setArray(array.filter((item, i) => i !== index));
    };
    return (
    <div>
        <h2>Array State Variable</h2>
        {/* button calls addElement to append to array iterate over array items */}
        <button onClick={addElement}>Add Element</button>
        <ul>
        {array.map((item, index) => (
            <li key={index}>
            {item}
            {/* render item's value button to delete element by its index */}
            <button onClick={() => deleteElement(index)}>
                Delete</button>
            </li>
        ))}
        </ul>
    </div>
    );
}
export default ArrayStateVariable;

