import LegalPolicyPage from "../components/LegalPolicyPage";
import { PRIVACY_POLICY } from "../data/legalPolicyData";

export default function PrivacyPolicyPage() {
    return <LegalPolicyPage policy={PRIVACY_POLICY} />;
}
