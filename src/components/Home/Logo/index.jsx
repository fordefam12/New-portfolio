import './index.scss'
import logoS from '../../../assets/images/digital S blk and red-removebg-preview.png'
// import { useRef } from 'react'
// import { useEffect } from 'react'
// import { gsap } from 'gsap-trial'
// import { DrawSVGPlugin } from 'gsap-trial/DrawSVGPlugin'
// import outline from '../../../logo.svg'
const Logo = () => {

//   const bgRef = useRef()
//   const outlineLogoRef = useRef()
//   const solidLogoRef = useRef()

// useEffect(() => {
// gsap.registerPlugin(DrawSVGPlugin)
// gsap.timeline()
// to(bgRef.current, {
// duration: 1,
// opacity:1
// })
// },[])

  return (
    <div className="logo-container">
      <img className="solid-logo" src={logoS} alt="digital S" />
      <svg width="559pt" height="897pt" version='1.0' viewBox='0 0 559 897' xmlns='http://www.w3.org/2000/svg'  />
      <g  className='svg-container' transform='(0 457) scale(.1 -.1)' fill='none' ></g>
    </div>
  )
}

export default Logo
