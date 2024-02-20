import React from 'react'

function Footer1() {
  return (
    <div>
      <section className="info_section ">
        <div className="container">
          <div className="info_container">
            <div className="row">
              <div className="col-md-3">
                <div className="info_logo">
                  <a href>
                    <img src="website/images/logo.png" alt />
                    <span>
                      Lodge
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container-fluid footer_section">
        <p>
          © <span id="displayYear" /> All Rights Reserved By
          <a href="http://localhost:3000/"> JEWELLERY WEB PAGE</a>
        </p>
      </section>
    </div>
  )
}

export default Footer1