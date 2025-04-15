import React from "react";
import '../stylesheet/style.css'

const Home = () => {
  return (
    <div style={{ overflowX: 'hidden' }}>

      {/* Hero Section */}
      <section className="d-flex align-items-center p-5" style={{ minHeight: '80vh' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-start">
              <h1 className="display-5 fw-bold text-danger">
                Fostering Genuine Connections in a Virtual World
              </h1>
              <p className="lead">
                Bridging technology and human empathy to drive productivity forward.
              </p>
              <button className="btn btn-danger px-4 mt-3">
                Find Out How We Support Your Workforce's Growth
              </button>
            </div>
            <div className="col-md-6 text-center mt-4 mt-md-0">
              <img
                src=""
                alt="Hero"
                className="img-fluid"
                style={{ maxHeight: '350px', width: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Partners */}
      <section className="text-center py-4 bg-danger-subtle">
        <h5 className="text-danger">TRUSTED PARTNERS</h5>
        <div className="d-flex justify-content-center flex-wrap gap-4 mt-3">
          {["infosys", "techm", "cognizant", "genpact", "accenture"].map((img, i) => (
            <img key={i} src={`/images/${img}.png`} alt={img} height="40" style={{ maxWidth: '100%' }} />
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="text-center py-5 bg-white">
        <h6 className="text-uppercase">Empower, Enhance, Excel</h6>
        <h2 className="fw-bold text-danger">Shaping the Future of Support</h2>
        <p className="mx-auto w-75">
          We extend assistance in improving business processes that empower the organizations overall growth.
        </p>
        <div className="row row-cols-1 row-cols-md-4 g-4 mt-4">
          {[
            {
              title: "Staff Augmentation",
              desc: "Boost your team's capabilities with our premium talent resources.",
              btn: "Explore Further"
            },
            {
              title: "Managed Service",
              desc: "Enhance operational efficiency with our tailored managed services.",
              btn: "Understand More"
            },
            {
              title: "Hire-Train-Deploy",
              desc: "Quickly build your team with our fast-track hire, train, and deploy approach.",
              btn: "View More Insights"
            },
            {
              title: "Healthcare Staffing",
              desc: "Staffing solutions aligned with your values to elevate patient care.",
              btn: "Discover More"
            }
          ].map((service, index) => (
            <div className="col" key={index}>
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title text-danger fw-bold">{service.title}</h5>
                  <p className="card-text">{service.desc}</p>
                </div>
                <div className="card-footer bg-white border-0">
                  <button className="btn btn-danger w-100">{service.btn}</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="container-fluid py-5 mb-4 bg-danger-subtle">
        <div className="row align-items-center">
          <div className="col-md-6">
            <img
              src="/images/office.jpg"
              alt="Office"
              className="img-fluid rounded"
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
          <div className="col-md-6">
            <h6 className="text-danger">ABOUT</h6>
            <h3 className="fw-bold">Unlock the Power of <br /> Communication</h3>
            <p>
              For over two decades, Trustpeople has helped companies build stronger teams.
            </p>
            <button className="btn btn-danger">DISCOVERY STORY</button>
          </div>
        </div>
      </section>

      {/* Strategy Section */}
      <section className="container bg-dark text-white p-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h6>Strategy & Transformation</h6>
            <h3 className="fw-bold">Reengineering the Customer Service Experience</h3>
            <p>
              Our commitment to innovation is about anticipating customer needs and optimizing solutions.
            </p>
            <button className="btn btn-danger">Discover Our Impact</button>
          </div>
          <div className="col-md-6">
            <img
              src="/images/ai-head.jpg"
              alt="AI Tech"
              className="img-fluid rounded"
            />
          </div>
        </div>
      </section>

      {/* Why Trust Section */}
      <section className="text-center p-5">
        <h3 className="text-danger fw-bold">Why Trust People ?</h3>
        <p className="w-75 mx-auto">
          Unlock unparalleled talent and exceptional service with our human-centric staffing solutions.
        </p>
      </section>

      <section className="row mt-3 g-3 bg-danger-subtle px-3">
        {[
          "TRUE HUMAN APPROACH",
          "HIGH VOLUME SOLUTIONS",
          "SPEED AND PRECISION",
          "TALENT DEVELOPMENT",
          "20+ YEARS EXPERIENCE",
          "AGILE ORGANIZATION"
        ].map((title, index) => (
          <div className="col-md-4 pb-3 p-4" key={index}>
            <div className="p-3 h-100 bg-light rounded border-start border-bottom border-danger shadow-sm">
              <h5 className="fw-bold">{title}</h5>
              <p>Short description here.</p>
            </div>
          </div>
        ))}
      </section>

      {/* Job Seekers Section */}
      <section className="container-fluid p-5">
        <div className="row align-items-center overflow-hidden" style={{ borderRadius: '10px' }}>
          <div className="col-md-6 position-relative p-5 text-white" style={{ backgroundColor: '#8B0000' }}>
            <div style={{
              position: 'absolute',
              top: 0,
              right: 0,
              width: '0',
              height: '0',
              borderTop: '100% solid transparent',
              borderLeft: '100px solid white',
              zIndex: 1
            }} />
            <div style={{ position: 'relative', zIndex: 2 }}>
              <h6 className="text-uppercase">Job Seekers</h6>
              <h2 className="fw-bold">Start a Career with JK <br /> Company Today</h2>
              <button className="btn btn-light mt-3">Apply Now</button>
            </div>
          </div>
          <div className="col-md-6 p-0">
            <img
              src="/images/office.jpg"
              alt="Office"
              className="img-fluid w-100"
              style={{ height: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
