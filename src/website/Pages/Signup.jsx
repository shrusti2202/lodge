import React, { useEffect, useState } from 'react'
import axios from 'axios';import Navbar from '../Components/Navbar'
import { toast } from 'react-toastify';
import Footer from '../Components/Footer'
import { Link, useNavigate } from 'react-router-dom';

function Signup() {

  const redirect=useNavigate();
  useEffect(()=>{
    if(localStorage.getItem('userid'))
    {
        redirect('/');
    }
  },[]);

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
    
      const validation=()=>{

        var result=true;
        if(formvalue.name=="")
        {
           toast.error('Name Field is required');
            result=false;
            return false;
        }
        if(formvalue.email=="")
        {
          toast.error('Email Field is required');
            result=false;
            return false;
        }
        if(formvalue.password=="")
        {
          toast.error('Password Field is required');
            result=false;
            return false;
        }
        if(formvalue.mobile=="")
        {
          toast.error('Mobile Field is required');
            result=false;
            return false;
        }
        if(formvalue.images=="")
        {
          toast.error('Image Field is required');
            result=false;
            return false;
        }
        return result;
    
      }
    
      const submithandel = async (e) => {
        e.preventDefault(); // stop page reload 
        const res = await axios.post(`http://localhost:3000/user`,formvalue);
        //console.log(res);
        if(res.status==201)
        {
          setFormvalue({...formvalue,id:"",name:"",email:"",password:"",contact:"",confrim_password:""});
          toast.success('User Submited Success');
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
              <label ><b>Name</b></label>
              <input type="text" name='name' value={formvalue.name} onChange={getform} placeholder="Enter Name"  required />
              <label><b>Email</b></label>
              <input type="text" name='email' value={formvalue.email} onChange={getform} placeholder="Enter Email"  required />
              <label ><b>Contact No</b></label>
              <input type="text" name='contact' value={formvalue.contact} onChange={getform} placeholder="Enter number"  required />
              <label><b>Password</b></label>
              <input type="password" name='password' value={formvalue.password} onChange={getform} placeholder="Enter Password" required />
              <label ><b>Image</b></label>
              <input type="text" className="form-control" name="images" value={formvalue.images} onChange={getform} id="email" placeholder="Your images" />

              <div className="col-12">
                      <button className="btn btn-primary w-100 py-3" type="submit">Signup</button>
                      <Link to="/login">If you already Registered then Login Here</Link>
                    </div>
            </div>
          </form>
          <Footer />
        </>
      )
    }

export default Signup