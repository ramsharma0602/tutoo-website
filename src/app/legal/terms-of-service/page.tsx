import LegalPolicyPage from "../components/LegalPolicyPage";
import { TERMS_OF_SERVICE } from "../data/legalPolicyData";

export default function TermsOfServicePage() {
    return <LegalPolicyPage policy={TERMS_OF_SERVICE} />;
}
