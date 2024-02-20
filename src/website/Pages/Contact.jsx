import React, { useState } from 'react'
import axios from 'axios';
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

function Contact() {
  const [formvalue,setFormvalue]=useState({
    id:"",
    name:"",
    email:"",
    number:"",
    comment:""
  });

  const getform=(e)=>{
    setFormvalue({...formvalue,id:new Date().getTime().toString(),[e.target.name]:e.target.value});
    console.log(formvalue);
  }

  const submithandel = async (e) => {
    e.preventDefault(); // stop page reload 
    const res = await axios.post(`http://localhost:3000/Contact`,formvalue);
    //console.log(res);
    if(res.status==201)
    {
      setFormvalue({...formvalue,id:"",name:"",email:"",number:"",comment:""});
      alert('Contact Submited Success');
      return false;
    }
  }
  return (
    <div>
      <Navbar />
      <section className="contact_section layout_padding">
        <div className="design-box">
          <img src="website/images/design-2.png" alt />
        </div>
        <div className="container ">
          <div className>
            <h2 className>
              Contact Us
            </h2>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <form  action="" method='post' onSubmit={submithandel}>
                <div>
                  <input type="text"  name='name' value={formvalue.name} onChange={getform} placeholder="Name" />
                </div>
                <div>
                  <input type="email"  name='email' value={formvalue.email} onChange={getform} placeholder="Email" />
                </div>
                <div>
                  <input type="text"  name='number' value={formvalue.number} onChange={getform} placeholder="Phone" />
                </div>
                <div>
                  <input type="text"  name='comment' value={formvalue.comment} onChange={getform} className="message-box" placeholder="Message" />
                </div>
                <div className="d-flex ">
                  <button>
                    SEND
                  </button>
                </div>
              </form>
            </div>
            <div className="col-md-6">
              <div className="map_container">
                <div className="map-responsive">
                  <iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Eiffel+Tower+Paris+France" width={600} height={300} frameBorder={0} style={{ border: 0, width: '100%', height: '100%' }} allowFullScreen />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Contact