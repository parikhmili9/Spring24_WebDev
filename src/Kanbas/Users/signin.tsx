import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { User } from "./client";
import * as client from "./client";
export default function Signin() {
  const [credentials, setCredentials] = useState<User>({ _id: "",
    username: "", password: "", firstName: "", lastName: "", role: "USER"
  });
  const navigate = useNavigate();

  const signin = async () => {
    try{
      await client.signin(credentials);
      navigate("/Kanbas/Account/Profile");
    } catch(error){
      console.error("Network Error:", error);
      alert("Failed to sign in. Please try again.")
    }
    
  };

  return (
    <div>
      <h1>Signin</h1>
      <input value={credentials.username} onChange={(e) =>
        setCredentials({ ...credentials, username: e.target.value })}/>
      <input value={credentials.password} onChange={(e) =>
        setCredentials({ ...credentials, password: e.target.value })}/>
      <button onClick={signin}> Signin </button>

      <br/>
      <br/>
      <p>If you don't have an account then please signup first.</p>
      <button>
        <Link to="/Kanbas/Account/Signup">Sign Up</Link>
      </button>
    </div>
  );
}

