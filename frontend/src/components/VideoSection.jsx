import '../styles/VideoSection.css'

const VideoSection = () => {
  return (
    <section className="video-section section" id="about">
      <div className="container">
        <h2 className="section-title">Our Process</h2>
        <p className="section-subtitle">See how we make visa applications simple and hassle-free</p>
        
        <div className="video-container">
          <div className="video-wrapper">
            <div className="video-placeholder">
              <img src={require('../assets/img/SWELLOW.png')} alt="Video thumbnail" />
              <button className="play-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
              </button>
            </div>
          </div>
          
          <div className="video-text">
            <h3>Home is a place where every detail matters</h3>
            <p>At VisaEase, we believe that your visa process should be as comfortable and straightforward as being at home. We take care of every detail so you can focus on planning your journey.</p>
            <p>Our team of experts handles the complexities of visa applications with precision and care, ensuring a smooth process from start to finish.</p>
            <a href="#services" className="btn">Our Services</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VideoSection