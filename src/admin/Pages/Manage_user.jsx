import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Manage_user() {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch();
    }, []);

    const fetch = async () => {
        const res = await axios.get(`http://localhost:3000/user`);
        console.log(res.data);
        setData(res.data);
    }
    const deletehandle = async (id) => {
        const res = await axios.delete(`http://localhost:3000/user/${id}`);
        fetch();
    }

    return (
        <>

            {/* <div className="row"> */}
            <div className="col-md-12 m-1">
                <div className="panel panel-default">
                    <div className="panel-heading" style={{ fontSize: "large", fontFamily: "bold" }}>
                        Manage_user
                    </div>
                    <div className="panel-body">
                        <div className="table-responsive">
                            <table className="table table-striped table-bordered table-hover" id="dataTables-example">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Contact</th>
                                        <th>Password</th>
                                        <th>Confrim Password</th>
                                        <th>Status</th>
                                        <th>Action</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        data.map((value, index, arr) => {
                                            return (
                                                <tr>
                                                    <td>{value.id}</td>
                                                    <td>{value.name}</td>
                                                    <td>{value.email}</td>
                                                    <td>{value.contact}</td>
                                                    <td>{value.password}</td>
                                                    <td>{value.confrim_password}</td>
                                                    <td>Unblock</td>
                                                    <td style={{ display: 'flex', gap: '30px' }}>
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

export default Manage_user