import React from "react"
import {about} from '../dry/index'



class About extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      about: []
    }
  }
  
  componentDidMount() {
    this.setState({
      about
    })
  }
  
  render() {
    return (
      <section id="about">
        <div className="container">
          <header className="section-header">
            <h3>What is Spin and Learn?</h3>
            <p>
              Spin and Learn was founded by Table Tennis Dominican Champion Ms.
              Yasiris Ortiz in 2016. Spin and Learn was founded with the vision
              to bring table tennis to all NYC school students. The mission is
              to foster a love for the sport by training students at a very
              young age so they can grow to become professional players. Ms.
              Ortiz started playing at the age of 11 in the Dominican Republic
              and in addition to representing her country Internationally, she
              has won numerous medals including three gold medals in the
              Caribbean Championship in 2018. Since Ms. Ortiz join the National
              Table Tennis Team (at the National Mirabal Sisters Game), and ever
              since that championship, she has been competing against the top
              Table Tennis in the world. She is currently ranked amongst the top
              three best players in both the National and International
              tournaments, taking place in Pan-American, Central American, Latin
              American and the Caribbean. Her plan and goal are to become the #1
              female player in the world within the next five years. Yasiris
              brings her love and passion for table tennis to Spin and Learn,
              her unique and special program that focuses on the physical and
              mental development of elementary and middle school children ages 6
              - 13. Our coaches are professional table tennis players who teach
              children the foundation and technique necessary to take their
              table tennis skills beyond the program.
            </p>
          </header>
          <div className="row about-container">
            <div className="col-lg-6 content order-lg-1 order-2">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              {this.state.about.map((res)=> (
                <div className="icon-box wow fadeInUp">
                  <div className="icon">
                    <img src={res.img} alt="img"/>
                  </div>
                  <h4 className="title">
                  <p>{res.title}</p>
                  </h4>
                  <p className="description">{res.description}</p>
                </div>
              ))}
            </div>
            <div className="col-lg-6 background order-lg-2 order-1 wow fadeInUp">
              <img src="img-sp/IMG_6109.JPG" className="img-fluid" alt="img" />
            </div>
          </div>
          <div className="row about-extra">
            <div className="col-lg-6 wow fadeInUp">
              <img src="img-sp/IMG_8927.JPG" className="img-fluid" alt="img" />
            </div>
            <div className="col-lg-6 wow fadeInUp pt-5 pt-lg-0">
              <h4>About the Classes</h4>
              <p>
                Spin and Learn operates as an after-school program on Tuesdays,
                Fridays and Satudays from 1 pm - 4 pm
              </p>
              <p>
                Ad vitae recusandae odit possimus. Quaerat cum ipsum corrupti.
                Odit qui asperiores ea corporis deserunt veritatis quidem
                expedita perferendis. Qui rerum eligendi ex doloribus quia sit.
                Porro rerum eum eum.
              </p>
            </div>
          </div>
          <div className="row about-extra">
            <div className="col-lg-6 wow fadeInUp order-1 order-lg-2">
              <img src="img-sp/IMG_7351.jpg" className="img-fluid" alt="img" />
            </div>
            <div className="col-lg-6 wow fadeInUp pt-4 pt-lg-0 order-2 order-lg-1">
              <h4>Benefits</h4>
              <h3>Improve Students Attendance</h3>
              <h3>Improve Students Attendance</h3>
              <h3>Improve Students Attendance</h3>
              <h3>Improve Students Attendance</h3>
              <h3>Improve Students Attendance</h3>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
