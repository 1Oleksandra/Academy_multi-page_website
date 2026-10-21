import { BrowserRouter as Router } from "react-router-dom";


import Footer from "../components/Footer";
import AboutTop from "../components/AboutTop";
import AboutTeam from "../components/AboutTeam";
import AboutMission from "../components/AboutMission";
import AboutLearning from "../components/AboutLearning";
import Cta from "../components/Cta";

function About(){
    return(
        <>
            <AboutTop/>
            <AboutMission/>
            <AboutTeam />
            <AboutLearning/>
            <Cta />
            <Footer/>
        </>
    )
}

export default About