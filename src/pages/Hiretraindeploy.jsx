import React from 'react';
// import htdImage from '../assets/htd-overview.jpg'; 

const Hiretraindeploy = () => {
  return (
    <div className="container my-5">
      {/* Intro */}
      <div className="text-center mb-5">
        <h2 className="fw-bold text-danger">Hire-Train-Deploy Model</h2>
        <p className="lead text-muted">Introducing a new type of recruitment model.</p>
        <button className="btn btn-danger mt-2">Build Your Future Team</button>
      </div>

      {/* Overview */}
      <section className="mb-5 p-5  rounded-3 bg-danger-subtle">
        <div className="row align-items-center">
          <div className="col-md-6">
            <img src="" alt="HTD Overview" className="img-fluid rounded shadow" />
          </div>
          <div className="col-md-6">
            <h3 className="mb-3">HTD Solution Overview</h3>
            <p>
              Trustpeople’s HTD solution sources, trains, and deploys skilled talent to meet your dynamic staffing needs.
              This end-to-end workforce management model ensures your team is prepared and productive from day one.
            </p>
            <p>
              Our approach allows businesses to build custom teams from the ground up. We understand that technical expertise alone
              doesn’t make a great hire. That’s why our candidates are also trained on your processes, culture, and values to fit
              right in and drive impact from day one.
            </p>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="mb-5">
        <h3 className="text-center mb-4">Capabilities</h3>
        <div className="row g-4">
          {[
            {
              title: 'Tailored Recruitment',
              desc: 'We match top talent with your culture and job needs using precise recruitment strategies.',
              icon: 'bi-people-fill',
            },
            {
              title: 'Customized Training Programs',
              desc: 'Our expert-led programs develop both technical and soft skills tailored to your business.',
              icon: 'bi-mortarboard-fill',
            },
            {
              title: 'Seamless Deployment',
              desc: 'Trained candidates are integrated smoothly with minimal disruption.',
              icon: 'bi-rocket-takeoff-fill',
            },
            {
              title: 'Cost-Efficiency',
              desc: 'Our HTD process cuts recruitment costs and boosts productivity from the start.',
              icon: 'bi-cash-stack',
            },
          ].map((item, idx) => (
            <div className="col-md-6 col-lg-3" key={idx}>
              <div className="p-4 bg-light border rounded shadow-sm h-100 text-center">
                <i className={`bi ${item.icon} fs-1 text-danger mb-3`}></i>
                <h5>{item.title}</h5>
                <p className="text-muted">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Training Methodology */}
      <section className="mb-5 bg-danger p-5 rounded">
  <h3 className="text-center text-white mb-4">Training Methodology</h3>
  <div className="row g-4">
    {[
      'Classroom Training',
      'Hands-On Workshops',
      'E-Learning Modules',
      'On-the-Job Training',
      'Continuous Assessment & Feedback',
      'Mentorship Programs', // <-- New Card
    ].map((step, idx) => (
      <div className="col-md-4" key={idx}>
        <div className="bg-white border rounded p-3 shadow-sm h-100">
          <h6 className="fw-bold">{step}</h6>
          <p className="text-muted mb-0">
            {step === 'Classroom Training'
              ? 'Structured sessions for theory and core concepts.'
              : step === 'Hands-On Workshops'
              ? 'Interactive sessions applying learning to real-world cases.'
              : step === 'E-Learning Modules'
              ? 'Self-paced digital learning to complement classroom sessions.'
              : step === 'On-the-Job Training'
              ? 'In-workplace learning to ensure role adaptability.'
              : step === 'Continuous Assessment & Feedback'
              ? 'Regular evaluations to monitor and guide performance.'
              : 'One-on-one guidance from experienced mentors for continuous growth.'}
          </p>
        </div>
      </div>
    ))}
  </div>
</section>


      {/* Training Components */}
      <section className="mb-5">
        <h3 className="text-center mb-4">Training Components</h3>
        <div className="row g-4">
          {[
            {
              title: 'Technical Skills Development',
              desc: 'Mastery of tools and technical concepts for job success.',
              icon: 'bi-code-slash',
            },
            {
              title: 'Business Processes & Standards',
              desc: 'Training in workflows, regulations, and best practices.',
              icon: 'bi-gear-wide-connected',
            },
            {
              title: 'Customer Service Excellence',
              desc: 'Improved communication and issue resolution skills.',
              icon: 'bi-chat-left-quote-fill',
            },
            {
              title: 'Organizational Culture',
              desc: 'Promotes inclusivity, collaboration, and shared values.',
              icon: 'bi-building-check',
            },
          ].map((comp, idx) => (
            <div className="col-md-6 col-lg-3" key={idx}>
              <div className="p-4 bg-light border rounded shadow-sm text-center h-100">
                <i className={`bi ${comp.icon} fs-1 text-danger mb-3`}></i>
                <h6>{comp.title}</h6>
                <p className="text-muted">{comp.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center mt-5">
        <h3>JOB SEEKERS</h3>
        <p className="lead">Start a Career With Trustpeople Today!</p>
        <button className="btn btn-danger btn-lg">Apply Now</button>
      </section>
    </div>
  );
};

export default Hiretraindeploy;
