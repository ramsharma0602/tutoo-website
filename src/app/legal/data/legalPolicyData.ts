/* ─────────────────────────────────────────────
   LEGAL POLICY DATA
   Single source of truth for Privacy Policy & Terms
   of Service. The page components under
   src/app/legal/* are dumb renderers — they read
   this data and render it dynamically. To edit the
   actual policy wording, edit this file only.
───────────────────────────────────────────── */

/* ─────────────────────────────────────────────
   TYPES
───────────────────────────────────────────── */
export type LegalBlock =
    | { type: "paragraph"; text: string }
    | { type: "list"; items: string[] }
    | { type: "numbered"; items: string[] }
    | { type: "note"; text: string };

export interface LegalSubsection {
    id: string;
    title: string;
    body: LegalBlock[];
}

export interface LegalPolicy {
    slug: string;
    badgeLabel: string;
    title: string;
    highlight: string; // word(s) in title to gradient-highlight
    lastUpdated: string;
    effectiveDate: string;
    intro: string;
    sections: LegalSubsection[];
}

/* ─────────────────────────────────────────────
   PRIVACY POLICY
───────────────────────────────────────────── */
export const PRIVACY_POLICY: LegalPolicy = {
    slug: "privacy-policy",
    badgeLabel: "Privacy Policy",
    title: "Your Privacy, Protected",
    highlight: "Protected",
    lastUpdated: "July 2, 2026",
    effectiveDate: "July 2, 2026",
    intro:
        "This Privacy Policy explains how Tutoo (\"Tutoo\", \"we\", \"us\", or \"our\") collects, uses, discloses, and safeguards information when you use our website, mobile app, and tutoring services. By using Tutoo, you agree to the practices described in this policy.",
    sections: [
        {
            id: "information-we-collect",
            title: "1. Information We Collect",
            body: [
                {
                    type: "paragraph",
                    text: "We collect information you provide directly to us, information collected automatically as you use our platform, and information from tutors, parents, and schools where applicable.",
                },
                {
                    type: "list",
                    items: [
                        "Account information: name, email address, phone number, city, and password.",
                        "Profile details: grade/class, subjects of interest, board, and learning preferences for students; qualifications, experience, and subjects for tutors.",
                        "Application materials: resumes, certificates, and identity documents submitted by tutors during onboarding.",
                        "Payment information: billing details processed securely through our third-party payment partners — we do not store full card numbers on our servers.",
                        "Usage data: pages visited, session duration, device type, browser, and IP address, collected automatically via cookies and analytics tools.",
                        "Communications: messages, support tickets, and feedback you send us.",
                    ],
                },
            ],
        },
        {
            id: "how-we-use-information",
            title: "2. How We Use Your Information",
            body: [
                {
                    type: "paragraph",
                    text: "We use the information we collect to operate, maintain, and improve Tutoo, and specifically to:",
                },
                {
                    type: "list",
                    items: [
                        "Match students with suitable, verified tutors based on subject, board, class, and availability.",
                        "Process tutor applications, verify credentials, and manage onboarding.",
                        "Process payments, send booking confirmations, and manage refunds.",
                        "Send service updates, class reminders, and progress reports to parents.",
                        "Respond to support requests and resolve disputes.",
                        "Detect, investigate, and prevent fraud, abuse, or safety concerns.",
                        "Analyse usage trends to improve platform performance and user experience.",
                    ],
                },
            ],
        },
        {
            id: "information-sharing",
            title: "3. Information Sharing & Disclosure",
            body: [
                {
                    type: "paragraph",
                    text: "We do not sell your personal information. We share information only in the following circumstances:",
                },
                {
                    type: "list",
                    items: [
                        "With matched tutors or students/parents, limited to what is necessary to coordinate and deliver tutoring sessions.",
                        "With service providers who help us operate the platform, such as payment processors, cloud hosting, and analytics providers, under confidentiality obligations.",
                        "When required by law, regulation, legal process, or governmental request.",
                        "To protect the rights, property, or safety of Tutoo, our users, or the public.",
                        "In connection with a merger, acquisition, or sale of assets, with notice to affected users where required.",
                    ],
                },
            ],
        },
        {
            id: "cookies",
            title: "4. Cookies & Tracking Technologies",
            body: [
                {
                    type: "paragraph",
                    text: "We use cookies and similar technologies to keep you signed in, remember your preferences, and understand how our platform is used. You can control cookies through your browser settings; disabling cookies may limit some features of the site.",
                },
                {
                    type: "list",
                    items: [
                        "Essential cookies: required for login, security, and core site functionality.",
                        "Preference cookies: remember settings like your selected board, class, or city.",
                        "Analytics cookies: help us understand aggregate usage patterns to improve the platform.",
                    ],
                },
            ],
        },
        {
            id: "data-security",
            title: "5. Data Security",
            body: [
                {
                    type: "paragraph",
                    text: "We use industry-standard technical and organisational safeguards — including encryption in transit, access controls, and regular security reviews — to protect your information from unauthorised access, alteration, disclosure, or destruction.",
                },
                {
                    type: "note",
                    text: "No method of transmission or storage is 100% secure. While we work hard to protect your data, we cannot guarantee absolute security.",
                },
            ],
        },
        {
            id: "childrens-privacy",
            title: "6. Children's Privacy",
            body: [
                {
                    type: "paragraph",
                    text: "Tutoo's services are used by students who may be minors. Student accounts are created and managed with the involvement and consent of a parent or legal guardian. We collect only the information necessary to provide tutoring services to minors and do not knowingly permit minors to interact with the platform without guardian oversight.",
                },
                {
                    type: "paragraph",
                    text: "Parents or guardians may contact us at any time to review, update, or request deletion of their child's information.",
                },
            ],
        },
        {
            id: "data-retention",
            title: "7. Data Retention",
            body: [
                {
                    type: "paragraph",
                    text: "We retain personal information for as long as your account is active or as needed to provide our services, comply with legal obligations, resolve disputes, and enforce our agreements. When information is no longer needed, we securely delete or anonymise it.",
                },
            ],
        },
        {
            id: "your-rights",
            title: "8. Your Rights & Choices",
            body: [
                {
                    type: "paragraph",
                    text: "Depending on your location, you may have the right to:",
                },
                {
                    type: "list",
                    items: [
                        "Access the personal information we hold about you.",
                        "Request correction of inaccurate or incomplete information.",
                        "Request deletion of your personal information, subject to legal and contractual limits.",
                        "Withdraw consent for optional communications, such as marketing emails.",
                        "Request a copy of your data in a portable format.",
                    ],
                },
                {
                    type: "paragraph",
                    text: "To exercise any of these rights, contact us using the details at the end of this policy.",
                },
            ],
        },
        {
            id: "third-party-links",
            title: "9. Third-Party Links & Services",
            body: [
                {
                    type: "paragraph",
                    text: "Our platform may contain links to third-party websites or integrate third-party services such as payment gateways. We are not responsible for the privacy practices of these third parties, and we encourage you to review their privacy policies separately.",
                },
            ],
        },
        {
            id: "changes-to-policy",
            title: "10. Changes to This Policy",
            body: [
                {
                    type: "paragraph",
                    text: "We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will post the updated policy on this page with a revised \"Last Updated\" date, and where changes are material, we will notify you via email or an in-app notice.",
                },
            ],
        },
        {
            id: "contact",
            title: "11. Contact Us",
            body: [
                {
                    type: "paragraph",
                    text: "If you have questions, concerns, or requests regarding this Privacy Policy or your personal information, please reach out to us:",
                },
            ],
        },
    ],
};

/* ─────────────────────────────────────────────
   TERMS OF SERVICE
───────────────────────────────────────────── */
export const TERMS_OF_SERVICE: LegalPolicy = {
    slug: "terms-of-service",
    badgeLabel: "Terms of Service",
    title: "Terms You Can Trust",
    highlight: "Trust",
    lastUpdated: "July 2, 2026",
    effectiveDate: "July 2, 2026",
    intro:
        "These Terms of Service (\"Terms\") govern your access to and use of Tutoo's website, mobile app, and tutoring services. By creating an account or using Tutoo, you agree to be bound by these Terms. If you do not agree, please do not use our services.",
    sections: [
        {
            id: "acceptance",
            title: "1. Acceptance of Terms",
            body: [
                {
                    type: "paragraph",
                    text: "By accessing or using Tutoo, you confirm that you have read, understood, and agree to these Terms and our Privacy Policy. If you are using Tutoo on behalf of a minor, you confirm that you are the parent or legal guardian and accept these Terms on the student's behalf.",
                },
            ],
        },
        {
            id: "description-of-service",
            title: "2. Description of Service",
            body: [
                {
                    type: "paragraph",
                    text: "Tutoo is an AI-powered platform that connects students and parents with verified, independent tutors for home and online tuition. Tutoo facilitates the discovery, matching, scheduling, and payment of tutoring sessions but is not itself an educational institution or employer of tutors.",
                },
            ],
        },
        {
            id: "eligibility",
            title: "3. Eligibility & Account Registration",
            body: [
                {
                    type: "list",
                    items: [
                        "You must be at least 18 years old to create a parent, tutor, or institutional account. Student accounts must be created and supervised by a parent or legal guardian.",
                        "You agree to provide accurate, current, and complete information during registration and to keep it updated.",
                        "You are responsible for maintaining the confidentiality of your account credentials and for all activity under your account.",
                        "Tutoo reserves the right to suspend or terminate accounts that provide false information or violate these Terms.",
                    ],
                },
            ],
        },
        {
            id: "user-responsibilities",
            title: "4. User Responsibilities",
            body: [
                {
                    type: "paragraph",
                    text: "All users agree to interact respectfully and honestly on the platform. Specifically:",
                },
                {
                    type: "list",
                    items: [
                        "Parents & Students: provide accurate learning requirements, attend scheduled sessions, and communicate respectfully with tutors.",
                        "Tutors: provide accurate qualifications and experience, deliver sessions professionally, and maintain appropriate conduct with minors at all times.",
                        "All Users: not misuse the platform to solicit off-platform payments to bypass Tutoo, harass other users, or misrepresent identity or credentials.",
                    ],
                },
            ],
        },
        {
            id: "payments-refunds",
            title: "5. Payments, Fees & Refunds",
            body: [
                {
                    type: "paragraph",
                    text: "Session fees, subscription charges, and applicable taxes are displayed before checkout and are processed through our secure third-party payment partners.",
                },
                {
                    type: "list",
                    items: [
                        "Refunds are evaluated on a case-by-case basis in line with our Refund Policy, where applicable, or as communicated during booking.",
                        "Tutoo may modify pricing for future bookings at any time; existing confirmed bookings will honour the price at the time of booking.",
                        "Chargebacks or payment disputes filed without first contacting Tutoo support may result in account suspension pending investigation.",
                    ],
                },
            ],
        },
        {
            id: "tutor-verification",
            title: "6. Tutor Verification & Conduct",
            body: [
                {
                    type: "paragraph",
                    text: "Tutoo conducts a verification process for tutors, which may include identity checks, qualification review, and background information where available. While we take reasonable steps to vet tutors, Tutoo does not guarantee the conduct, performance, or qualifications of any tutor and encourages parents to remain involved in their child's tutoring arrangement.",
                },
                {
                    type: "note",
                    text: "Any concerns about tutor conduct should be reported immediately to our support team so we can investigate and take appropriate action, including removal from the platform.",
                },
            ],
        },
        {
            id: "intellectual-property",
            title: "7. Intellectual Property",
            body: [
                {
                    type: "paragraph",
                    text: "All content on Tutoo — including our logo, branding, software, study materials, and platform design — is owned by Tutoo or its licensors and is protected by applicable intellectual property laws. You may not copy, modify, distribute, or create derivative works from our content without prior written permission.",
                },
            ],
        },
        {
            id: "prohibited-activities",
            title: "8. Prohibited Activities",
            body: [
                {
                    type: "paragraph",
                    text: "You agree not to:",
                },
                {
                    type: "list",
                    items: [
                        "Use the platform for any unlawful purpose or in violation of any applicable law.",
                        "Attempt to gain unauthorised access to Tutoo's systems, accounts, or data.",
                        "Upload false, misleading, or fraudulent information, documents, or credentials.",
                        "Circumvent Tutoo's payment system by arranging off-platform payments to avoid platform fees.",
                        "Harass, threaten, or discriminate against any student, parent, or tutor.",
                    ],
                },
            ],
        },
        {
            id: "limitation-of-liability",
            title: "9. Limitation of Liability",
            body: [
                {
                    type: "paragraph",
                    text: "Tutoo provides the platform on an \"as is\" and \"as available\" basis. To the maximum extent permitted by law, Tutoo shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the platform, including damages arising from the conduct of tutors or other users, who act as independent parties and not as employees or agents of Tutoo.",
                },
            ],
        },
        {
            id: "indemnification",
            title: "10. Indemnification",
            body: [
                {
                    type: "paragraph",
                    text: "You agree to indemnify and hold Tutoo, its officers, employees, and affiliates harmless from any claims, damages, liabilities, and expenses arising from your violation of these Terms or misuse of the platform.",
                },
            ],
        },
        {
            id: "termination",
            title: "11. Termination",
            body: [
                {
                    type: "paragraph",
                    text: "You may deactivate your account at any time by contacting support. Tutoo may suspend or terminate your access to the platform, with or without notice, if you violate these Terms, engage in fraudulent or harmful conduct, or where required by law.",
                },
            ],
        },
        {
            id: "governing-law",
            title: "12. Governing Law & Dispute Resolution",
            body: [
                {
                    type: "paragraph",
                    text: "These Terms are governed by the laws of India. Any disputes arising out of or relating to these Terms or your use of Tutoo shall first be attempted to be resolved amicably, and failing that, shall be subject to the exclusive jurisdiction of the courts in Bangalore, Karnataka, India.",
                },
            ],
        },
        {
            id: "changes-to-terms",
            title: "13. Changes to These Terms",
            body: [
                {
                    type: "paragraph",
                    text: "We may update these Terms from time to time. Continued use of Tutoo after changes are posted constitutes acceptance of the revised Terms. Material changes will be communicated via email or an in-app notice where practicable.",
                },
            ],
        },
        {
            id: "contact",
            title: "14. Contact Us",
            body: [
                {
                    type: "paragraph",
                    text: "For questions about these Terms of Service, please reach out to us:",
                },
            ],
        },
    ],
};

/* ─────────────────────────────────────────────
   REGISTRY — lets pages/routes look policies up
   dynamically by slug if ever needed.
───────────────────────────────────────────── */
export const LEGAL_POLICIES: Record<string, LegalPolicy> = {
    [PRIVACY_POLICY.slug]: PRIVACY_POLICY,
    [TERMS_OF_SERVICE.slug]: TERMS_OF_SERVICE,
};
