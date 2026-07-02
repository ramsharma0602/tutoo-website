

import { useRef } from "react";

import { motion } from "motion/react";

import {
    ArrowRight,
    ChevronLeft,
    ChevronRight,
    BookOpen,
    Clock3,
} from "lucide-react";
import { Button } from "../ui/button";

export function ParentResourcesSection() {

    const sliderRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {

        if (!sliderRef.current) return;

        const amount = 420;

        sliderRef.current.scrollBy({
            left: direction === "left" ? -amount : amount,
            behavior: "smooth",
        });
    };

    const blogs = [
        {
            category: "Study Tips",
            title: "Study Tips For Parents",
            description:
                "Simple but powerful strategies parents can use to improve learning habits, consistency, and academic confidence.",

            image: "https://www.narayanaschools.in/blog/wp-content/uploads/2023/09/20230902-185231.jpg",

            readTime: "5 min read",

            gradient: "from-[#16C47F] to-[#22C55E]",
        },

        {
            category: "Productivity",
            title: "How To Improve Concentration",
            description:
                "Discover practical techniques to improve focus, reduce distractions, and create a productive learning environment at home.",

            image: "https://lh3.googleusercontent.com/proxy/iY9ozNsTpwQeiFdZWXDLhqM4alZUOQ0c8q4XzMXHq8XNOSC3nw4MiSkF6icFq2gLFWP7xTNHX8e4smD3GzCdUZIWznikD3m-O8xMOY0yMJ_MhJ6GwZNlTrOKlNC8_80IES4Gbt9Hn4mwhuW8SGvGMhb6Q0Dg_dX4",

            readTime: "4 min read",

            gradient: "from-[#2563EB] to-[#3B82F6]",
        },

        {
            category: "Learning",
            title: "Benefits Of One-on-One Tuition",
            description:
                "Understand how personalized tutoring improves confidence, learning speed, and long-term academic performance.",

            image: "https://blog.3ieducation.com/wp-content/uploads/2025/05/3i-Education-1024x536.jpg",

            readTime: "6 min read",

            gradient: "from-[#7C3AED] to-[#8B5CF6]",
        },

        {
            category: "Guidance",
            title: "Choosing The Right Tutor",
            description:
                "Learn what parents should look for when selecting tutors based on teaching style, expertise, communication, and student needs.",

            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR56rClp6t2eNSWjjDjuKxsHaYSqxZePfvV4Q&s",

            readTime: "5 min read",

            gradient: "from-[#F59E0B] to-[#FBBF24]",
        },
    ];

    return (
        <section className="relative overflow-hidden py-28 bg-white">

            {/* Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">

                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#16C47F]/5 rounded-full blur-3xl" />

                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#2563EB]/5 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-16">

                    {/* Left */}
                    <div className="max-w-3xl">

                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/70 backdrop-blur-xl border border-[#16C47F]/20 shadow-sm mb-8">

                            <BookOpen className="w-4 h-4 text-[#16C47F]" />

                            <span className="text-sm font-semibold text-[#16C47F]">
                                Parent Resources
                            </span>
                        </div>

                        {/* Heading */}
                        <h2
                            className="text-5xl lg:text-7xl font-black leading-[1.05] tracking-tight text-[#0B1220]"
                            style={{ fontFamily: "var(--font-heading)" }}
                        >
                            Helpful Resources For{" "}

                            <span className="bg-gradient-to-r from-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent">
                                Modern Parents
                            </span>
                        </h2>

                        {/* Subheading */}
                        <p className="mt-8 text-lg leading-8 text-[#64748B] max-w-2xl">
                            Expert tips, learning strategies, study techniques, and
                            educational insights to help parents support their child’s
                            academic growth.
                        </p>
                    </div>

                    <div
                        className="
                            flex
                            flex-col
                            md:flex-row
                            md:items-center
                            md:justify-between
                            gap-6
                            mb-1
                        "
                    >

                        {/* Controls */}
                        <div
                            className="
                            flex
                            items-center
                            gap-4
                            justify-end
                            md:justify-start

                            w-full
                            md:w-auto
                            "
                        >
                            <button
                                onClick={() => scroll("left")}
                                className="
                                w-12
                                h-12
                                md:w-14
                                md:h-14
                                rounded-full
                                bg-white/80
                                backdrop-blur-xl
                                border
                                border-[rgba(15,23,42,0.06)]
                                shadow-lg
                                flex
                                items-center
                                justify-center
                                hover:scale-105
                                hover:shadow-xl
                                transition-all
                                duration-300
                            "
                            >
                                <ChevronLeft className="w-5 h-5 text-[#0F172A]" />
                            </button>

                            <button
                                onClick={() => scroll("right")}
                                className="
                                w-12
                                h-12
                                md:w-14
                                md:h-14
                                rounded-full
                                bg-gradient-to-r
                                from-[#16C47F]
                                to-[#2563EB]
                                shadow-xl
                                flex
                                items-center
                                justify-center
                                hover:scale-105
                                transition-all
                                duration-300
                            "
                            >
                                <ChevronRight className="w-5 h-5 text-white" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Slider */}
                <motion.div
                    ref={sliderRef}
                    drag="x"
                    dragConstraints={{
                        left: -1200,
                        right: 0,
                    }}
                    // className="flex gap-8 overflow-x-auto scrollbar-hide pb-4 cursor-grab active:cursor-grabbing"
                    className="flex gap-8 overflow-x-auto pb-4 cursor-grab active:cursor-grabbing scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden" >

                    {blogs.map((blog, index) => (

                        <motion.div
                            key={index}
                            whileHover={{
                                y: -10,
                            }}
                            transition={{
                                duration: 0.3,
                            }}
                            className="group relative min-w-[380px] max-w-[380px] rounded-[36px] bg-white border border-[rgba(15,23,42,0.06)] shadow-[0_20px_60px_rgba(15,23,42,0.08)] overflow-hidden"
                        >

                            {/* Glow */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${blog.gradient} opacity-0 group-hover:opacity-[0.06] transition-opacity duration-500`} />

                            {/* Image */}
                            <div className="relative h-72 overflow-hidden">

                                <img
                                    src={blog.image}
                                    alt={blog.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220]/60 via-transparent to-transparent" />

                                {/* Category */}
                                <div className="absolute top-5 left-5">

                                    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur-xl shadow-lg`}>

                                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${blog.gradient}`} />

                                        <span className="text-xs font-bold text-[#0F172A]">
                                            {blog.category}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-7">

                                {/* Read Time */}
                                <div className="flex items-center gap-2 text-sm text-[#64748B] mb-5">

                                    <Clock3 className="w-4 h-4" />

                                    <span>{blog.readTime}</span>
                                </div>

                                {/* Title */}
                                <h3 className="text-2xl font-black text-[#0F172A] leading-tight">

                                    {blog.title}
                                </h3>

                                {/* Description */}
                                <p className="mt-5 text-[#64748B] leading-8 text-[15px]">

                                    {blog.description}
                                </p>

                                {/* CTA */}
                                <button className="group/btn mt-8 flex items-center gap-2 text-sm font-bold text-[#2563EB] hover:text-[#16C47F] transition-colors duration-300">

                                    Read Article

                                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>


                {/* Bottom CTA */}
                <div className="mt-20 flex justify-center">

                    <button
                        className="
                        group
                        relative
                        inline-flex
                        items-center
                        gap-3
                        overflow-hidden
                        rounded-full
                        px-8
                        py-4
                        bg-white
                        border
                        border-[rgba(15,23,42,0.08)]
                        shadow-[0_10px_40px_rgba(15,23,42,0.08)]
                        hover:shadow-[0_20px_60px_rgba(37,99,235,0.18)]
                        transition-all
                        duration-500
                        hover:-translate-y-1
                        "
                    >

                        {/* Glow */}
                        <div
                            className="
                                absolute
                                inset-0
                                opacity-0
                                group-hover:opacity-100
                                transition-opacity
                                duration-500
                                bg-gradient-to-r
                                from-[#16C47F]/10
                                via-[#2563EB]/10
                                to-[#7C3AED]/10
                                "
                        />

                        {/* Text */}
                        <span
                            className="
                            relative
                            z-10
                            text-[#0F172A]
                            font-bold
                            text-[15px]
                            tracking-tight
                            group-hover:text-[#2563EB]
                            transition-colors
                            duration-300
                            "
                        >
                            Explore All Parent Resources
                        </span>

                        {/* Icon */}
                        <div
                            className="
                            relative
                            z-10
                            w-10
                            h-10
                            rounded-full
                            bg-gradient-to-r
                            from-[#16C47F]
                            to-[#2563EB]
                            flex
                            items-center
                            justify-center
                            shadow-lg
                            group-hover:scale-110
                            transition-transform
                            duration-300
                            "
                        >

                            <ArrowRight
                                className="
                                w-5
                                h-5
                                text-white
                                group-hover:translate-x-0.5
                                transition-transform
                                duration-300
                                "
                            />
                        </div>
                    </button>
                </div>


            </div>
        </section>
    );
}
