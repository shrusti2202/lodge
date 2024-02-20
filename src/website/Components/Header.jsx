import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Header() {
    return (
        <div className="hero_area">
            {/* header section strats */}
            <header className="header_section">
                <div className="container-fluid">
                    <nav className="navbar navbar-expand-lg custom_nav-container ">
                        <Link className="navbar-brand" to="/">
                            <img src="website/images/logo.png" alt />
                            <span>
                                Lodge
                            </span>
                        </Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <div className="d-flex ml-auto flex-column flex-lg-row align-items-center">
                                <ul className="navbar-nav  ">
                                    <li className="nav-item active">
                                        <Link className="nav-link" to="/" >Home <span className="sr-only">(current)</span></Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/about"> About</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/jewellery">Jewellery </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/jewellery">services </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/contact">Contact us</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/login">Login</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="quote_btn-container ">
                                <Link to="/">
                                    <img src="website/images/cart.png" alt />
                                    <div className="cart_number">
                                        0
                                    </div>
                                </Link>
                                <form className="form-inline">
                                    <button className="btn  my-2 my-sm-0 nav_search-btn" type="submit" />
                                </form>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
            {/* end header section */}
            {/* slider section */}
            <section className=" slider_section position-relative">
                <div className="design-box">
                    <img src="website/images/design-1.png" alt />
                </div>
              
                <div className="container">
                    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                        {/* <ol className="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active">01</li>
                            <li data-target="#carouselExampleIndicators" data-slide-to={1}>02</li>
                            <li data-target="#carouselExampleIndicators" data-slide-to={2}>03</li>
                        </ol> */}
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="detail_box">
                                            <h2>
                                                <span> New Collection</span>
                                                <hr />
                                            </h2>
                                            <h1>
                                                Jewellery
                                            </h1>
                                            <p>
                                                Lorem ipsum dolor sit amet consec tetur adipiscing elit elit at felislacinia
                                                aptent taciti sociosqu ad litora torquent per conubia nostra
                                            </p>
                                            <div>
                                                <Link to>Shop Now</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="img-box">
                                            <img src="website/images/slider-img.png" alt />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item ">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="detail_box">
                                            <h2>
                                                <span> New Collection</span>
                                                <hr />
                                            </h2>
                                            <h1>
                                                Jewellery
                                            </h1>
                                            <p>
                                                Lorem ipsum dolor sit amet consec tetur adipiscing elit elit at felislacinia
                                                aptent taciti sociosqu ad litora torquent per conubia nostra
                                            </p>
                                            <div>
                                                <Link to>Shop Now</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="img-box">
                                            <img src="website/images/slider-img.png" alt />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item ">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="detail_box">
                                            <h2>
                                                <span> New Collection</span>
                                                <hr />
                                            </h2>
                                            <h1>
                                                Jewellery
                                            </h1>
                                            <p>
                                                Lorem ipsum dolor sit amet consec tetur adipiscing elit elit at felislacinia
                                                aptent taciti sociosqu ad litora torquent per conubia nostra
                                            </p>
                                            <div>
                                                <Link to>Shop Now</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="img-box">
                                            <img src="website/images/slider-img.png" alt />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* end slider section */}
        </div>

    )
}

export default Header