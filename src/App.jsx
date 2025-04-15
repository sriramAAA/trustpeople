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

import Ourteam from './pages/Ourteam';
 import Ourvision from './pages/Ourvision';



//  carrer

import Jobopenings from './pages/Jobopenings';
import Internships from './pages/Internships';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        {/* services  */}
         <Route path="/services/engineering-manufacturing" element={<EngineeringManufacturingPage/>} />
         <Route path="/services/Staff-Augmentation" element={<Staffaugmentation/>} />
         <Route path="/services/Managed-Services" element={<Managedservices/>} />
         <Route path="/services/Hire-train-deploy" element={<Hiretraindeploy/>} />
         <Route path="/services/Health-care-staffing" element={<Healthcarestaffing/>} />
        
{/* about  */}

<Route path="/services/Our-vision" element={<Ourvision/>} />
<Route path="/services/Our-team" element={<Ourteam/>} />


{/* carrear */}

<Route path="/Careers/Jobopenings" element={<Jobopenings/>} />

<Route path="/Careers/Internships" element={<Internships/>} />


       
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
