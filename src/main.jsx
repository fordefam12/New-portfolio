import ReactDOM from 'react-dom/client'
// Bringing in the required imports from 'react-router-dom' to set up application routing behavior
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import App from './App.jsx'
import Error from './components/Error.jsx'
import Contact from './pages/contact/Contact.jsx'
import About from './pages/About'
import Profile from './components/Porftolio/Profile.jsx'
import Resume from './components/Resume/Resume.jsx'
import Home from './components/Home/index.jsx'
import MagicGrid from './components/Projects/Projects.jsx'
import Testing from './components/TestingPage/Testing.jsx'

// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <Error />,
    element: <App />,
    
    children: [
      {
        path: '/About',
        element: <About />,
      },
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/Profile',
        element: <Profile />,
      },
      {
        path: '/Contact',
        element: <Contact />,
      },
      {
        path: '/Resume',
        element: <Resume />,
      },
      {
        path: '/Projects',
        element: <MagicGrid />,
      },
      {
        path: '/Testing',
        element: <Testing />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
