import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Ensure this is imported for icons

const Managedservices = () => {
  return (
    <div className="managed-services bg-light">
      {/* Hero Section */}
      <section className="bg-dark text-white text-center py-5">
        <div className="container">
          <h1 className="display-5 fw-bold">Managed Services</h1>
          <p className="lead mb-4">Bringing expert managed services to you, with all the care you deserve.</p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </section>

      {/* Overview Section */}
      <section className="container py-5 text-center">
        <h2 className="mb-4">Managed Services Overview</h2>
        <p className="text-muted mb-4">
          Managing teams requires more than oversight—it demands insight. At Trustpeople, we align hiring, tracking, and growth
          strategies to keep your operations smooth and scalable.
        </p>
        <div className="row justify-content-center">
          <div className="col-md-10">
            <p>
              Whether you're expanding into new markets or navigating industry changes, our 20+ years of experience helps you scale
              without compromising on quality. We're here to build adaptable, high-performing teams for the future.
            </p>
          </div>
        </div>
      </section>

      {/* Why We Are Different */}
      <section className="bg-white py-5">
        <div className="container text-center">
          <h2 className="mb-5 text-danger">Why We Are Different</h2>
          <div className="row g-4">
            {[
              { icon: 'bi-eye', title: 'Deep Workforce Visibility', desc: 'Real-time insights to grow your team with clarity and confidence.' },
              { icon: 'bi-shield-check', title: 'Compliance That Works', desc: 'Seamless, stress-free compliance integrated into your operations.' },
              { icon: 'bi-file-earmark-text', title: 'Statement of Work (SOW)', desc: 'Crystal-clear direction, responsibilities, and timelines.' },
              { icon: 'bi-lightbulb', title: 'Skillful, Not Just Cost-Effective', desc: 'Talent that grows with you—85% onboard within 2 weeks.' },
            ].map((item, i) => (
              <div className="col-md-3" key={i}>
                <div className="card border-0 shadow-sm h-100 text-center p-4">
                  <i className={`bi ${item.icon} text-primary fs-1 mb-3`}></i>
                  <h5 className="fw-semibold">{item.title}</h5>
                  <p className="text-muted">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Make It Happen */}
      <section className="py-5 bg-danger-subtle">
        <div className="container text-center">
          <h2 className="mb-5">How We Make It Happen</h2>
          <div className="row g-4">
            {[
              { icon: 'bi-person-badge', title: 'Finding the Right Fit', desc: 'We align skills and values—not just resumes—with your culture.' },
              { icon: 'bi-people', title: 'Seamless Integration', desc: 'Custom onboarding for aligned goals from day one.' },
              { icon: 'bi-graph-up-arrow', title: 'Continuous Improvement', desc: 'Ongoing assessments and insights to help teams grow.' },
            ].map((item, i) => (
              <div className="col-md-4" key={i}>
                <div className="card border-0 shadow-sm p-4 h-100">
                  <i className={`bi ${item.icon} fs-2 text-primary mb-3`}></i>
                  <h5 className="fw-semibold">{item.title}</h5>
                  <p className="text-muted">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology & VMS Section */}
      <section className="py-5">
        <div className="container text-center">
          <h2 className="mb-5">Our Edge with Technology</h2>
          <div className="row g-4">
            {[
              {
                icon: 'bi-diagram-3',
                title: 'Vendor Management Systems (VMS)',
                desc: 'Track vendors, contracts, and updates in real time. Boost efficiency, cut costs, and stay compliant.',
              },
              {
                icon: 'bi-check2-shield',
                title: 'Risk-Free Compliance',
                desc: 'We take care of the red tape so you can move forward with peace of mind.',
              },
            ].map((item, i) => (
              <div className="col-md-6" key={i}>
                <div className="card border-0 shadow-sm h-100 p-4">
                  <i className={`bi ${item.icon} text-primary fs-1 mb-3`}></i>
                  <h5 className="fw-semibold">{item.title}</h5>
                  <p className="text-muted">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA for Job Seekers */}
      <section className="bg-danger-subtle text-white text-center py-5">
        <div className="container">
          <h2 className="mb-3 text-danger">Start a Career With Trustpeople Today!</h2>
          <button className="btn btn-outline-danger">Apply Now</button>
        </div>
      </section>
    </div>
  );
};

export default Managedservices;
