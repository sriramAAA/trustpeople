import React from 'react'
const Casestudies = () => {
    const cases = [
      {
        title: 'Rapid Insurance Staffing in 8 Seconds',
        date: 'Jan 29, 2025',
        desc:
          'During a nationwide natural disaster, a Fortune 500 insurance company urgently needed qualified claims processors. Trustpeople stepped in with lightning-fast response — deploying 42 specialized agents in just 8 seconds. The effort reduced downtime and allowed the client to maintain exceptional service levels during a critical time.',
        img: 'https://images.unsplash.com/photo-1556740749-887f6717d7e4',
        link: '#'
      },
      {
        title: 'Global BPO Success: 350+ Hires in 3 Weeks',
        date: 'Dec 10, 2024',
        desc:
          'A global BPO giant faced a massive expansion challenge across Latin America and Southeast Asia. Trustpeople delivered a tailored recruitment strategy that sourced, vetted, and placed over 350 support professionals in just 21 days — accelerating business continuity and onboarding success.',
        img: 'https://images.unsplash.com/photo-1621821248496-09203df9e6e1',
        link: '#'
      },
      {
        title: 'Hiring HVAC & Electrical Engineers at Scale',
        date: 'Dec 10, 2024',
        desc:
          'A top-tier energy and infrastructure firm needed niche engineering talent across the U.S. Trustpeople’s deep technical recruiting network enabled rapid placement of HVAC, plumbing, and electrical engineers — ensuring projects moved forward without delay.',
        img: 'https://images.unsplash.com/photo-1581090700227-3faaa94d7a4e',
        link: '#'
      },
      {
        title: 'EV Leader Gears Up With 200+ Workforce Hires',
        date: 'Dec 10, 2024',
        desc:
          'A major electric vehicle manufacturer with operations in the U.S. and Europe sought engineering, design, and manufacturing talent for four Gigafactories. Trustpeople assembled a cross-functional hiring team and delivered 200+ professionals — enabling on-time production milestones.',
        img: 'https://images.unsplash.com/photo-1606326608692-c7d54e13a6da',
        link: '#'
      },
      {
        title: '130+ Financial Services Reps in 3 Weeks',
        date: 'Dec 10, 2024',
        desc:
          'With open enrollment season approaching, a financial services client needed rapid support. Trustpeople built and deployed a customized recruitment pipeline, hiring 130+ retirement plan service reps in under 3 weeks. Performance KPIs improved by 38% post-hire.',
        img: 'https://images.unsplash.com/photo-1581091012184-7fbae7f91bcd',
        link: '#'
      }
    ];
  
    return (
      <div className="container-fluid py-5">
        <section className="text-center mb-5">
          <h2 className="display-5 fw-bold text-danger">Case Studies</h2>
          <p className="lead mx-auto" style={{ maxWidth: '750px' }}>
            Real-world success stories that demonstrate how Trustpeople helps businesses scale fast, hire smart, and lead with excellence.
          </p>
        </section>
  
        <div className="row g-4">
          {cases.map((item, i) => (
            <div className="col-md-6 col-lg-4" key={i}>
              <div className="card h-100 shadow-sm border-0">
                <img
                  src={item.img}
                  alt={item.title}
                  className="card-img-top"
                  style={{ height: '220px', objectFit: 'cover' }}
                />
                <div className="card-body d-flex flex-column">
                  <small className="text-muted mb-2">{item.date} | Case Study</small>
                  <h5 className="text-danger">{item.title}</h5>
                  <p className="card-text">{item.desc}</p>
                  <a href={item.link} className="mt-auto btn btn-outline-danger">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
  
        {/* CTA Section */}
        <section className="text-center mt-5">
          <h4 className="fw-bold mb-3">Let’s Discuss Your Hiring Needs</h4>
          <p className="lead">
            Call us at <a href="tel:9792362377" className="text-danger fw-bold">979-236-2377</a> or{' '}
            <a href="#" className="text-danger fw-bold">Request a Quote</a>
          </p>
          <button className="btn btn-danger">Schedule an Appointment</button>
        </section>
      </div>
    );
  };

export default Casestudies





