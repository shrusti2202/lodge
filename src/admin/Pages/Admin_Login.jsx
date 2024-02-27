import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'
import React, { useState } from 'react'


function Admin_Login() {
  const redirect=useNavigate(); // redirect any routes



  const [formvalue, setFormvalue] = useState({
    email: "",
    password: "",
  });

  const getform = (e) => {
    setFormvalue({ ...formvalue, [e.target.name]: e.target.value });
    console.log(formvalue);
  }

  const validation = () => {

    var result = true;

    if (formvalue.email == "") {
      toast.error('Email Field is required');
      result = false;
      return false;
    }
    if (formvalue.password == "") {
      toast.error('Password Field is required');
      result = false;
      return false;
    }
    return result;

  }

  const submithandel = async (e) => {
    e.preventDefault(); // stop page reload
    if (validation()) {
      const res = await axios.get(`http://localhost:3000/user?email=${formvalue.email}`);
      console.log(res);
      if (res.data.length > 0) {
        if (res.data[0].password == formvalue.password) {
          toast.success('Login Success');
          redirect('/');
        }
        else {
          toast.error('Password incorrect');
          return false;
        }
      }
      else {
        toast.error('Email does not Exist');
        return false;
      }
    }
  }


  return (
    <div>
      <form action="" method="post" onSubmit={submithandel}>
  <div className="container">
    <label ><b>Email</b></label>
    <input type="text"  name="email" value={formvalue.email} onChange={getform} id="email" placeholder="Enter email" required />
    <label ><b>Password</b></label>
    <input type="password" name="password" value={formvalue.password} onChange={getform} id="email" placeholder="Enter Password"  required />
    <button type="submit">Login</button>
    <Link to="/admin_Signup">If you not Registered then Register Here</Link>
  </div>
 
</form>
    </div>
  )
}

export default Admin_Login