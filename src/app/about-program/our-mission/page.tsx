import { FinalCTA } from "../../components/FinalCTA";
import { CoreValuesV2Section } from "./sections/CoreValuesV2Section";
import { OurMissionSection } from "./sections/MissionHeroSection";
import {MissionStatementSection} from "./sections/MissionStatementSection";
import { VisionFutureSection } from "./sections/VisionFutureSection";
import { VisionSection } from "./sections/VisionSection";
import { WhatWeAimSection } from "./sections/WhatWeAimSection";
import { WhyWeStartedSection } from "./sections/WhyWeStartedSection";

export default function OurMission() {
    return (
        <>
            <OurMissionSection />
            <MissionStatementSection />
            <WhyWeStartedSection />

            {/* <WhatWeAimSection /> */}

            <VisionSection />
            <CoreValuesV2Section />
            <VisionFutureSection />
            <FinalCTA />
        </>
    );
}