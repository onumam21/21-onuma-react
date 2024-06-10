import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import Owner from "./components/Owner.jsx";
import Admin from "./components/Admin.jsx";
import User from "./components/User.jsx";
import { useState } from "react";
import Home from "./components/Homsector.jsx";
import AdminSector from "./components/AdminSector.jsx";
import UserSector from "./components/UserSector.jsx";

function App() {
  const [employees, setEmployees] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [position, setPosition] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newEmployee = {
      firstName,
      lastName,
      position,
    };

    setEmployees([...employees, newEmployee]);

    setFirstName("");
    setLastName("");
    setPosition("");
  };

  const deleteEmployee = (index) => {
    const updatedEmployees = [...employees];
    updatedEmployees.splice(index, 1);
    setEmployees(updatedEmployees);
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <NavBar />
          <Home />
        </div>
      ),
    },
    {
      path: "/User",
      element: (
        <div>
          <NavBar />
          <UserSector />
          <User employees={employees} />
        </div>
      ),
    },
    {
      path: "/Admin",
      element: (
        <div>
          <NavBar />
          <AdminSector />
          <Admin
            employees={employees}
            firstName={firstName}
            lastName={lastName}
            position={position}
            handleSubmit={handleSubmit}
            deleteEmployee={deleteEmployee}
            setEmployees={setEmployees}
            setFirstName={setFirstName}
            setLastName={setLastName}
            setPosition={setPosition}
          />
        </div>
      ),
    },
    {
      path: "/owner",
      element: (
        <div>
          <NavBar />
          <Owner />
        </div>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}
export default App;
