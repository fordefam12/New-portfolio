import LogoTitle from '../../assets/images/digital_spaceCity_logo-removebg-preview.png'

const Home = () => {
    return(
        <div className="container-home">
            <div className="text-zone">
                <h1> Hi, <br /> im
                <img src={LogoTitle} alt="developer"/>
                <br />
                web developer
                </h1>
                <h2> FullStack developer / </h2>
            </div>
        </div>
    )
}

export default Home