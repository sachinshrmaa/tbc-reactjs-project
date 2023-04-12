
import About from './About'
import Contact from './Contact';
import Hero from './Hero'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Hero />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </Router>

      {/* <Hero />

      <About />

      <Contact /> */}
    </div>
  );
}

export default App;
