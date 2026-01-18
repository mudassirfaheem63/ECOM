import { Link } from 'react-router-dom';
import HeroHeader from '../components/HeroHeader';
import FeatureList from '../components/FeatureList';
import BenefitsSection from '../components/BenefitsSection';
import Newsletter from '../components/Newsletter';

function Feature () {
    return (
        <>
    <HeroHeader title="Features" />

    <FeatureList />

    <BenefitsSection />

    <Newsletter />


        </>
    )
}

export default Feature
