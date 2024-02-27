import React, { useState , useEffect} from 'react'
import axios from 'axios';

function Add_services() {
    const [data, setData] = useState([]);

  useEffect(() => {
    fetch()
  }, []);

  const fetch = async () => {
    const res = await axios.get(`http://localhost:3000/Categories`);
    console.log(res.data);
    setData(res.data);
  }
    const [formvalue,setFormvalue]=useState({
        id:"",
        cat_id:"",
        service_name:"",
        desc:"",
        price:"",
        images:""
      });
    
      const getform=(e)=>{
        setFormvalue({...formvalue,id:new Date().getTime().toString(),[e.target.name]:e.target.value});
        console.log(formvalue);
      }
    
      const submithandel = async (e) => {
        e.preventDefault(); // stop page reload 
        const res = await axios.post(`http://localhost:3000/services`,formvalue);
        //console.log(res);
        if(res.status==201)
        {
          setFormvalue({...formvalue,cat_id:"",service_name:"",desc:"",price:"",images:""});
          alert('Services Submited success');
          return false;
        }
      }
    
    return (
        <>
            <div className="row">
                <div className="col-md-12 col-sm-12 col-xs-12 container ">
                    <div className="panel panel-info">
                        <div className="panel-heading" style={{ fontSize: "large", fontFamily: "bold" }}>
                            Add Services
                        </div>
                        <div className="panel-body">
                            <form role="form" action="" method='post' onSubmit={submithandel}>
                            <div className="form-group">
                    <label>Categories Name</label>
                    <select className="form-control" name='cat_id' value={formvalue.cat_id} onChange={getform}>
                      <option value="">-------  Select Categories of Services ---------</option>
                      {
                        data.map((value, index, arr) => {
                          return (
                            <option value={value.id}>{value.cat_name}</option>
                          )
                        })
                      }
                    </select>
                    <p className="help-block">Help text here.</p>
                  </div>
                                <div className="form-group">
                                    <label>Services Name</label>
                                    <input className="form-control"  name='service_name' value={formvalue.service_name} onChange={getform} type="text" />
                                </div>
                                <div className="form-group">
                                    <label>Description</label>
                                    <input className="form-control"  name='desc' value={formvalue.desc} onChange={getform} type="text" />
                                </div>
                                <div className="form-group">
                                    <label>Price</label>
                                    <input className="form-control"  name='price' value={formvalue.price} onChange={getform} type="text" />
                                </div>
                                <div className="form-group">
                                    <label>Image</label>
                                    <input className="form-control"  name='images' value={formvalue.images} onChange={getform} type="text" />
                                </div>
                                <button type="submit" className="btn btn-info">Submit </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Add_services