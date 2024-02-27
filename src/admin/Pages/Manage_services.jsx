import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Manage_services() {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch();
    }, []);

    const fetch = async () => {
        const res = await axios.get(`http://localhost:3000/services`);
        console.log(res.data);
        setData(res.data);
    }
    const deletehandle = async (id) => {
        const res = await axios.delete(`http://localhost:3000/services/${id}`);
        fetch();
    }

    return (
        <>

            {/* <div className="row"> */}
            <div className="col-md-12  m-1">
                <div className="panel panel-default" >
                    <div className="panel-heading" style={{ fontSize: "large", fontFamily: "bold" }}>
                        Manage_services
                    </div>
                    <div className="panel-body">
                        <div className="table-responsive">
                            <table className="table table-striped table-bordered table-hover" id="dataTables-example">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Cat_ID</th>
                                        <th>Service_Name</th>
                                        <th>Desc</th>
                                        <th>Price</th>
                                        <th>Images </th>
                                        <th>Action</th>
                                        <th>Status</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        data.map((value, index, arr) => {
                                            return (
                                                <tr>
                                                    <td>{value.id}</td>
                                                    <td>{value.cat_id}</td>
                                                    <td>{value.service_name}</td>
                                                    <td>{value.desc}</td>
                                                    <td>{value.price}</td>
                                                    <td><img src={value.images} style={{height:'50px', Width:'100%'}}></img></td>
                                                    <td>Available</td>
                                                    <td style={{ display: 'flex', gap: '30px' }} >
                                                        <button className='btn btn-danger' style={{ width: '90px' }} onClick={() => deletehandle(value.id)}>Delete</button>
                                                        <button className='btn btn-success' style={{ width: '90px' }}>Edit</button>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            {/* </div> */}

        </>
    )
}

export default Manage_services