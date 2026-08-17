import { FinalCTA } from "../../components/FinalCTA";
import { CoreValuesV2Section } from "./sections/CoreValuesV2Section";
import { OurMissionSection } from "./sections/MissionHeroSection";
import {MissionStatementSection} from "./sections/MissionStatementSection";
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

            {/* Trimmed (audit P1-9): VisionFutureSection repeated the vision
                story a second time and carried the largest claims. Kept in the
                repo — re-add the import + tag to restore it. */}

            <FinalCTA />
        </>
    );
}