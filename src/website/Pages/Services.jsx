import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import axios from 'axios';

function Services() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch()
    }, []);

    const fetch = async () => {
        const res = await axios.get(`http://localhost:3000/Categories`);
        console.log(res.data);
        setData(res.data);
    }

  return (
<>
<Navbar/>
<div>
<div className="container-xxl py-5">
                <div className="container py-5 px-lg-5">
                    <div className="wow fadeInUp" data-wow-delay="0.1s">
                        <p className="section-title text-secondary justify-content-center"><span />Our Services<span /></p>
                        <h1 className="text-center mb-5">What Solutions We Provide</h1>
                    </div>
                    <div className="row g-4">
                        {
                            data.map((value, index, arr) => {

                                return (
                                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                        <div className="service-item d-flex flex-column text-center rounded">
                                            <div className="service-icon flex-shrink-0">
                                               <img src={value.cat_images} width="50%" height="100px" alt="" />
                                            </div>
                                            <h5 className="mb-3">{value.cat_name}</h5>
        
                                            <a className="btn btn-square" href><i className="fa fa-arrow-right" /></a>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>      
</div>
<Footer/>
</>  )
}

export default Services