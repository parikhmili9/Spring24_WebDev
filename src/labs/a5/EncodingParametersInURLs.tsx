import React, { useState, useEffect } from "react";
import axios from "axios";

function EncodingParametersInURLs() {
  const [a, setA] = useState(30);
  const [b, setB] = useState(5);

  const handleInputChangeA = (e: React.ChangeEvent<HTMLInputElement>) => {
    setA(parseInt(e.target.value));
  };

  const handleInputChangeB = (e: React.ChangeEvent<HTMLInputElement>) => {
    setB(parseInt(e.target.value));
  };

  const [welcome, setWelcome] = useState("");

  const fetchWelcome = async () => {
    const response = await axios.get("http://localhost:4000/a5/welcome");
    setWelcome(response.data);
  };
  useEffect(() => {
    fetchWelcome();
  }, []);

  const [result, setResult] = useState(0);

  const fetchSum = async (a: number, b: number) => {
    const response = await
      axios.get(`http://localhost:4000/a5/add/${a}/${b}`);
    setResult(response.data);
  };
  
  const fetchSubtraction = async (a: number, b: number) => {
    const response = await axios.get(
      `http://localhost:4000/a5/subtract/${a}/${b}`);
    setResult(response.data);
  };


  return (
    <div>
      <h3>Encoding Parameters In URLs</h3>

      <h4>Integrating React with APIs</h4>
      <h5>Fetching Welcome</h5>
      <h6>{welcome}</h6>

      <h4>Calculator</h4>
      <input type="number" value={a}
        onChange={handleInputChangeA}/>
      <input type="number"
        onChange={handleInputChangeB} value={b}/>

      <input value={result} type="number" readOnly />
      <h3>Fetch Result</h3>
      <button onClick={() => fetchSum(a, b)} >
        Fetch Sum of {a} + {b}
      </button>
      <button onClick={() => fetchSubtraction(a, b)} >
        Fetch Substraction of {a} - {b}
      </button>
      
      <h3>Path Parameters</h3>
      <button className="btn btn-primary">
        <a href={`http://localhost:4000/a5/add/${a}/${b}`} style={{ textDecoration: "none", color: "black" }}>
          Add {a} + {b}
        </a>
      </button>
      <span>  </span>
      <button className="btn btn-danger">
        <a href={`http://localhost:4000/a5/subtract/${a}/${b}`} style={{ textDecoration: "none", color: "black" }}>
          Substract {a} - {b}
        </a>
      </button>
      <span>  </span>
      <button className="btn btn-primary">
        <a href={`http://localhost:4000/a5/multiply/${a}/${b}`} style={{ textDecoration: "none", color: "black" }}>
          Multiply {a} * {b}
        </a>
      </button>
      <span>  </span>
      <button className="btn btn-danger">
        <a href={`http://localhost:4000/a5/divide/${a}/${b}`} style={{ textDecoration: "none", color: "black" }}>
          Divide {a} / {b}
        </a>
      </button>

      <h3>Query Parameters</h3>
      <a className="btn btn-primary"
        href={`http://localhost:4000/a5/calculator?operation=add&a=${a}&b=${b}`}>
        Add {a} + {b}
      </a>
      <span>  </span>
      <a className="btn btn-danger"
        href={`http://localhost:4000/a5/calculator?operation=subtract&a=${a}&b=${b}`}>
        Substract {a} - {b}
      </a>
      <span>  </span>
      <a className="btn btn-primary"
        href={`http://localhost:4000/a5/calculator?operation=multiply&a=${a}&b=${b}`}>
        Multiply {a} * {b}
      </a>
      <span>  </span>
      <a className="btn btn-danger"
        href={`http://localhost:4000/a5/calculator?operation=divide&a=${a}&b=${b}`}>
        Divide {a} / {b}
      </a>
     
    </div>
  );
}
export default EncodingParametersInURLs;

