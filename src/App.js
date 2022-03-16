import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header.js"
import Footer from "./Components/Footer/Footer.js"
import Hero from "./Components/Hero/Hero.js"
import JoblistReed from "./Components/Joblist/JoblistReed.js"
import JoblistAer from "./Components/Joblist/JoblistAer.js"
import Jobdetails from "./Components/Jobdetails/Jobdetails.js"
import Postjob from "./Components/Postjob/Postjob.js"
import About from "./Components/About/About.js"
function App() {
  return (
    <Router>
      <Header/>
      <Routes>
          <Route exact path="/" element={<Hero/>} />
          <Route exact path="/job-list/reedcouk" element={<JoblistReed/>} />
          <Route exact path="/job-list/arbeitnow" element={<JoblistAer/>} />
          <Route exact path="/job-details" element={<Jobdetails/>} />
          <Route exact path="/job-post" element={<Postjob/>} />
          <Route exact path="/about" element={<About/>} />
      </Routes>
      <Footer/>
    </Router>  
    
  );
}

export default App;
