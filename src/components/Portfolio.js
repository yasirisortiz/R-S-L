import React from "react";
import images from '../img-sp/IMG_8910.JPG'

class Portfolio extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      media: [
         {img: images},
         {img: images},
         {img: images},
         {img: images},
         {img: images},
         {img: images}
       ]
    } 
      
  }
  
  render() {
    return (
      <section id="portfolio" className="clearfix">
        <div className="container">
          <header className="section-header">
            <h3 className="section-title">Gallery</h3>
          </header>
          <div className="row">
            <div className="col-lg-12">
              <ul id="portfolio-flters">
                <li data-filter="*" className="filter-active">
                  All
                </li>
                <li data-filter=".filter-app">Images</li>
                <li data-filter=".filter-card">Videos</li>
              </ul>
            </div>
          </div>
          <div id="scroll" className="row  portfolio-container">
            {this.state.media.map((res) => (
              <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <div className="portfolio-wrap">
                  <img src={res.img} className="img-fluid" alt="img" />
                  <div className="portfolio-info">
                    <div>
                      <a href="img-sp/IMG_8910.JPG" data-lightbox="portfolio" data-title="App 1" className="link-preview" title="Preview">
                        <i className="ion ion-eye" />
                      </a>
                      <a href="/" className="link-details" title="More Details">
                        <i className="ion ion-android-open" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className="col-lg-4 col-md-6 portfolio-item filter-card" data-wow-delay="0.1s">
              <div className="portfolio-wrap">
                <iframe title="ok" width={350} height={206} src="https://www.youtube.com/embed/C0DPdy98e4c" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen/>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
