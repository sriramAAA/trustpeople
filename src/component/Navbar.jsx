import React from 'react';
import { Link } from 'react-router-dom';
import EngineeringManufacturingPage from '../pages/EngineeringManufacturingPage ';

const Navbar = () => {
  return (
    <>
      {/* Top Info Bar */}
      <div className="bg-danger text-white py-1 small">
        <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center text-center text-md-start">
          <div>
            <i className="fas fa-phone-alt me-2"></i> +91 98765 43210
          </div>
          <div>
            <i className="fas fa-envelope me-2"></i> info@jkcompany.com
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="navbar navbar-expand-lg bg-light sticky-top border-bottom shadow-sm">
        <div className="container">
          {/* Brand */}
          <a className="navbar-brand d-flex align-items-center text-danger fw-semibold text-uppercase" href="/">
            <img
              src="/images/logo.png"
              alt="JK Logo"
              width="40"
              height="40"
              className="me-2 rounded-circle"
              onError={(e) => { e.target.src = "https://via.placeholder.com/40"; }}
            />
            JK Company
          </a>

          {/* Toggler */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Nav Links */}
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto gap-4">

              <li className="nav-item">
                <a className="nav-link text-dark" href="/">Home</a>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-dark" href="#" id="servicesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Services
                </a>
                <ul className="dropdown-menu" aria-labelledby="servicesDropdown">
                  <li><Link className="dropdown-item" to="/services/engineering-manufacturing">Engineering & Manufacturing</Link></li>
                  <li><Link className="dropdown-item" to="/services/staff-augmentation">Staff Augmentation</Link></li>
                  <li><Link className="dropdown-item" to="/services/managed-services">Managed Services</Link></li>
                  <li><Link className="dropdown-item" to="/services/hire-train-deploy">Hire-Train-Deploy</Link></li>
                  <li><Link className="dropdown-item" to="/services/healthcare-staffing">Healthcare Staffing Solutions</Link></li>
                </ul>
                </li>
                {/* Services */}


                {/* About Us */}
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle text-dark" href="#" id="aboutDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    About Us
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="aboutDropdown">
                    <li><a className="dropdown-item" href="/about/vision">Our Vision</a></li>
                    <li><a className="dropdown-item" href="/about/team">Our Team</a></li>
                  </ul>
                </li>

                {/* Careers */}
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle text-dark" href="#" id="careersDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Careers
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="careersDropdown">
                    <li><a className="dropdown-item" href="/careers/openings">Job Openings</a></li>
                    <li><a className="dropdown-item" href="/careers/internships">Internships</a></li>
                  </ul>
                </li>

                <li className="nav-item">
                  <a className="nav-link text-dark" href="/contact">Contact</a>
                </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
