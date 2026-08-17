import AboutHero from "./sections/AboutHero";
import AboutUsFinalCTA from "./sections/AboutUsFinalCTA";
import { MeetOurCommunitySection } from "./sections/Meetourcommunitysection";
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

            {/* Trimmed (audit P1-9): LearningEcosystemSection was the most
                platform-flavoured block on a page parents read for reassurance.
                Kept in the repo — re-add the import + tag to restore it. */}

            <WhyParentsTrustSection />
            <MeetOurCommunitySection />
            <AboutUsFinalCTA />
        </>
    )
}