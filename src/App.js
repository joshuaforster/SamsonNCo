
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from "./Components/layout"
import Home from "./Pages/home"
import Bathroom from "./Pages/bathroom"
import Kitchen from "./Pages/kitchen"
import Projects from './Pages/projects';
import ProjectDetails from './Pages/projectdetails';
import Contact from './Pages/contact';
import FAQ from './Pages/faq';
import ImageGallery from './Pages/gallery';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path="/bathroom" element={<Bathroom />} />
          <Route path="/kitchen" element={<Kitchen />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/gallery" element={<ImageGallery />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
