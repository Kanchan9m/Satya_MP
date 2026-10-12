import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import UserTypes from '../components/UserTypes'
import Services from '../components/Services'
import WhyChooseUs from '../components/WhyChooseUs'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import About from '../components/About'
import MissionVision from '../components/MissionVision'

function Home(){

    return (
        <>
        <Navbar/>
        <main> 
            <Hero/>
            <About />
            <MissionVision />
            {/* <h1> Satya Manpower</h1>
            <p>Connecting people with opportunities</p> */}
            <UserTypes/>
            <Services />
            <WhyChooseUs />
            <Contact />
            <Footer />
        </main>
        </>
    );
}

export default Home;