import { BrowserRouter as Router } from "react-router-dom";

// import Header from '../components/Header'
import Hero from '../components/Hero';
import BinaryRain from "../components/BinaryRain";
import Offer from "../components/Offer";
import Advantages from "../components/Advantages";
import WhyUs from "../components/WhyAss";
import Reviews from "../components/Reviews";
import Teachers from "../components/Teachers";
import Process from "../components/Process";
import BlogSection from "../components/BlogSection";
import Cta from "../components/Cta";
import Footer from "../components/Footer";





function Main(){
    return(
        <>
            {/* <Header/> */}
            <BinaryRain/>
            <Hero />
            <Offer />
            <Advantages/>
            <WhyUs/>
            <Reviews/>
            <Teachers/>
            <Process/>
            <BlogSection/>
            <Cta />
            <Footer/>
      
        </>
    )
}

export default Main
