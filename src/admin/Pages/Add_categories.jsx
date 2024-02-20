import React, { useState } from 'react'
import axios from 'axios';


function Add_categories() {

  const [formvalue,setFormvalue]=useState({
    id:"",
    cat_name:"",
    cat_images:""
  });

  const getform=(e)=>{
    setFormvalue({...formvalue,id:new Date().getTime().toString(),[e.target.name]:e.target.value});
    console.log(formvalue);
  }

  const submithandel = async (e) => {
    e.preventDefault(); // stop page reload 
    const res = await axios.post(`http://localhost:3000/Categories`,formvalue);
    //console.log(res);
    if(res.status==201)
    {
      setFormvalue({...formvalue,cat_name:"",cat_images:""});
      alert('Categories Submited Success');
      return false;
    }
  }

  return (
    <div className="content-wrapper">
      <div className="container">
        <div className="row pad-botm">
          <div className="col-md-12">
            <h4 className="header-line">Add Categories</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 col-sm-12 col-xs-12">
            <div className="panel panel-info">
              <div className="panel-heading">
              Add Categories
              </div>
              <div className="panel-body">
                <form role="form" action="" method='post' onSubmit={submithandel}>
                  <div className="form-group">
                    <label>Categories Name</label>
                    <input className="form-control" name='cat_name' value={formvalue.cat_name} onChange={getform} type="text" />
                  </div>
                  <div className="form-group">
                    <label>Image Upload</label>
                    <input className="form-control" name="cat_images" value={formvalue.cat_images}  onChange={getform} type="url" />
                  </div>

                  <button type="submit" className="btn btn-info">Submit </button>
                </form></div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Add_categories