import { BrowserRouter, Route, Routes } from "react-router-dom";

import Contact from "./components/Contact";
import Home from "./components/Home";

import Layout from "./components/Layout";
import Places from "./components/Places";
import RegisterForm from "./components/RegisterForm";
import Professional from "./components/professional";
import Addprofessional from "./components/Addprofessional";
import Remove from "./components/Remove";
import Login from "./components/Login";
import SignUp from "./components/Signup";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/Home" element={<Home />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Places" element={<Places />} />
            <Route path="/RegisterForm" element={<RegisterForm />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Signup" element={<SignUp />} />
            <Route path="/Professional" element={<Professional />} />
            <Route path="/Addprofessional" element={<Addprofessional />} />
            <Route path="/Remove" element={<Remove />} />


          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
