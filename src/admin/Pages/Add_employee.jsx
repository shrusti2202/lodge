import React, { useState } from 'react'
import axios from 'axios';


function Add_employee() {

  const [formvalue,setFormvalue]=useState({
    id:"",
    name:"",
    email:"",
    password:"",
    phone:"",
    images:""
  });

  const getform=(e)=>{
    setFormvalue({...formvalue,id:new Date().getTime().toString(),[e.target.name]:e.target.value});
    console.log(formvalue);
  }

  const submithandel = async (e) => {
    e.preventDefault(); // stop page reload 
    const res = await axios.post(`http://localhost:3000/employee`,formvalue);
    //console.log(res);
    if(res.status==201)
    {
      setFormvalue({...formvalue,name:"",email:"",password:"",phone:"",images:""});
      alert('Employee Submited Success');
      return false;
    }
  }

  return (
    <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12 container ">
                    <div className="panel panel-info">
                    <div className="panel-heading" style={{fontSize:"large",fontFamily:"bold" }}>
                            Add Employee
                        </div>
                        <div className="panel-body">
                            <form role="form" action="" method='post' onSubmit={submithandel}>
                                <div className="form-group">
                                    <label>Enter Name</label>
                                    <input className="form-control" name='name' value={formvalue.name} onChange={getform} type="text" placeholder='Enter your Name'/>
                                </div>
                                <div className="form-group">
                                    <label>Enter Email</label>
                                    <input className="form-control" name='email' value={formvalue.email} onChange={getform} type="text" placeholder='Enter your Email' />
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input className="form-control" name='password' value={formvalue.password} onChange={getform} type="password"/>
                                </div> 
                                <div className="form-group">
                                    <label>Number</label>
                                    <input className="form-control" name='phone' value={formvalue.phone} onChange={getform} type="number"/>
                                </div>
                                <div className="form-group">
                                    <label>Image</label>
                    <input className="form-control" name="images" value={formvalue.images}  onChange={getform} type="url" />
                                </div>
                            <button type="submit" className="btn btn-info">Submit </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
  )
}

export default Add_employee