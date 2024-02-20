import React, { useState } from 'react'
import axios from 'axios';import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

function Login() {
  const [formvalue,setFormvalue]=useState({
    id:"",
    name:"",
    email:"",
    password:"",
    contact:"",
    confrim_password:""
  });

  const getform=(e)=>{
    setFormvalue({...formvalue,id:new Date().getTime().toString(),[e.target.name]:e.target.value});
    console.log(formvalue);
  }

  const submithandel = async (e) => {
    e.preventDefault(); // stop page reload 
    const res = await axios.post(`http://localhost:3000/user`,formvalue);
    //console.log(res);
    if(res.status==201)
    {
      setFormvalue({...formvalue,id:"",name:"",email:"",password:"",contact:"",confrim_password:""});
      alert('User Submited Success');
      return false;
    }
  }
  return (
    <>
      <Navbar />
      <form   action="" method='post' onSubmit={submithandel} style={{ border: '1px solid #ccc' }}>
        <div className="container">
          <h1>Sign Up</h1>
          <p>Please fill in this form to create an account.</p>
          <hr />
          <label htmlFor="email"><b>Name</b></label>
          <input type="text" name='name' value={formvalue.name} onChange={getform} placeholder="Enter Name"  required />
          <label htmlFor="email"><b>Email</b></label>
          <input type="text" name='email' value={formvalue.email} onChange={getform} placeholder="Enter Email"  required />
          <label htmlFor="number"><b>Contact No</b></label>
          <input type="text" name='contact' value={formvalue.contact} onChange={getform} placeholder="Enter number"  required />
          <label htmlFor="psw"><b>Password</b></label>
          <input type="password" name='password' value={formvalue.password} onChange={getform} placeholder="Enter Password" required />
          <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
          <input type="password" name='confrim_password' value={formvalue.confrim_password} onChange={getform} placeholder="Repeat Password"  required />
          <label>
            <input type="checkbox" defaultChecked="checked" style={{ marginBottom: 15 }} /> Remember me
          </label>
          <p>By creating an account you agree to our <a href="#" style={{ color: 'dodgerblue' }}>Terms &amp; Privacy</a>.</p>
          <div className="clearfix">
            <button type="button" className="cancelbtn">Cancel</button>
            <button type="submit" className="signupbtn">Sign Up</button>
          </div>
        </div>
      </form>
      <Footer />
    </>
  )
}

export default Login