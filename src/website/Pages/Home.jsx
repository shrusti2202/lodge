import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

function Home() {
  return (
    <div>
      <Header />
      <div>
        <div className="item_section layout_padding2">
          <div className="container">
            <div className="item_container">
              <div className="box">
                <div className="price">
                  <h6>
                    Best PRICE
                  </h6>
                </div>
                <div className="img-box">
                  <img src="website/images/i-1.png" alt />
                </div>
                <div className="name">
                  <h5>
                    Bracelet
                  </h5>
                </div>
              </div>
              <div className="box">
                <div className="price">
                  <h6>
                    Best PRICE
                  </h6>
                </div>
                <div className="img-box">
                  <img src="website/images/i-2.png" alt />
                </div>
                <div className="name">
                  <h5>
                    Ring
                  </h5>
                </div>
              </div>
              <div className="box">
                <div className="price">
                  <h6>
                    Best PRICE
                  </h6>
                </div>
                <div className="img-box">
                  <img src="website/images/i-3.png" alt />
                </div>
                <div className="name">
                  <h5>
                    Earings
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end item section */}
        {/* about section */}
        <section className="about_section layout_padding2-top layout_padding-bottom">
          <div className="design-box">
            <img src="website/images/design-2.png" alt />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="detail-box">
                  <div className="heading_container">
                    <h2>
                      About Jewellery Shop
                    </h2>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrudLorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud
                  </p>
                  <div>
                    <a href>
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="img-box">
                  <img src="website/images/about-img.png" alt />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* end about section */}
        {/* price section */}
        <section className="price_section layout_padding">
          <div className="container">
            <div className="heading_container">
              <h2>
                Our Jewellery Price
              </h2>
            </div>
            <div className="price_container">
              <div className="box">
                <div className="name">
                  <h6>
                    Diamond Ring
                  </h6>
                </div>
                <div className="img-box">
                  <img src="website/images/p-1.png" alt />
                </div>
                <div className="detail-box">
                  <h5>
                    $<span>1000.00</span>
                  </h5>
                  <a href>
                    Buy Now
                  </a>
                </div>
              </div>
              <div className="box">
                <div className="name">
                  <h6>
                    Diamond Ring
                  </h6>
                </div>
                <div className="img-box">
                  <img src="website/images/i-2.png" alt />
                </div>
                <div className="detail-box">
                  <h5>
                    $<span>1000.00</span>
                  </h5>
                  <a href>
                    Buy Now
                  </a>
                </div>
              </div>
              <div className="box">
                <div className="name">
                  <h6>
                    Diamond Ring
                  </h6>
                </div>
                <div className="img-box">
                  <img src="website/images/i-3.png" alt />
                </div>
                <div className="detail-box">
                  <h5>
                    $<span>1000.00</span>
                  </h5>
                  <a href>
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <a href className="price_btn">
                See More
              </a>
            </div>
          </div>
        </section>
        {/* end price section */}
        {/* ring section */}
        <section className="ring_section layout_padding">
          <div className="design-box">
            <img src="website/images/design-1.png" alt />
          </div>
          <div className="container">
            <div className="ring_container layout_padding2">
              <div className="row">
                <div className="col-md-5">
                  <div className="detail-box">
                    <h4>
                      special
                    </h4>
                    <h2>
                      Wedding Ring
                    </h2>
                    <a href>
                      Buy Now
                    </a>
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="img-box">
                    <img src="website/images/ring-img.jpg" alt />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* end ring section */}
        {/* client section */}
        <section className="client_section">
          <div className="container">
            <div className="heading_container">
              <h2>
                Testimonial
              </h2>
            </div>
            <h4 className="secondary_heading">
              What is says our customer
            </h4>
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="client_container">
                    <div className="client-id">
                      <div className="img-box">
                        <img src="website/images/client.png" alt />
                      </div>
                      <div className="name">
                        <h5>
                          Aliqua
                        </h5>
                        <h6>
                          Consectetur adipiscing
                        </h6>
                      </div>
                    </div>
                    <div className="detail-box">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrudLorem ipsum
                      </p>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="client_container">
                    <div className="client-id">
                      <div className="img-box">
                        <img src="website/images/client.png" alt />
                      </div>
                      <div className="name">
                        <h5>
                          Aliqua
                        </h5>
                        <h6>
                          Consectetur adipiscing
                        </h6>
                      </div>
                    </div>
                    <div className="detail-box">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrudLorem ipsum
                      </p>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="client_container">
                    <div className="client-id">
                      <div className="img-box">
                        <img src="website/images/client.png" alt />
                      </div>
                      <div className="name">
                        <h5>
                          Aliqua
                        </h5>
                        <h6>
                          Consectetur adipiscing
                        </h6>
                      </div>
                    </div>
                    <div className="detail-box">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrudLorem ipsum
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </section>
        {/* end client section */}
        {/* contact section */}
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
                <form action>
                  <div>
                    <input type="text" placeholder="Name" />
                  </div>
                  <div>
                    <input type="email" placeholder="Email" />
                  </div>
                  <div>
                    <input type="text" placeholder="Phone" />
                  </div>
                  <div>
                    <input type="text" className="message-box" placeholder="Message" />
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
        {/* end contact section */}
        {/* info section */}

      </div>
      <Footer />
    </div>
  )
}

export default Home