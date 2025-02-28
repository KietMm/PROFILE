// import { useState } from 'react'
// import './App.css'
// import profilePic from './assets/react.svg'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from "./pages/Projects";
import NotFound from "./pages/NotFound";
// import Projects from './pages/Projects';
// import About from "./pages/About";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MainLayout>
    </Router>
  )
}

export default App
