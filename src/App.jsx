 import {Toaster} from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";

import LoginLanding from "./pages/LoginLanding"; 
import LoginForm from "./components/LoginForm";
import Dashboard from "./pages/Dashboard";
import Employees from "./pages/Employees";
import Settings from "./pages/Settings";

const App = () => {
  return (
    <>
   <Toaster />
   <Routes>
    <Route  path= "/login" element={<LoginLanding />} />
    <Route path= "/login/admin" element={<LoginForm  role="admin" title ="Admin Portal" subtitle="Login to access"/>} />
    <Route path= "/login/employee" element={<LoginForm  role="employee" title ="Employee Portal" subtitle="Login to access"/>} />
    
    <Route element={<Layout />} >
    <Route path= "/Dashboard" element={<Dashboard />} />
   <Route path= "/Employees" element={<Employees />} />
   <Route path= "/Settings" element={<Settings />} /> 
   </Route>
   </Routes>
  
    </>
  )
}

export default App

