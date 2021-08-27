import React from 'react'
import SectionTitle from './SectionTitle';
import ServicesSectionItem from './ServicesSectionItem'
import styled from 'styled-components';
import {MdDesktopMac, MdCode} from 'react-icons/md';



const ServicesItemStyles = styled.div`
    padding:10rem 0;
    .services__allItems{
        display: flex;
        gap: 10rem;
        justify-content: space-between;
        margin-top: 5rem;
    }
    @media only screen and (max-width: 768px) {
        .services__allItems{
            flex-direction: column;
            max-width:350px;
            margin: 0 auto;
            margin-top: 5rem;
            gap: 5rem;
        }
    }
`


const ServiceSection = () => {
    return (
        <ServicesItemStyles>
            <div className="container">
                <SectionTitle 
                heading="Services"
                subheading="what i will do for you"
                />

                <div className="services__allItems">
                <ServicesSectionItem 
                    icon ={<MdDesktopMac/>}
                    title="Website Design"
                    desc="I do ui/ux design for the website that helps website to get a unique look"   
                />
                <ServicesSectionItem 
                    icon ={<MdCode/>}
                    title="Frontend Development"
                    desc="I develop websites with good performance and excellent quality"
                />
             
                </div>
            </div>
        </ServicesItemStyles>
    )
}

export default ServiceSection
