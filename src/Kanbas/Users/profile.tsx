import * as client from "./client";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Profile() {
    const [profile, setProfile] = useState({ username: "", password: "", 
        firstName: "", lastName: "", dob: "", email: "", role: "USER" });
    const navigate = useNavigate();

    const fetchProfile = async () => {
        const account = await client.profile();
        setProfile(account);
        console.log(profile);
    };

    const save = async () => {
        await client.updateUser(profile);
    };

    const signout = async () => {
        await client.signout();
        navigate("/Kanbas/Account/Signin");
    };    
    
    useEffect(() => {
        fetchProfile();
    }, []);
    return (
    <div>
        <h1>Profile</h1>
        <Link to="/Kanbas/Account/Admin/Users"
            className="btn btn-warning w-100"
            style={{width: "30%"}}>
            Users
        </Link>

        {profile && (
        <div style={{width: "50%"}}>
            <label>Username</label>
            <input value={profile.username} onChange={(e) =>
                setProfile({ ...profile, username: e.target.value })}/>
            <br/>
            <br/>
            <label>Password</label>
            <input value={profile.password} onChange={(e) =>
                setProfile({ ...profile, password: e.target.value })}/>
            <br/>
            <br/>
            <label>First Name</label>
            <input value={profile.firstName} onChange={(e) =>
                setProfile({ ...profile, firstName: e.target.value })}/>
            <br/>
            <br/>
            <label>Last Name</label>
            <input value={profile.lastName} onChange={(e) =>
                setProfile({ ...profile, lastName: e.target.value })}/>
            <br/>
            <br/>
            <label>Date of Birth</label>
            <input value={profile.dob} type="date" onChange={(e) =>
                setProfile({ ...profile, dob: e.target.value })}/>
            <br/>
            <br/>
            <label>Email ID</label>
            <input value={profile.email} onChange={(e) =>
                setProfile({ ...profile, email: e.target.value })}/>
            <br/>
            <br/>
            <label>Account Type</label>
            <select onChange={(e) =>
                setProfile({ ...profile, role: e.target.value })}>
                <option value="USER">User</option>
                <option value="ADMIN">Admin</option>
                <option value="FACULTY">Faculty</option>
                <option value="STUDENT">Student</option>
            </select>
            <br/>
            <br/>
            <button className="btn btn-success" onClick={save}>
                Save
            </button>
            <br/>
            <br/>
            <button className="btn btn-danger" onClick={signout}>
                Signout
            </button>

            <br/>
            <br/>
        </div>
    )}
    </div>
    );
}

