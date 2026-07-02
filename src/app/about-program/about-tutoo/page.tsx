import AboutHero from "./sections/AboutHero";
import AboutUsFinalCTA from "./sections/AboutUsFinalCTA";
import { MeetOurCommunitySection } from "./sections/Meetourcommunitysection";
import { LearningEcosystemSection } from "./sections/OurLearningEcosystem";
import ProblemWeSolve from "./sections/ProblemWeSolve";
import WhatMakesUsDifferent from "./sections/WhatMakesUsDifferent";
import WhoWeAreSection from "./sections/WhoWeAreSection";
import { WhyParentsTrustSection } from "./sections/WhyParentsTrustSection";

export default function AboutTutoo() {
    return (
        <>
            <AboutHero />
            <WhoWeAreSection />
            <ProblemWeSolve />
            <WhatMakesUsDifferent />
            <LearningEcosystemSection />
            <WhyParentsTrustSection />
            <MeetOurCommunitySection />
            <AboutUsFinalCTA />
        </>
    )
}