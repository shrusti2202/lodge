import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./website/Components/Header";
import Footer from "./website/Components/Footer";
import Home from "./website/Pages/Home";
import About from "./website/Pages/About";
import Jewellery from "./website/Pages/Jewellery";
import Contact from "./website/Pages/Contact";
import Login from "./website/Pages/Login";
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
// import Add_contact from "./admin/Pages/Add_contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/jewellery" element={<Jewellery />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
        <Route path="/login" element={<Login />}></Route>






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


      </Routes>
    </BrowserRouter>
  );
}

export default App;
