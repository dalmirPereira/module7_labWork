//--------------- Module 7 - Lab Work Ex4 ----------------------

import { useNavigate, Outlet } from "react-router-dom";
import Navbar from '../components/Navbar.jsx'

export default function DashboardPage() {
  
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />
      <h1>Dashboard</h1>
      <Outlet /> 
        <button onClick={() => navigate("/dash/exercise1")}>Exercise 1</button>
        <button onClick={() => navigate("/dash/exercise2")}>Exercise 2</button>
        <button onClick={() => navigate("/dash/exercise3")}>Exercise 3</button>
        <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
}
