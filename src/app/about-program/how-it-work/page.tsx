import { AIAssessmentSection } from "./sections/AIAssessmentSection";
import { HowItWorksHero } from "./sections/HowItWorksHero";
import { Step01Registration } from "./sections/Step01Registration";
import { Step02Assessment } from "./sections/Step02Assessment";
import { Step03TutorMatch } from "./sections/Step03TutorMatch";
import { Step04SecureSession } from "./sections/Step04SecureSession";
import { StudentLearningJourney } from "./sections/StudentLearningJourney";

export default function HowITWork() {
    return (
        <>
            <HowItWorksHero />
            <StudentLearningJourney />
            <Step01Registration />
            <Step02Assessment />
            <Step03TutorMatch />
            <Step04SecureSession />


        </>
    )
}