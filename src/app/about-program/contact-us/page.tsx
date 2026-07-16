import ContactFAQSection from "./sections/ContactFAQSection";
import { ContactHeroSection } from "./sections/ContactHeroSection";
import { ContactInfoSection } from "./sections/ContactInfoSection";
import FinalCTASection from "./sections/FinalCTASection";
import { GetInTouchSection } from "./sections/Getintouchsection";
import WhoCanContactUsSection from "./sections/WhoCanContactUsSection";
import { CityAvailabilitySection } from "../../components/CityAvailabilitySection";


export default function ContactUs() {
    return (
        <>
            <ContactHeroSection />
            <CityAvailabilitySection variant="compact" />
            <ContactInfoSection />
            <GetInTouchSection />
            <WhoCanContactUsSection />
            <ContactFAQSection />
            <FinalCTASection />
        </>
    )
}