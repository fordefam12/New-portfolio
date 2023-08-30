import './index.scss'
import Sidebar from '../Sidebar'
// import ParticlesContainer from '../particles/ParticlesContainer'


import { Outlet } from 'react-router-dom'
import { Dna } from 'react-loader-spinner'
const Layout = () => {
  return (
    <div className="APP layout ">
      
      <Sidebar />
      
      <div className="page content">
      
        <span className="tags top-tags">&lt;body&gt;</span>
        
        <span className="tags bottom-tags">
          &lt;/body&gt;
          <br />
          <span className="bottom-tag-html">&lt;/html&gt;</span>
         
        </span>
        <Outlet />
        <div className='Dna'>
        <Dna
  visible={true}
  height="500"
  width="1200"
  ariaLabel="dna-loading"
  wrapperStyle={{}}
  wrapperClass="dna-wrapper"
/>
</div>
      </div>
    </div>
  )
}
export default Layout