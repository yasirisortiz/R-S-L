import React from "react";

export default class Footer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      magna: 'mangas'
    }
  }
  
  render() {
    return (
      <footer id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 footer-info">
                <h3>Spin and Learn</h3>
                <p>
                  Cras fermentum odio eu feugiat lide par naso tierra. Justo
                  eget nada terra videa {this.state.magna} derita valies darta donna mare
                  fermentum iaculis eu non diam phasellus. Scelerisque felis
                  imperdiet proin fermentum leo. Amet volutpat consequat mauris
                  nunc congue.
                </p>
              </div>
              <div className="col-lg-2 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/">About us</a>
                  </li>
                  <li>
                    <a href="/">Services</a>
                  </li>
                  <li>
                    <a href="/">Terms of service</a>
                  </li>
                  <li>
                    <a href="/">Privacy policy</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 footer-contact">
                <h4>Contact Us</h4>
                <p>
                  2877 Grand Concourse <br />
                  Bronx, NY 10468
                  <br />
                  United States <br />
                  <strong>Phone:</strong> +1 (646)-707-7037
                  <br />
                  <strong>Email:</strong> spinandlearn@gmail.com
                  <br />
                </p>
                <div className="social-links">
                  <a href="/" className="twitter">
                    <i className="fa fa-twitter" />
                  </a>
                  <a href="/" className="facebook">
                    <i className="fa fa-facebook" />
                  </a>
                  <a href="/" className="instagram">
                    <i className="fa fa-instagram" />
                  </a>
                  <a href="/" className="google-plus">
                    <i className="fa fa-google-plus" />
                  </a>
                  <a href="/" className="linkedin">
                    <i className="fa fa-linkedin" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="copyright">
            © Copyright <strong>Spin and Learn</strong>. All Rights Reserved
          </div>
          <div className="credits">
          </div>
        </div>
        <a href="/" className="back-to-top">
          <i className="fa fa-chevron-up" />
        </a>
      </footer>
    )
  }
}
