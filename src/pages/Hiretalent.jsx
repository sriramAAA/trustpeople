import React from 'react'

const Hiretalent = () => {
  return (
    <div>



<section className="container-fluid bg-light py-5">
  <div className="row justify-content-center">
    <div className="col-md-10 text-center mb-4">
      <h2 className="display-5 fw-bold text-danger">The Talent You Need, Without the Wait</h2>
      <p className="lead mx-auto" style={{ maxWidth: '700px' }}>
        Simplify your recruitment process with tailored services designed around your goals.
        Share your details below and one of our staffing specialists will connect with you
        for a personalized consultation.
      </p>
    </div>
  </div>

  <div className="row justify-content-center">
    <div className="col-md-8">
      <div className="card p-4 shadow border-0 rounded-4">
        <form>
          <div className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Full Name</label>
              <input type="text" className="form-control" placeholder="John Doe" />
            </div>
            <div className="col-md-6">
              <label className="form-label">Company Name</label>
              <input type="text" className="form-control" placeholder="ABC Corp" />
            </div>
            <div className="col-md-6">
              <label className="form-label">Email Address</label>
              <input type="email" className="form-control" placeholder="john@example.com" />
            </div>
            <div className="col-md-6">
              <label className="form-label">Phone Number</label>
              <input type="tel" className="form-control" placeholder="+91 (123) 456-7890" />
            </div>
            <div className="col-12">
              <label className="form-label">Hiring Needs / Message</label>
              <textarea className="form-control" rows="4" placeholder="Briefly describe your staffing needs..."></textarea>
            </div>
            <div className="col-12 text-center">
              <button type="submit" className="btn btn-danger btn-lg px-5 mt-3">
                Request Consultation
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>


    </div>
  )
}

export default Hiretalent