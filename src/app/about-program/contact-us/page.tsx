import ContactFAQSection from "./sections/ContactFAQSection";
import { ContactHeroSection } from "./sections/ContactHeroSection";
import { ContactInfoSection } from "./sections/ContactInfoSection";
import FinalCTASection from "./sections/FinalCTASection";
import { GetInTouchSection } from "./sections/Getintouchsection";
import WhoCanContactUsSection from "./sections/WhoCanContactUsSection";


export default function ContactUs() {
    return (
        <>
            <ContactHeroSection />
            <ContactInfoSection />
            <GetInTouchSection />
            <WhoCanContactUsSection />
            <ContactFAQSection />
            <FinalCTASection />
        </>
    )
}