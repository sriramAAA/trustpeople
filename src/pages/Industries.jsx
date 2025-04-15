




import React from 'react';

const Industries = () => {
  const industries = [
    {
      title: 'Customer Service',
      desc: 'Delivering outstanding customer experiences with trained professionals across inbound, outbound, and technical support roles.',
      img: 'https://images.unsplash.com/photo-1581093458798-5df89e3c72ce'
    },
    {
      title: 'Finance',
      desc: 'Supplying experienced financial analysts, accountants, and back-office support staff for top banks and fintech firms.',
      img: 'https://images.unsplash.com/photo-1556740772-1a741367b93e'
    },
    {
      title: 'Healthcare',
      desc: 'Providing non-clinical talent for hospitals and care facilities — including admin, billing, and patient coordination roles.',
      img: 'https://images.unsplash.com/photo-1588776814546-ec7ec3f2c92e'
    },
    {
      title: 'Engineering & Manufacturing',
      desc: 'Specialized workforce for assembly lines, QA, logistics, and technical support, ensuring smooth production cycles.',
      img: 'https://images.unsplash.com/photo-1581091215367-3eea9e71e463'
    },
    {
      title: 'Insurance',
      desc: 'Claims processors, policy service reps, and customer liaisons who streamline insurance operations efficiently.',
      img: 'https://images.unsplash.com/photo-1603969409447-66204c3c7f2c'
    },
    {
      title: 'Recruitment Process Outsourcing',
      desc: 'Complete RPO services managing sourcing, hiring, onboarding, and compliance across volume recruitment needs.',
      img: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df'
    }
  ];

  return (
    <div className="container-fluid py-5">
      {/* Industries Header */}
      <section className="text-center mb-5">
        <h1 className="display-5 fw-bold text-danger">Industries We Serve</h1>
        <p className="lead mx-auto" style={{ maxWidth: '700px' }}>
          We specialize in delivering non-IT talent across diverse sectors. Our tailored workforce solutions ensure operational excellence and adaptability for each unique industry need.
        </p>
        <img
          src="https://images.unsplash.com/photo-1531498860502-84e8a0b8b97c"
          alt="Industry sectors"
          className="img-fluid rounded shadow-sm my-4"
          style={{ maxHeight: '300px', objectFit: 'cover' }}
        />
      </section>

      {/* Industry Cards */}
      <section className="mb-5">
        <div className="row g-4">
          {industries.map((industry, i) => (
            <div className="col-md-6 col-lg-4" key={i}>
              <div className="card h-100 shadow-sm border-0">
                <img src={industry.img} className="card-img-top" alt={industry.title} />
                <div className="card-body">
                  <h5 className="card-title text-danger">{industry.title}</h5>
                  <p className="card-text">{industry.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5 bg-danger text-white text-center rounded-3 shadow">
        <h2 className="mb-3">Transform Your Workforce</h2>
        <p className="lead">Ready to build your team with industry-specialized talent?</p>
        <button className="btn btn-light btn-lg">Get Started</button>
      </section>

    
    </div>
  );
};

export default Industries;
