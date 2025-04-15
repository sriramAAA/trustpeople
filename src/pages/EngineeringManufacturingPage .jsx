import React from 'react';

const EngineeringManufacturingPage = () => (
  <div className="engineering-manufacturing container py-5">
    {/* Hero Section */}
    <section className="text-center mb-5">
      <h1 className="display-4 fw-bold text-danger">Engineering & Manufacturing</h1>
      <p className="lead">Connecting Businesses with Specialized Talent</p>
      <p className="text-muted mx-auto" style={{ maxWidth: '700px' }}>
        At <strong>Trustpeople</strong>, we deliver comprehensive staffing solutions for the engineering and manufacturing sectors—addressing your unique workforce challenges with precision, innovation, and expertise.
      </p>
      <button className="btn btn-lg btn-danger mt-3">Get Started</button>
    </section>

    {/* Workforce Challenges */}
    <section className="mb-5 ">
      <h2 className="mb-4 text-center text-dark">Your Workforce Challenges, Solved</h2>
      <div className="row justify-content-center">
        <div className="col-md-10">
          <ul className="list-group list-group-flush shadow-sm">
            {[
              "Limited access to technology.",
              "Location-specific constraints and long commutes.",
              "Attrition for marginal pay increases.",
              "Skill gaps in specialized areas.",
              "High-volume ramp-ups for time-sensitive projects."
            ].map((item, idx) => (
              <li key={idx} className="list-group-item">
                ✅ {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>

    {/* Tailored Solutions */}
    <section className="mb-5">
      <h2 className="text-center mb-4 text-dark">Our Tailored Solutions</h2>
      <div className="row">
        {[
          {
            title: "Technological Access",
            text: "Mobile-friendly application processes to widen candidate outreach.",
            color: "primary"
          },
          {
            title: "Local Recruitment",
            text: "Recruit talent through local career fairs and grassroots marketing.",
            color: "success"
          },
          {
            title: "Skill Enhancement",
            text: "Upskilling programs and specialized training modules.",
            color: "warning"
          },
          {
            title: "Retention Strategies",
            text: "Engagement plans (V-Engage), and recognition programs.",
            color: "danger"
          }
        ].map((card, index) => (
          <div key={index} className="col-md-3 mb-4">
            <div className={`card h-100 text-white shadow`}>
              <img src="" className="card-img-top " alt={card.title} />
              <div className="card-body">
                <h5 className="card-title text-danger">{card.title}</h5>
                <p className="card-text text-black">{card.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* Team Expertise */}
    <section className="mb-5">
      <h2 className="text-center text-dark mb-4">Team Expertise</h2>
      <div className="row">
        <div className="col-md-6">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">📍 Onsite Field Recruiters: Conduct career fairs, coordinate with clients, and manage pipelines.</li>
            <li className="list-group-item">🌐 Offshore Recruiters: Source and screen candidates via online platforms.</li>
            <li className="list-group-item">📋 Site-Specific Coordinators: Manage onboarding, offboarding, and client relationships.</li>
          </ul>
        </div>
        <div className="col-md-6">
          <h4 className="mt-3 mt-md-0">Technology-Driven Hiring</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">🤖 AI-powered screening tools for streamlined resume reviews.</li>
            <li className="list-group-item">🔗 Partnerships with Indeed and niche job boards for wide reach.</li>
          </ul>
        </div>
      </div>
    </section>

    {/* Industries We Serve */}
    <section className="mb-5 text-center">
      <h2 className="text-dark mb-4">Industries We Serve</h2>
      <div className="d-flex flex-wrap justify-content-center gap-3">
        {[
          "Construction and Skilled Trades",
          "Manufacturing and Production",
          "Transportation and Logistics",
          "Energy and Utilities",
          "Food Production and Processing"
        ].map((industry, idx) => (
          <span key={idx} className="badge bg-danger fs-6 py-2 px-3">
            {industry}
          </span>
        ))}
      </div>
    </section>

    {/* Why Choose Us */}
    <section className="mb-5">
      <h2 className="text-center text-dark mb-4">Why Choose Trustpeople</h2>
      <div className="row justify-content-center">
        <div className="col-md-10">
          <ul className="list-group list-group-flush shadow-sm">
            <li className="list-group-item"><strong>Tailored Talent Solutions:</strong> Customized staffing approach</li>
            <li className="list-group-item"><strong>Comprehensive Industry Knowledge:</strong> Deep understanding of engineering and manufacturing</li>
            <li className="list-group-item"><strong>Flexible Staffing Models:</strong> Project-based or long-term hires</li>
            <li className="list-group-item"><strong>Proven Track Record:</strong> Success with Fortune 100 companies</li>
          </ul>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="text-center mt-5">
      <h2 className="mb-3">Get Started Today!</h2>
      <button className="btn btn-lg btn-outline-danger">Contact Us</button>
    </section>
  </div>
);

export default EngineeringManufacturingPage;
