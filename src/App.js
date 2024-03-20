import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from "./website/Pages/Home";
import About from "./website/Pages/About";
import Jewellery from "./website/Pages/Jewellery";
import Contact from "./website/Pages/Contact";
import Services from "./website/Pages/Services";
import Login from "./website/Pages/Login";
import Signup from "./website/Pages/Signup";





import Add_categories from "./admin/Pages/Add_categories";
import Add_employee from "./admin/Pages/Add_employee";
import Add_services from "./admin/Pages/Add_services";
import Header1 from "./admin/Components/Header1";
import Footer1 from "./admin/Components/Footer1";
import Dashboard from "./admin/Pages/Dashboard";
import Manage_categories from "./admin/Pages/Manage_categories";
import Manage_contact from "./admin/Pages/Manage_contact";
import Manage_employee from "./admin/Pages/Manage_employee";
import Manage_feedback from "./admin/Pages/Manage_feedback";
import Manage_services from "./admin/Pages/Manage_services";
import Manage_user from "./admin/Pages/Manage_user";
import Admin_Login from "./admin/Pages/Admin_Login";
import Admin_Signup from "./admin/Pages/Admin_Signup";
import PNF from "./website/Pages/PNF";
import Profile from "./website/Pages/Profile";

// import Add_contact from "./admin/Pages/Add_contact";

function App() {
  return (
    <BrowserRouter>
    <ToastContainer></ToastContainer>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/jewellery" element={<Jewellery />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/pnf" element={<PNF />}></Route>



        {/* admin */}
       
        <Route path="/add_categories" element={<><Header1 /><Add_categories /><Footer1 /></>}></Route>
        <Route path="/add_employee" element={<><Header1 /><Add_employee /><Footer1 /></>}></Route>
        <Route path="/add_services" element={<><Header1 /><Add_services /><Footer1 /></>}></Route>
        {/* <Route path="/add_contact" element={<><Header1 /><Add_contact /><Footer1 /></>}></Route> */}
        <Route path="/dashboard" element={<><Header1 /><Dashboard /><Footer1 /></>}></Route>
        <Route path="/manage_categories" element={<><Header1 /><Manage_categories /><Footer1 /></>}></Route>
        <Route path="/manage_contact" element={<><Header1 /><Manage_contact /><Footer1 /></>}></Route>
        <Route path="/manage_employee" element={<><Header1 /><Manage_employee /><Footer1 /></>}></Route>
        <Route path="/manage_feedback" element={<><Header1 /><Manage_feedback /><Footer1 /></>}></Route>
        <Route path="/manage_services" element={<><Header1 /><Manage_services /><Footer1 /></>}></Route>
        <Route path="/manage_user" element={<><Header1 /><Manage_user /><Footer1 /></>}></Route>
        <Route path="/admin_Login" element={<><Header1/><Admin_Login /><Footer1/></>}></Route>
        <Route path="/admin_Signup" element={<><Header1/><Admin_Signup /><Footer1/></>}></Route>


      </Routes>
    </BrowserRouter>
  );
}

export default App;
