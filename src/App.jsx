import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './pages/Home';
import Footer from './component/Footer';

// service
import EngineeringManufacturingPage from './pages/EngineeringManufacturingPage ';
import Staffaugmentation from './pages/Staffaugmentation';
import Managedservices from './pages/Managedservices';
import Hiretraindeploy from './pages/Hiretraindeploy';
import Healthcarestaffing from './pages/Healthcarestaffing ';

// about us

import Whoweare from './pages/Whoweare';
import Industries from './pages/Industries';
import Blogs from './pages/Blogs';
import Casestudies from './pages/Casestudies';



//  carrer

import Hiretalent from './pages/Hiretalent';
import FindAjob from './pages/FindAjob';

// contact

import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        {/* services  */}
        <Route path="/services/engineering-manufacturing" element={<EngineeringManufacturingPage />} />
        <Route path="/services/Staff-Augmentation" element={<Staffaugmentation />} />
        <Route path="/services/Managed-Services" element={<Managedservices />} />
        <Route path="/services/Hire-train-deploy" element={<Hiretraindeploy />} />
        <Route path="/services/Health-care-staffing" element={<Healthcarestaffing />} />

        {/* about  */}

        <Route path="/services/Who-we-are" element={<Whoweare />} />
        <Route path="/services/Industries" element={<Industries />} />
        <Route path="/services/Blogs" element={<Blogs />} />
        <Route path="/services/Casestudies" element={<Casestudies />} />







        {/* carrear */}

        <Route path="/Careers/Hiretalent" element={<Hiretalent />} />
        <Route path="/Careers/Find-a-job" element={<FindAjob />} />


        {/* contact */}
       
        <Route path="/Contact" element={<Contact />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
