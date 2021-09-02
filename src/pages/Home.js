import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServiceSection from '../components/ServiceSection';
import ProjectSection from '../components/ProjectSection';
import TestimonialSection from '../components/TestimonialSection';
import ContactBanner from '../components/ContactBanner';


const Home = () => {
    return (
        <div>
            <HeroSection />
            <AboutSection/>
            <ServiceSection/>
            <ProjectSection />
            <TestimonialSection/>
            <ContactBanner/>
          
        </div>
    )
}

export default Home
