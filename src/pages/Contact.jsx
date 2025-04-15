import React from 'react'

const Contact = () => {
  return (
    <div>

<div className="container py-5">
      <div className="col-lg-10 mx-auto bg-white p-4 rounded shadow">
        <h3 className="text-center text-danger mb-4">Connect With Trustpeople</h3>
        <form >
          <div className="row g-3">
            <div className="col-md-6">
              <label className="form-label">First Name*</label>
              <input
                type="text"
                name="firstName"
                className="form-control"
                required
               
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Last Name*</label>
              <input
                type="text"
                name="lastName"
                className="form-control"
                required
               
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Business Email*</label>
              <input
                type="email"
                name="businessEmail"
                className="form-control"
                required
                placeholder="example@company.com"
               
              />
              <small className="text-muted">Business Email Only</small>
            </div>

            <div className="col-md-6">
              <label className="form-label">Phone Number*</label>
              <input
                type="tel"
                name="phone"
                className="form-control"
                required
                placeholder="+91 98765 43210"
          
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Locations*</label>
              <select
                name="location"
                className="form-select"
                required
          
              >
                <option value="">Please Select</option>
                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="Canada">Canada</option>
                <option value="Europe">Europe</option>
              </select>
            </div>

            <div className="col-md-6">
              <label className="form-label">I am looking for*</label>
              <select
                name="inquiryType"
                className="form-select"
                required
             
              >
                <option value="">Please Select</option>
                <option value="Hiring Services">Hiring Services</option>
                <option value="Staff Augmentation">Staff Augmentation</option>
                <option value="Job Opportunity">Job Opportunity</option>
                <option value="Consultation">Consultation</option>
              </select>
            </div>

            <div className="col-12">
              <label className="form-label">Please provide a brief overview of your requirements*</label>
              <textarea
                name="message"
                className="form-control"
                rows="4"
                required
                placeholder="Briefly describe your hiring or job needs..."
              
              ></textarea>
            </div>
          </div>

          <div className="text-center mt-4">
            <button type="submit" className="btn btn-danger btn-lg">Submit</button>
          </div>
        </form>
      </div>
    </div>

    </div>
  )
}

export default Contact