import { Link } from 'react-router-dom';
import HeroHeader from '../components/HeroHeader';
import FeatureList from '../components/FeatureList';
import HowToUseSection from '../components/HowToUseSection';
import Newsletter from '../components/Newsletter';

function HowToUse () {
    return (
        <>
    <HeroHeader title="How To Use" />

    <FeatureList />

    <HowToUseSection />


        </>
    )
}

export default HowToUse
