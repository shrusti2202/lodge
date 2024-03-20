import React, { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

function Navbar() {
  // const [openMenu, setOpenMenu] = useState(false)
  const redirect = useNavigate();

  // Delete session
  const logout = () => {
      localStorage.removeItem('userid');
      localStorage.removeItem('uname');
      toast.success('Logout Success');
      redirect('/')
  }
  return (
    <div>
      <div className="container-fluid hero_area_nav" style={{ backgroundImage: 'hero-bg.1.png', height: '60px' }}>
        <nav className="navbar navbar-expand-lg custom_nav-container ">
          <Link to="/" className="navbar-brand" >
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
                  <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about"> About</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/jewellery">Jewellery </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/services">Services </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">Contact us</Link>
                </li>
               
                <li>
                {(
                        () => {
                            //  Use  session
                            if (localStorage.getItem('userid')) {
                                return (
                                        <NavLink to="/profile" className="nav-item nav-link">Hi .. {localStorage.getItem('uname')}</NavLink>
                                )
                            }
                        }
                    )()}
                {(
                    () => {
                        if (localStorage.getItem('userid')) {
                            return (
                                <>
                                    <a href="javascript:void(0)" onClick={logout} className="btn rounded-pill py-2 px-4 ms-3 d-none d-lg-block">Logout</a>
                                </>
                            )
                        }
                        else {
                            return (
                                <>
                                <Link className="nav-link" to="/login">Login us</Link>
                                </>
                            )
                        }
                    }
                )()}

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

    </div>
  )
}

export default Navbar