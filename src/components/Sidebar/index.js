import './index.scss'
import { Link } from 'react-router-dom'
import LogoS from '../../assets/images/Gear_5_Infobox.png'
import logoSubtitle from '../../assets/images/Gear_5_Infobox.png'
const Sidebar = () => (
  <div className="nav-bar">
    <Link className="logo" to="/">
      <img src={LogoS} alt="logoS" />
      <img src={logoSubtitle} alt="logosubtitle" />
    </Link>
  </div>
)

export default Sidebar
