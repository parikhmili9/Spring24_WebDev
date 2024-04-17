import Signin from "../Users/signin";
import Profile from "../Users/profile";
import UserTable from "../Users/table";
import { Routes, Route, Navigate } from "react-router-dom";
import Signup from "../Users/signup";

export default function Account() {
  return (
    <div className="container-fluid">
      <Routes>
        <Route path="/" element={<Navigate to="/Kanbas/Account/Signin" />} />
        <Route path="/Signup" element={<Signup/>}/>
        <Route path="/Admin/Users" element={<UserTable />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

