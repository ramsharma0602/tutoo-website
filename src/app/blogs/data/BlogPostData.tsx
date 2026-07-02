/* ─────────────────────────────────────────────
   DEMO DATA — swap / fetch from your CMS/API
───────────────────────────────────────────── */
/* ─────────────────────────────────────────────
   TYPES
───────────────────────────────────────────── */
export type BlogSection =
    | { type: "intro"; text: string }
    | { type: "heading"; text: string }
    | { type: "paragraph"; text: string }
    | { type: "tip"; text: string }
    | { type: "quote"; text: string; attribution?: string }
    | { type: "checklist"; items: string[] }
    | { type: "numbered"; items: { title: string; body: string }[] };

export interface RelatedPost {
    id: string;
    category: string;
    categoryColor: string;
    categoryBg: string;
    title: string;
    readTime: string;
    grad: string;
    author: string;
    role: string;
    image: string;
    authorImage: string;
    description: string;
}

export interface BlogPost {
    id: string;
    category: string;
    categoryColor: string;
    categoryBg: string;
    categoryBorder: string;
    title: string;
    highlight: string; // word(s) in title to gradient-highlight
    description: string;
    date: string;
    readTime: string;
    author: string;
    authorRole: string;
    authorBio: string;
    heroGrad: string; // Tailwind gradient classes for hero image area
    image: string;
    sections: BlogSection[];
    related: RelatedPost[];
}

export const BLOG_POSTS: BlogPost[] = [
    {
        id: "improve-concentration-while-studying",
        category: "Study Tips",
        categoryColor: "#2563EB",
        categoryBg: "rgba(37,99,235,0.09)",
        categoryBorder: "rgba(37,99,235,0.2)",
        title: "How to Improve Concentration While Studying: 10 Proven Techniques for Students",
        highlight: "Concentration",
        description: "Learn practical strategies to stay focused, avoid distractions, and improve academic performance through proven study techniques.",
        date: "January 15, 2026",
        readTime: "6 Min Read",
        author: "Dr. Ananya Verma",
        authorRole: "Learning Science Expert · UberTutor",
        authorBio: "Educational experts at UberTutor create research-backed learning resources for students, parents, and tutors across India.",
        heroGrad: "from-[#2563EB] to-[#7C3AED]",
        image: "https://www.intervaledu.com/media/blog/How_to_Focus_on_Studies_Proven_Techniques_to_Improve_Concentration__Productivity_in_2025.webp",
        sections: [
            { type: "intro", text: "Concentration is the cornerstone of effective learning. In an age of constant notifications, social media, and mental overload, the ability to sit down and truly focus on a subject has become one of the most valuable academic skills a student can develop. This guide explores ten evidence-based techniques that can transform your study sessions." },
            { type: "heading", text: "Why Concentration Matters" },
            { type: "paragraph", text: "Research from cognitive science consistently shows that deep, focused work produces far greater learning outcomes than scattered multi-tasking. When you concentrate fully, your brain forms stronger neural pathways, making retention and recall significantly more effective. Students who study with intention — even for shorter durations — consistently outperform those who study for longer periods while distracted." },
            { type: "quote", text: "The future depends on what you do today.", attribution: "Mahatma Gandhi" },
            { type: "heading", text: "10 Proven Techniques to Boost Your Focus" },
            {
                type: "numbered",
                items: [
                    { title: "Create a Dedicated Study Space", body: "Your environment sends signals to your brain. A clean, organised desk with good lighting conditions your mind to enter a focused state. Keep only the materials you need for that session visible." },
                    { title: "Remove Digital Distractions", body: "Switch your phone to Do Not Disturb mode or place it in another room entirely. Studies show that the mere presence of a smartphone on your desk — even face-down — reduces available cognitive capacity." },
                    { title: "Follow the Pomodoro Technique", body: "Work in focused 25-minute sprints, followed by a 5-minute break. After four cycles, take a longer 20–30 minute break. This rhythm leverages your brain's natural attention cycles." },
                    { title: "Use Background Music Strategically", body: "Lo-fi beats or classical instrumental music at low volume can mask distracting environmental noise without competing for your attention. Avoid lyrics — your brain processes language and can't do that while reading simultaneously." },
                    { title: "Maintain Healthy Sleep Habits", body: "Sleep is when your brain consolidates memories. A student sleeping 7–8 hours retains significantly more from their study session the following day than one who skimps on rest." },
                ],
            },
            { type: "tip", text: "Keep your phone in another room during study sessions. Research shows that just having it nearby — even silenced — reduces your cognitive capacity by up to 20%." },
            { type: "heading", text: "Building a Sustainable Focus Routine" },
            { type: "paragraph", text: "Consistency beats intensity. Rather than forcing six-hour study marathons, build a daily 90-minute deep work block at the same time each day. Over weeks, your brain will begin to anticipate and prepare for that focused window automatically." },
            {
                type: "checklist",
                items: [
                    "Create a daily study schedule and stick to it",
                    "Take regular 5-minute breaks every 25–30 minutes",
                    "Stay hydrated — dehydration reduces focus by up to 15%",
                    "Avoid multitasking; single-task every study block",
                    "Review your notes within 24 hours to cement retention",
                ],
            },
            { type: "heading", text: "Conclusion" },
            { type: "paragraph", text: "Improving concentration is a skill, not a personality trait. With the right environment, structured techniques like Pomodoro, and disciplined digital hygiene, any student can develop the focus muscle needed to excel academically. Start with one technique today — consistency will do the rest." },
        ],
        related: [
            { id: "best-study-techniques", description: "Discover the most effective study techniques for faster learning.", author: "John Doe", category: "Study Tips", categoryColor: "#2563EB", categoryBg: "rgba(37,99,235,0.1)", title: "Best Study Techniques for Faster Learning", readTime: "5 min", grad: "from-[#2563EB] to-[#7C3AED]", role: "Author", image: "https://studycornerbd.com/wp-content/uploads/2026/05/Best-Study-Techniques-That-Boost-Memory-Fast--1024x538.webp", authorImage: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201709/yt-story_647_090517015649.jpg?VersionId=wIQL131pthcasFzFyaoG5zYUwtLu961c", },
            { id: "exam-preparation-guide", description: "Your comprehensive guide to acing board exams in 2025.", author: "Jane Smith", category: "Exam Prep", categoryColor: "#F59E0B", categoryBg: "rgba(245,158,11,0.1)", title: "Complete Guide to Cracking Board Exams in 2025", readTime: "8 min", grad: "from-[#F59E0B] to-[#EF4444]", role: "Author", image: "https://etimg.etb2bimg.com/photo/118120106.cms", authorImage: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201709/yt-story_647_090517015649.jpg?VersionId=wIQL131pthcasFzFyaoG5zYUwtLu961c" },
            { id: "time-management-students", description: "Maximize your productivity with these effective time management strategies.", author: "John Doe", category: "Productivity", categoryColor: "#7C3AED", categoryBg: "rgba(124,58,237,0.1)", title: "5 Effective Time Management Tips for Students", readTime: "4 min", grad: "from-[#7C3AED] to-[#2563EB]", role: "Author", image: "https://chrysalishigh.com/wp-content/uploads/2023/12/Quick-tips-for-Time-Management.jpg", authorImage: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201709/yt-story_647_090517015649.jpg?VersionId=wIQL131pthcasFzFyaoG5zYUwtLu961c", },
        ],
    },
    {
        id: "reduce-academic-stress",
        category: "Parenting",
        categoryColor: "#16C47F",
        categoryBg: "rgba(22,196,127,0.09)",
        categoryBorder: "rgba(22,196,127,0.2)",
        title: "How Parents Can Reduce Their Child's Academic Stress",
        highlight: "Academic Stress",
        description: "Practical, empathy-driven approaches parents can use to create a healthy learning environment at home without added pressure.",
        date: "February 3, 2026",
        readTime: "6 Min Read",
        author: "Meera Iyer",
        authorRole: "Child Psychologist · UberTutor",
        authorBio: "Meera Iyer is a practising child psychologist with 12 years of experience helping families navigate academic pressure and learning challenges.",
        heroGrad: "from-[#16C47F] to-[#2563EB]",
        image: "https://www.chirec.ac.in/wp-content/uploads/sites/27/2026/03/How-to-handle-academic-address.jpg",
        sections: [
            { type: "intro", text: "Academic stress in children is at an all-time high. With competitive exams, parental expectations, and social pressure converging, many students feel overwhelmed before they even open a textbook. The good news: parents have more positive influence over this than they realise." },
            { type: "heading", text: "Understanding Academic Stress in Children" },
            { type: "paragraph", text: "Stress in children often manifests as avoidance — procrastination, stomach aches before exams, or sudden disinterest in subjects they once enjoyed. Before addressing the academic problem, parents must address the emotional one. A child who feels heard is far more receptive to guidance." },
            { type: "quote", text: "Children need love, especially when they do not deserve it.", attribution: "Harold Hulbert" },
            { type: "heading", text: "5 Strategies That Actually Work" },
            {
                type: "numbered",
                items: [
                    { title: "Separate Worth from Performance", body: "Never tie your child's value or your love to their grades. This single shift reduces performance anxiety dramatically. Celebrate effort and growth, not just results." },
                    { title: "Create a Calm Home Environment", body: "Reduce arguments and tension during exam season. A psychologically safe home is the most powerful academic booster available." },
                    { title: "Ask the Right Questions", body: "Instead of 'What did you score?', ask 'What was the most interesting thing you learned today?' This reframes education as discovery rather than judgment." },
                    { title: "Collaborate on Schedules", body: "Involve your child in building their study schedule. Ownership reduces resistance. When they choose their study window, they're more likely to honour it." },
                    { title: "Get Professional Support Early", body: "If stress is persistent, consider working with a learning coach or tutor who can identify gaps and build confidence before they snowball." },
                ],
            },
            { type: "tip", text: "The most effective thing a parent can say before an exam: 'I'm proud of how hard you've worked. Just do your best — that's enough.'" },
            {
                type: "checklist",
                items: [
                    "Listen without immediately jumping to solutions",
                    "Avoid comparing your child to siblings or classmates",
                    "Build in downtime — rest is productive",
                    "Celebrate small wins, not just big achievements",
                    "Model healthy stress management yourself",
                ],
            },
            { type: "heading", text: "The Long Game" },
            { type: "paragraph", text: "Children who grow up in emotionally supportive homes where mistakes are treated as learning opportunities develop significantly higher resilience and academic persistence. Your goal isn't to eliminate all pressure — it's to ensure your child knows they're supported unconditionally through all of it." },
        ],
        related: [
            { id: "improve-concentration-while-studying", description: "Learn how to improve your focus and concentration while studying.", author: "Dr. Ananya Verma", category: "Study Tips", categoryColor: "#2563EB", categoryBg: "rgba(37,99,235,0.1)", title: "How to Improve Concentration While Studying", readTime: "6 min", grad: "from-[#2563EB] to-[#7C3AED]", role: "Learning Science Expert · UberTutor", image: "https://www.intervaledu.com/media/blog/How_to_Focus_on_Studies_Proven_Techniques_to_Improve_Concentration__Productivity_in_2025.webp", authorImage: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201709/yt-story_647_090517015649.jpg?VersionId=wIQL131pthcasFzFyaoG5zYUwtLu961c", },
            { id: "time-management-students", description: "Maximize your productivity with these effective time management strategies.", author: "Aryan Kapoor", category: "Productivity", categoryColor: "#7C3AED", categoryBg: "rgba(124,58,237,0.1)", title: "5 Effective Time Management Tips for Students", readTime: "4 min", grad: "from-[#7C3AED] to-[#2563EB]", role: "EdTech Researcher", image: "https://chrysalishigh.com/wp-content/uploads/2023/12/Quick-tips-for-Time-Management.jpg", authorImage: "https://img.magnific.com/free-photo/portrait-young-indian-top-manager-t-shirt-tie-crossed-arms-smiling-white-isolated-wall_496169-1513.jpg?semt=ais_hybrid&w=740&q=80", },
            { id: "best-study-techniques", description: "Discover the most effective study techniques for faster learning.", author: "Priya Sharma", category: "Study Tips", categoryColor: "#2563EB", categoryBg: "rgba(37,99,235,0.1)", title: "Best Study Techniques for Faster Learning", readTime: "5 min", grad: "from-[#2563EB] to-[#16C47F]", role: "Senior Educator", image: "https://studycornerbd.com/wp-content/uploads/2026/05/Best-Study-Techniques-That-Boost-Memory-Fast--1024x538.webp", authorImage: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201709/yt-story_647_090517015649.jpg?VersionId=wIQL131pthcasFzFyaoG5zYUwtLu961c", },
        ],
    },
];