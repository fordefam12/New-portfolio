import './App.scss'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/contact'
import Resume from './components/Resume/Resume'
import Profile from './components/Porftolio/Profile' 
import ParticlesContainer from './components/particles/ParticlesContainer'
import Projects from './components/Projects/Projects'
// import Testing from './components/TestingPage/Testing.jsx'
import GridRotator from './components/TestingPage/Testing.jsx'
// import MagicGrid from './components/Projects/Projects'
// import ErrorPage from './components/Error'




function App() {
  // const showErrorPage = window.location.pathname === '/error';

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="About" element={<About />} />
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="Resume" element={<Resume />} />
          <Route path="Profile" element={<Profile />} />
          <Route path="Projects" element={<Projects/>} />
          <Route path="Testing" element={<GridRotator />} />
        </Route>
      </Routes>
        <div className='centered-particles-page'>
          <div className='particles-container'>
            <ParticlesContainer />
          </div>
        </div>
    </div>
  );
}

export default App;


