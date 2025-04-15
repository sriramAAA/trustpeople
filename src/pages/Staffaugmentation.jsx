import React from 'react';

const Staffaugmentation = () => {
  return (
    <div className=" container-fluid py-5">

      {/* Hero Section */}
      <section className="text-center mb-5">
        <h1 className="display-4 fw-bold text-danger">Staff Augmentation</h1>
        <p className="lead mb-3">Empowering businesses with tailored staffing solutions focused on people.</p>
        <img
          src="https://images.unsplash.com/photo-1551836022-4c4c79ecde5c"
          alt="Staffing illustration"
          className="img-fluid rounded shadow-sm mb-4"
          style={{ maxHeight: '300px', objectFit: 'cover' }}
        />
        <button className="btn btn-lg btn-danger">Discover How We Can Help</button>
      </section>

      {/* Service Offerings */}
      <section className="mb-5">
        <h2 className="text-center mb-4">What We Offer</h2>
        <div className="row g-4">
          {[
            {
              title: 'Contingent Labor',
              desc: 'Flexible expert workforce tailored to your projects — reliable, scalable, and fast.',
              img: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d'
            },
            {
              title: 'Permanent Solutions',
              desc: 'Find long-term professionals aligned with your company’s mission and culture.',
              img: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d'
            },
            {
              title: 'Recruitment Process Outsourcing',
              desc: 'We handle your hiring end-to-end — sourcing, screening, onboarding — fully aligned with your goals.',
              img: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d'
            },
            {
              title: 'Managed Staffing',
              desc: 'Stress-free staffing. We manage the team, performance, and everything in between.',
              img: 'https://images.unsplash.com/photo-1557804506-669a67965ba0'
            }
          ].map((item, i) => (
            <div className="col-md-6 col-lg-3" key={i}>
              <div className="card h-100 shadow border-0">
                <img src={item.img} className="card-img-top" alt={item.title} />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>



      {/* Our Process Section */}
      <section className="container-fluid text-center py-5 bg-danger">
        <h2 className="mb-3 text-white display-6 fw-bold">Our Proven Approach</h2>
        <p className="text-white mb-5 mx-auto" style={{ maxWidth: '650px' }}>
          We redefine industry standards with seamless collaboration, cutting-edge tech, and exceptional ROI.
        </p>
        <div className="row justify-content-center g-4 px-3">
          {[
            { label: 'Sourcing', icon: 'bi-search' },
            { label: 'Onboarding', icon: 'bi-person-plus' },
            { label: 'Training', icon: 'bi-journal-check' },
            { label: 'Reporting & Engagement', icon: 'bi-bar-chart-line' },
            { label: 'Employee Engagement', icon: 'bi-people-fill' }
          ].map((step, i) => (
            <div className="col-6 col-sm-4 col-md-2" key={i}>
              <div className="bg-white rounded-4 shadow-sm py-4 px-2 h-100 transition-all hover-scale">
                <i className={`bi ${step.icon} fs-2 text-danger mb-2`}></i>
                <p className="fw-semibold">{step.label}</p>
              </div>
            </div>
          ))}
        </div>




      </section>


      {/* Why Choose Us */}
      <section className="mb-5">
        <h2 className="text-center mb-4">Why Choose Trustpeople?</h2>
        <div className="row g-4">
          {[
            ['True Human Approach', 'Empathy-driven, inclusive staffing for Non-IT sectors.'],
            ['High-Volume Solutions', 'Rapid access to top talent from our robust network.'],
            ['Speed & Precision', 'Accelerate business goals with smart, fast recruitment.'],
            ['Talent Development', 'V Engage ensures ongoing growth and motivation.'],
            ['20+ Years Experience', 'Trusted industry leader in talent success.'],
            ['Agile Organization', 'Quick adaptability to shifting business needs.']
          ].map(([title, text], i) => (
            <div className="col-md-6 col-lg-4" key={i}>
              <div className="card h-100 border-0 shadow-sm p-3">
                <h5 className="text-danger">{title}</h5>
                <p>{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Job Seekers CTA */}
      <section className="py-5 bg-danger text-white text-center rounded-2 shadow">
        <h2 className="mb-2">JOB SEEKERS</h2>
        <h4 className="fw-light">Start a Career With Trustpeople Today!</h4>
        <button className="btn btn-light mt-3">Apply Now</button>
      </section>

    </div>
  );
};

export default Staffaugmentation;
