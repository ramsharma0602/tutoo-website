/**
 * ─────────────────────────────────────────────────────────────────────────
 *  PER-ROUTE SEO METADATA REGISTRY
 * ─────────────────────────────────────────────────────────────────────────
 *  Static route → metadata map for every known path in App.tsx, plus lookup
 *  helpers for the two dynamic route families (/blog/:slug and
 *  /:board/:category/:className). RouteSEO.tsx consumes this so every page
 *  gets correct <title>/description/keywords/canonical/OG automatically —
 *  no per-page edits needed.
 * ─────────────────────────────────────────────────────────────────────────
 */
import { BLOG_POSTS } from "../app/blogs/data/BlogPostData";
import { BOARD_CLASS_DATA } from "../app/apply-tutor/boards-and-classes/data/boardClassData";
import type { SEOHeadProps } from "./SEOHead";

export interface RouteMeta extends Omit<SEOHeadProps, "path"> {}

/** Static routes — every fixed path defined in App.tsx's <Routes>. */
export const STATIC_PAGE_META: Record<string, RouteMeta> = {
  "/": {
    title: "Tutoo – AI-Powered Learning Platform | Verified Home Tutors",
    rawTitle: true,
    description:
      "Tutoo pairs students with AI-matched, verified home & online tutors in Kothrud (Pune) and Kolhapur. Real-time progress tracking for parents. Book a free assessment today.",
    keywords: [
      "home tutor",
      "online tutor",
      "verified tutors",
      "private tuition",
      "Home Tuition in Kothrud",
      "Home Tuition in Kolhapur",
      "CBSE tutor",
      "ICSE tutor",
    ],
    type: "website",
  },
  "/book-free-assessment": {
    title: "Book a Free Assessment",
    description:
      "Book a free learning assessment for your child. Tell us the board, class, and subjects — Tutoo matches you with a verified tutor in Kothrud (Pune) or Kolhapur within 24 hours.",
    keywords: ["free assessment", "book a tutor", "free demo class", "student assessment"],
    type: "website",
  },
  "/apply-tutor": {
    title: "Apply as a Tutor",
    description:
      "Join Tutoo as a verified tutor. Apply online, get matched with students in your city, and start teaching CBSE, ICSE, SSC and competitive-exam students today.",
    keywords: ["become a tutor", "tutor jobs", "apply as tutor", "teaching jobs Kothrud", "teaching jobs Kolhapur"],
    type: "website",
  },
  "/for-parents": {
    title: "For Parents – Verified Home Tutors",
    description:
      "See how Tutoo helps parents in Kothrud (Pune) and Kolhapur find verified, background-checked home tutors with real-time progress tracking and transparent pricing.",
    keywords: ["home tutor for kids", "verified tutors for parents", "parent progress tracking", "tuition Kothrud", "tuition Kolhapur"],
    type: "website",
  },
  "/for-tutors": {
    title: "For Tutors – Teach, Earn, Grow",
    description:
      "Tutoo connects qualified tutors with students who need them. Flexible schedules, timely payments, and a steady stream of matched students in your city.",
    keywords: ["tutor jobs", "online teaching jobs", "home tutor opportunities"],
    type: "website",
  },
  "/blogs": {
    title: "Blog – Study Tips & Learning Resources",
    description:
      "Practical study tips, exam preparation guides, and learning strategies from Tutoo's education experts for students and parents.",
    keywords: ["study tips", "exam preparation", "learning resources", "student blog"],
    type: "website",
  },
  "/study-material": {
    title: "Free Study Materials",
    description: "Free, curated study materials and resources for CBSE, ICSE, and SSC students, organised by board and class.",
    keywords: ["free study material", "CBSE notes", "ICSE notes", "SSC notes"],
    type: "website",
  },
  "/our-mission": {
    title: "Our Mission",
    description: "Learn about Tutoo's mission to make quality, verified, personalised tutoring accessible to every student.",
    keywords: ["Tutoo mission", "about Tutoo"],
    type: "website",
  },
  "/about-tutoo": {
    title: "About Tutoo",
    description: "Tutoo is an AI-powered learning platform connecting students with verified home and online tutors across Kothrud (Pune) and Kolhapur.",
    keywords: ["about Tutoo", "Tutoo learning platform"],
    type: "website",
  },
  "/how-it-work": {
    title: "How It Works",
    description: "See how Tutoo matches students with the right verified tutor in three simple steps — assess, match, and start learning.",
    keywords: ["how Tutoo works", "tutor matching process"],
    type: "website",
  },
  "/contact-us": {
    title: "Contact Us",
    description: "Get in touch with the Tutoo team for questions about tutoring, assessments, or becoming a tutor.",
    keywords: ["contact Tutoo", "Tutoo support"],
    type: "website",
  },
  "/careers": {
    title: "Careers at Tutoo",
    description: "Explore open roles at Tutoo and help build the future of personalised, verified tutoring in India.",
    keywords: ["Tutoo careers", "Tutoo jobs", "edtech jobs"],
    type: "website",
  },
  "/team": {
    title: "Our Team",
    description: "Meet the team behind Tutoo — educators, engineers, and operators building a trustworthy tutoring platform.",
    keywords: ["Tutoo team", "about Tutoo team"],
    type: "website",
  },
  "/privacy-policy": {
    title: "Privacy Policy",
    description: "Read Tutoo's Privacy Policy to understand how we collect, use, and protect your personal information.",
    keywords: ["Tutoo privacy policy"],
    type: "website",
    noindex: false,
  },
  "/terms-of-service": {
    title: "Terms of Service",
    description: "Read Tutoo's Terms of Service governing use of our tutoring platform, website, and services.",
    keywords: ["Tutoo terms of service"],
    type: "website",
    noindex: false,
  },
};

/** Lookup metadata for /blog/:slug using real BLOG_POSTS content. */
export function getBlogPostMeta(slug: string): RouteMeta | null {
  const post = BLOG_POSTS.find((p) => p.id === slug);
  if (!post) return null;
  return {
    title: post.title,
    rawTitle: true,
    description: post.description,
    keywords: [post.category, "study tips", "Tutoo blog"],
    image: post.image,
    type: "article",
    author: post.author,
    publishedTime: post.date,
  };
}

/** Lookup metadata for /:board/:category/:className using existing metaTitle/metaDescription. */
export function getBoardClassMeta(slug: string): RouteMeta | null {
  const entry = BOARD_CLASS_DATA[slug];
  if (!entry) return null;
  return {
    title: entry.metaTitle,
    rawTitle: true,
    description: entry.metaDescription,
    keywords: entry.subjects.map((s) => `${entry.board} ${entry.classLabel} ${s.label} tutor`),
    type: "website",
  };
}

/** Fallback used when a path has no registry entry (defensive — should be rare). */
export const DEFAULT_PAGE_META: RouteMeta = {
  type: "website",
};
