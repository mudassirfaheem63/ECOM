import { Link } from 'react-router-dom';
import HeroHeader from '../components/HeroHeader';
import FeatureList from '../components/FeatureList';
import TestimonialSection from '../components/TestimonialSection';

function Testimonial () {
    return (
        <>
    <HeroHeader title="Testimonial" />

    <FeatureList />

    <TestimonialSection />

        </>
    )
}

export default Testimonial
