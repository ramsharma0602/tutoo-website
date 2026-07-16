import { ApplyAsTutorSection } from "./for-tutors/ApplyAsTutorSection";
import { ForTutorsHeroSection } from "./for-tutors/ForTutorsHeroSection";
import { ToolsSupportSection } from "./for-tutors/ToolsSupportSection";
import { TrainingDevelopmentSection } from "./for-tutors/TrainingDevelopmentSection";
import { TutorFinalCTA } from "./for-tutors/TutorCTA";
import { TutorsFAQ } from "./for-tutors/TutorsFAQ";
import { TutorsTestimonials } from "./for-tutors/TutorsTestimonials";
import { WhyBecomeTutooSection } from "./for-tutors/WhyBecomeTutooSection";
import { CityAvailabilitySection } from "./CityAvailabilitySection";

export default function ForTutorsPage() {
    return (
        <div className="for-tutors-page">
            <ForTutorsHeroSection />
            <CityAvailabilitySection variant="compact" />
            <WhyBecomeTutooSection />
            <ApplyAsTutorSection />
            <TrainingDevelopmentSection />
            <ToolsSupportSection />
            <TutorsTestimonials /> 
            <TutorsFAQ />
            <TutorFinalCTA />
        </div>
    );
}   