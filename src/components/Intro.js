import React from "react";

class Intro extends React.Component {
  render() {
    return (
      <section id="intro" className="clearfix">
        <div className="container">
          <div className="intro-info">
            <div className="intro-div">
              <h2>Welcome to Spin and Learn</h2>
              <div>
                <a href="#about" className="btn-get-started scrollto">
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Intro;
