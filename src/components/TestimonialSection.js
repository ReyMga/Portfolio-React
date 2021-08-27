import React from 'react';
import SectionTitle from './SectionTitle';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import PText from './PText';

const TestimonialSection = () => {
    return (
        <div>
            <div className="container">
                <SectionTitle
                heading="Testimonials"
                subheading="see what out clients say about us"
                />
                <div className="testimonial__wrapper">
                    <SwitchTransition>
                        <CSSTransition>
                            <div className="testimonial__info">
                                <div className="testimonial__desc">
                                    <PText></PText>
                                </div>
                            </div>
                        </CSSTransition>
                    </SwitchTransition>
                </div>
            </div>
        </div>
    )
}

export default TestimonialSection
