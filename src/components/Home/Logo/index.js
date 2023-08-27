import './index.scss'
import logoS from '../../../assets/images/digital S blk and red-removebg-preview.png'

const Logo = () => {
  return (
    <div className="logo-container">
      <img className="solid-logo" src={logoS} />
      <svg width="200px" height="200PX">
        <g transform="translate(0 457) scale(.1 -.1)" fill="none"></g>
      </svg>
    </div>
  )
}

export default Logo
