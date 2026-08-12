import { Search, Filter, RotateCcw } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function StudyMaterialsFilters() {
  const [filters, setFilters] = useState({
    board: "",
    className: "",
    subject: "",
    resourceType: "",
    search: "",
  });

  const boards = [
    "CBSE",
    "ICSE",
    "SSC",
    "State Board",
    "HSC",
  ];

  const classes = [
    "Class 1",
    "Class 2",
    "Class 3",
    "Class 4",
    "Class 5",
    "Class 6",
    "Class 7",
    "Class 8",
    "Class 9",
    "Class 10",
    "Class 11",
    "Class 12",
  ];

  const subjects = [
    "Mathematics",
    "Science",
    "English",
    "Physics",
    "Chemistry",
    "Biology",
    "Computer Science",
  ];

  const resourceTypes = [
    "Notes",
    "Worksheets",
    "Sample Papers",
    "Question Banks",
    "Revision Notes",
    "Practice Tests",
  ];

  const activeFilters =
    Object.values(filters).filter(Boolean).length;

  const resetFilters = () => {
    setFilters({
      board: "",
      className: "",
      subject: "",
      resourceType: "",
      search: "",
    });
  };

  return (
    <section className="sticky top-[90px] z-30 py-6 bg-transparent">

      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="
          rounded-[32px]
          border
          border-[rgba(30,27,58,0.08)]
          bg-white/75
          backdrop-blur-2xl
          shadow-[0_20px_60px_rgba(30,27,58,0.08)]
          p-6
          "
        >

          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">

            <div className="flex items-center gap-3">

              <div
                className="
                w-11
                h-11
                rounded-2xl
                bg-gradient-to-r
                from-[#7B2FF7]
                to-[#7B2FF7]
                flex
                items-center
                justify-center
                text-white
                shadow-lg
                "
              >
                <Filter className="w-5 h-5" />
              </div>

              <div>
                <h3 className="font-bold text-[#1E1B3A]">
                  Smart Search & Filters
                </h3>

                <p className="text-sm text-[#6E6A85]">
                  Quickly find study materials
                </p>
              </div>

            </div>

            <div className="flex items-center gap-3">

              {activeFilters > 0 && (
                <div
                  className="
                  px-4
                  py-2
                  rounded-full
                  bg-[#7B2FF7]/10
                  text-[#7B2FF7]
                  text-sm
                  font-semibold
                  "
                >
                  {activeFilters} Active Filters
                </div>
              )}

              <button
                onClick={resetFilters}
                className="
                flex
                items-center
                gap-2
                px-4
                py-2
                rounded-full
                border
                border-[rgba(30,27,58,0.08)]
                text-[#6E6A85]
                hover:bg-[#FAFAFC]
                transition-all
                "
              >
                <RotateCcw className="w-4 h-4" />
                Reset
              </button>

            </div>

          </div>

          {/* Filters */}
          <div className="grid lg:grid-cols-5 gap-4">

            {/* Board */}
            <select
              value={filters.board}
              onChange={(e) =>
                setFilters({
                  ...filters,
                  board: e.target.value,
                })
              }
              className="
              h-14
              rounded-2xl
              border
              border-[rgba(30,27,58,0.08)]
              bg-white
              px-4
              font-medium
              text-[#1E1B3A]
              outline-none
              focus:border-[#7B2FF7]
              "
            >
              <option value="">
                Select Board
              </option>

              {boards.map((board) => (
                <option
                  key={board}
                  value={board}
                >
                  {board}
                </option>
              ))}
            </select>

            {/* Class */}
            <select
              value={filters.className}
              onChange={(e) =>
                setFilters({
                  ...filters,
                  className: e.target.value,
                })
              }
              className="
              h-14
              rounded-2xl
              border
              border-[rgba(30,27,58,0.08)]
              bg-white
              px-4
              font-medium
              "
            >
              <option value="">
                Select Class
              </option>

              {classes.map((item) => (
                <option
                  key={item}
                  value={item}
                >
                  {item}
                </option>
              ))}
            </select>

            {/* Subject */}
            <select
              value={filters.subject}
              onChange={(e) =>
                setFilters({
                  ...filters,
                  subject: e.target.value,
                })
              }
              className="
              h-14
              rounded-2xl
              border
              border-[rgba(30,27,58,0.08)]
              bg-white
              px-4
              font-medium
              "
            >
              <option value="">
                Select Subject
              </option>

              {subjects.map((item) => (
                <option
                  key={item}
                  value={item}
                >
                  {item}
                </option>
              ))}
            </select>

            {/* Resource Type */}
            <select
              value={filters.resourceType}
              onChange={(e) =>
                setFilters({
                  ...filters,
                  resourceType:
                    e.target.value,
                })
              }
              className="
              h-14
              rounded-2xl
              border
              border-[rgba(30,27,58,0.08)]
              bg-white
              px-4
              font-medium
              "
            >
              <option value="">
                Resource Type
              </option>

              {resourceTypes.map((item) => (
                <option
                  key={item}
                  value={item}
                >
                  {item}
                </option>
              ))}
            </select>

            {/* Search */}
            <div
              className="
              h-14
              rounded-2xl
              border
              border-[rgba(30,27,58,0.08)]
              bg-white
              px-4
              flex
              items-center
              gap-3
              "
            >
              <Search className="w-5 h-5 text-[#6E6A85]" />

              <input
                value={filters.search}
                onChange={(e) =>
                  setFilters({
                    ...filters,
                    search: e.target.value,
                  })
                }
                placeholder="Search Resources..."
                className="
                flex-1
                bg-transparent
                outline-none
                text-sm
                "
              />
            </div>

          </div>

          {/* Quick Filters */}
          <div className="flex flex-wrap gap-3 mt-6">

            {[
              "CBSE",
              "ICSE",
              "Class 10",
              "Mathematics",
              "Sample Papers",
              "Worksheets",
            ].map((item) => (
              <button
                key={item}
                className="
                px-4
                py-2
                rounded-full
                bg-[#FAFAFC]
                border
                border-[rgba(30,27,58,0.08)]
                text-sm
                font-medium
                text-[#6E6A85]
                hover:border-[#7B2FF7]
                hover:text-[#7B2FF7]
                transition-all
                "
              >
                {item}
              </button>
            ))}

          </div>

        </motion.div>

      </div>
    </section>
  );
}