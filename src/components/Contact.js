import React from "react";

class Contact extends React.Component {
  render() {
    return (
      <section id="contact">
        <div className="container">
          <div className="section-header">
            <h3>Contact Us</h3>
          </div>
          <div className="row wow fadeInUp">

            <div className="col-lg-12">
              <div className="row">
                <div className="col-md-4 info">
                  <div>
                    <i className="ion-ios-location-outline" />
                    <p>Yasiris Ortiz </p>
                  </div>
                </div>
                <div className="col-md-4 info">
                  <div>
                    <i className="ion-ios-email-outline" />
                    <p>spinandlearn@gmail.com</p>
                  </div>
                </div>
                <div className="col-md-4 info">
                  <div>
                    <i className="ion-ios-telephone-outline" />
                    <p>+1 (646) 707-7037</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
