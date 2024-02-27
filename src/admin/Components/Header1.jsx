import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

function Header1() {
  return (
    <>
      <Helmet>
                <link href="admin/assets/css/bootstrap.css" rel="stylesheet" />
                <link href="admin/assets/css/font-awesome.css" rel="stylesheet" />
                <link href="admin/assets/js/dataTables/dataTables.bootstrap.css" rel="stylesheet" />
                <link href="admin/assets/css/style.css" rel="stylesheet" />
                <link href='http://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css' />

                <script src="admin/assets/js/jquery-1.10.2.js"></script>
                <script src="admin/assets/js/bootstrap.js"></script>
                <script src="admin/assets/js/dataTables/jquery.dataTables.js"></script>
                <script src="admin/assets/js/dataTables/dataTables.bootstrap.js"></script>
                <script src="admin/assets/js/custom.js"></script>
            </Helmet>
      <div>
        <div className="container-fluid hero_area_nav" style={{ backgroundImage: 'hero-bg.1.png', height: '70px' }}>
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
              <div className="d-flex ml-auto flex-column flex-lg-row align-items-center" >
                <ul id="menu-top" className="nav navbar-nav navbar-left">
                  <li><Link to="/dashboard" className="menu-top-active">DASHBOARD</Link></li>
                  <li>
                    <Link to="#" className="dropdown-toggle" id="ddlmenuItem" data-toggle="dropdown">Category<i className="fa fa-angle-down" /></Link>
                    <ul className="dropdown-menu" role="menu" aria-labelledby="ddlmenuItem">
                      <li ><Link to="/add_categories">Add Categories</Link></li>
                      <li ><Link to="/Manage_categories">Manage Categories</Link></li>
                    </ul>
                  </li>
                  <li>
                    <Link to="#" className="dropdown-toggle" id="ddlmenuItem" data-toggle="dropdown">Employee<i className="fa fa-angle-down" /></Link>
                    <ul className="dropdown-menu" role="menu" aria-labelledby="ddlmenuItem">
                      <li ><Link to="/add_employee">Add Employee</Link></li>
                      <li ><Link to="/manage_employee">Manage Employee</Link></li>
                    </ul>
                  </li>
                  <li>
                    <Link to="#" className="dropdown-toggle" id="ddlmenuItem" data-toggle="dropdown">Service<i className="fa fa-angle-down" /></Link>
                    <ul className="dropdown-menu" role="menu" aria-labelledby="ddlmenuItem">
                      <li><Link to="/add_services">Add Services</Link></li>
                      <li><Link to="/manage_services">Manage Services</Link></li>
                    </ul>
                  </li>
                  <li><Link to="/manage_user">User</Link></li>
                  <li><Link to="/manage_Contact">Contact</Link></li>
                  <li><Link to="/manage_feedback">Feedback</Link></li>
                  <li><Link to="/admin_Login">Login</Link></li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>

  )
}

export default Header1