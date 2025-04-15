import React from 'react';

const Healthcarestaffing = () => {
  const solutions = [
    {
      title: 'Permanent & Contract Staffing',
      desc: 'Hire dedicated professionals for long-term success or fulfill temporary project needs while maintaining care quality.',
      img: 'https://images.unsplash.com/photo-1576765607924-2bade9c4ff0c?auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'Travel Healthcare Staffing',
      desc: 'Access a nationwide network of travel nurses and specialists to fill urgent gaps without disruption.',
      img: 'https://images.unsplash.com/photo-1588776814546-ec6fba331b6c?auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'Per Diem Staffing',
      desc: 'On-demand talent pool ready to meet daily shifts and operational needs with flexibility.',
      img: 'https://images.unsplash.com/photo-1576765971527-198d400c21a9?auto=format&fit=crop&w=800&q=60'
    }
  ];

  const benefits = [
    {
      title: 'Tailored Talent Strategies',
      desc: 'We align staffing to your long-term strategy, not just quick fills.',
      icon: 'bi-bullseye'
    },
    {
      title: 'Speed Without Compromise',
      desc: 'Quick turnaround with our vetted talent pool, ensuring uninterrupted patient care.',
      icon: 'bi-lightning-charge-fill'
    },
    {
      title: 'Cost-Effective Staffing',
      desc: 'Flexible pricing models and optimized spend without sacrificing quality.',
      icon: 'bi-cash-coin'
    },
    {
      title: 'Advanced Recruitment Tech',
      desc: 'Modern tools and insights give you full transparency and efficiency.',
      icon: 'bi-cpu-fill'
    }
  ];

  return (
    <div className="container my-5">
      {/* Hero Section */}
      <div className="text-center mb-5">
        <h2 className="fw-bold text-danger">Healthcare Staffing Services</h2>
        <p className="lead text-muted">
          Building stronger healthcare teams to improve patient care, streamline operations, and drive sustainable growth.
        </p>
        <button className="btn btn-danger mt-2">Request Staffing Solutions</button>
      </div>

      {/* Solutions Overview */}
      <section className="mb-5">
        <h3 className="text-center mb-4">Expert Healthcare Staffing Tailored to Your Needs</h3>
        <p className="text-center mx-auto" style={{ maxWidth: '750px' }}>
          We offer staffing solutions designed specifically for the healthcare industry. Whether you're filling permanent roles,
          seeking travel professionals, or looking for flexible on-demand talent, we ensure cultural alignment and clinical excellence.
        </p>
      </section>

      {/* Customized Staffing Solutions */}
      <section className="mb-5">
        <div className="row g-4">
          {solutions.map((item, idx) => (
            <div className="col-md-6 col-lg-4" key={idx}>
              <div className="p-4 bg-light border rounded shadow-sm h-100 d-flex flex-column text-center">
                <img src={item.img} alt={item.title} className="img-fluid mb-3 rounded" style={{ height: '180px', objectFit: 'cover', width: '100%' }} />
                <h5>{item.title}</h5>
                <p className="text-muted flex-grow-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="mb-5">
        <h3 className="text-center mb-4">Why Choose Us?</h3>
        <div className="row g-4">
          {benefits.map((item, idx) => (
            <div className="col-md-6 col-lg-3" key={idx}>
              <div className="p-4 bg-white border rounded shadow-sm h-100 d-flex flex-column text-center">
                <i className={`bi ${item.icon} fs-1 text-danger mb-3`}></i>
                <h6>{item.title}</h6>
                <p className="text-muted flex-grow-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3-Step Process */}
      <section className="bg-danger-subtle p-5 rounded mb-5">
        <h3 className="text-center mb-4">Our 3-Step Process</h3>
        <div className="row g-4">
          {[
            {
              step: 'Tailored Workforce Planning',
              desc: 'We analyze your staffing needs and goals to design a strategy for success.'
            },
            {
              step: 'Access Top Talent',
              desc: 'We recruit from a wide network, selecting candidates for skill and cultural fit.'
            },
            {
              step: 'Ongoing Partnership',
              desc: 'We continue supporting the integration and performance of placed candidates.'
            }
          ].map((item, idx) => (
            <div className="col-md-4 " key={idx}>
              <div className="p-4 bg-white  border rounded shadow-sm h-100">
                <h6 className="fw-bold mb-2">{`${idx + 1}. ${item.step}`}</h6>
                <p className="text-muted mb-0">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center mt-5">
        <h3>JOB SEEKERS</h3>
        <p className="lead">Start a Career Today!</p>
        <button className="btn btn-danger btn-lg">Apply Now</button>
      </section>
    </div>
  );
};

export default Healthcarestaffing;
