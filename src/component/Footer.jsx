import React from 'react'

const Footer = () => {
  return (
    <div>




        {/* Footer Section */}
<footer className="text-center pt-5 bg-white">
  <div className="container">
    {/* Logo */}
    <div className="mb-3">
      <img src="/path-to-logo.png" alt="JK Logo" style={{ width: '60px' }} />
    </div>

    {/* Navigation Links */}
    <ul className="list-inline mb-3">
      <li className="list-inline-item mx-3"><a href="#" className="text-dark text-decoration-none">Home</a></li>
      <li className="list-inline-item mx-3"><a href="#" className="text-dark text-decoration-none">Service</a></li>
      <li className="list-inline-item mx-3"><a href="#" className="text-dark text-decoration-none">About us</a></li>
      <li className="list-inline-item mx-3"><a href="#" className="text-dark text-decoration-none">Careers</a></li>
      <li className="list-inline-item mx-3"><a href="#" className="text-dark text-decoration-none">Contact</a></li>
    </ul>
  </div>

  {/* Bottom bar */}
  <div className="py-3 text-white" style={{ backgroundColor: '#8B0000' }}>
    <p className="mb-2">© 2025 JK Company. All Rights Reserved</p>
    {/* Social Icons */}
    <div>
      <a href="#" className="text-white mx-2"><i className="fa-brands fa-facebook-f"></i></a>
      <a href="#" className="text-white mx-2"><i className="fab fa-instagram"></i></a>
      <a href="#" className="text-white mx-2"><i className="fab fa-linkedin"></i></a>
    </div>
  </div>
</footer>








    </div>
  )
}

export default Footer