import React from 'react';

const Whoweare = () => {
  const leaders = [
    {
      name: 'Sidd Ahmed',
      title: 'Founder & CEO',
      img: 'https://images.unsplash.com/photo-1614284508437-07d3f9e8f15d',
      desc: 'Visionary leader driving innovation and excellence in global workforce solutions.'
    },
    {
      name: 'Rohit Bardaiyar',
      title: 'Executive Vice President',
      img: 'https://images.unsplash.com/photo-1603415526960-f7e0328f35d6',
      desc: 'Bringing strategic insight and execution across client engagement and global operations.'
    },
    {
      name: 'David Sexton',
      title: 'AVP – Client Accounts',
      img: 'https://images.unsplash.com/photo-1573497019563-ec0b1eb51090',
      desc: 'Leads large-scale talent acquisition and delivery for enterprise clients worldwide.'
    }
  ];

  const metrics = [
    { title: '4000+', desc: 'Employees Worldwide' },
    { title: '120+', desc: 'Countries Covered' },
    { title: '22k+', desc: 'Jobs Created Globally' },
    { title: '75%', desc: 'Diverse Workforce Representation' },
    { title: '70%', desc: 'Fortune 100 Client Engagements' },
    { title: '98%', desc: 'Project Delivery Success Rate' },
    { title: '12+', desc: 'Years of Leadership Excellence' }
  ];

  const offices = [
    {
      country: 'India',
      img: 'https://images.unsplash.com/photo-1600596542815-ffad4c15336c',
      locations: [
        'jk Technologies Pvt Ltd, Trichy, Tamil Nadu',
        'jk Digital, Novel Tech Park, Bengaluru'
      ]
    },
    {
      country: 'Mexico',
      img: 'https://images.unsplash.com/photo-1580694478140-bd03972bd312',
      locations: ['jk Mexico S.A. de C.V., Hegel #209 INT. 102, C.P. 11570']
    },
    {
      country: 'United States',
      img: 'https://images.unsplash.com/photo-1529429611270-3762f16f4b21',
      locations: ['jk Inc, 11180 State Bridge Rd, Alpharetta, GA']
    },
    {
      country: 'Canada',
      img: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be',
      locations: ['jk Canada Inc., 350 HWY 7 East, Richmond Hill, Ontario']
    }
  ];

  return (
    <div className="container-fluid py-5">
      {/* Section: Company Overview */}
      <section className="text-center mb-5">
        <h1 className="display-5 fw-bold text-danger">Celebrating Excellence</h1>
        <p className="lead mb-4">
          Our global impact, award-winning services, and visionary leadership define our journey in staffing excellence.
        </p>
        <img
          src="https://images.unsplash.com/photo-1629904853716-f0bc54eea481"
          alt="Celebrating Success"
          className="img-fluid rounded shadow-sm mb-4"
          style={{ maxHeight: '300px', objectFit: 'cover' }}
        />
      </section>

      {/* Section: Meet the Leaders */}
      <section className="mb-5">
        <h2 className="text-center mb-4">Meet Our Leadership Team</h2>
        <div className="row g-4">
          {leaders.map((leader, index) => (
            <div className="col-md-4" key={index}>
              <div className="card h-100 border-0 shadow-sm">
                <img src={leader.img} className="card-img-top" alt={leader.name} />
                <div className="card-body text-center">
                  <h5 className="card-title text-danger">{leader.name}</h5>
                  <p className="card-subtitle fw-semibold mb-2">{leader.title}</p>
                  <p className="card-text">{leader.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section: Global Impact Metrics */}
      <section className="bg-light py-5 text-center mb-5">
        <h2 className="mb-4">Company at a Glance</h2>
        <div className="row justify-content-center g-4">
          {metrics.map((metric, index) => (
            <div className="col-6 col-sm-4 col-md-3" key={index}>
              <div className="bg-white rounded-4 shadow-sm p-4 h-100">
                <h4 className="text-danger fw-bold">{metric.title}</h4>
                <p className="mb-0">{metric.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section: Global Offices */}
      <section className="mb-5">
        <h2 className="text-center mb-4">Global Presence</h2>
        <div className="row g-4">
          {offices.map((office, index) => (
            <div className="col-md-6 col-lg-3" key={index}>
              <div className="card h-100 shadow border-0">
                <img src={office.img} className="card-img-top" alt={office.country} />
                <div className="card-body">
                  <h5 className="card-title text-danger">{office.country}</h5>
                  <ul className="small ps-3">
                    {office.locations.map((loc, i) => (
                      <li key={i}>{loc}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section: Our Commitment */}
      <section className="text-center py-5 bg-danger text-white rounded-2 shadow">
        <h2 className="mb-2">Driven by Passion, Powered by People</h2>
        <p className="lead mx-auto mb-3" style={{ maxWidth: '700px' }}>
          We are committed to creating opportunities, enabling inclusive hiring, and transforming businesses with elite talent.
        </p>
        <button className="btn btn-light btn-lg">Join Our Mission</button>
      </section>
    </div>
  );
};

export default Whoweare;
