import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Navigation from './components/Navigation/Navigation';
import Blogs from './components/Blogs/Blogs';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import ProjectDetail from './components/ProjectDetail/ProjectDetail';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/projectDetail/:id" element={<ProjectDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
