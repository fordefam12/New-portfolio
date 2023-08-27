import './App.scss'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
        {/* ADD the index back */}
        <Route index element={<Home />} />
        </Route>
      </Routes>
      
    </>
  )
}

export default App
