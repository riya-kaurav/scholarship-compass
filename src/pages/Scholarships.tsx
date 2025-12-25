import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ScholarshipCard from "@/components/ScholarshipCard";
import Footer from "@/components/Footer";
import { Search, SlidersHorizontal, X } from "lucide-react";

const scholarshipsData = [
  {
    id: 1,
    title: "Central Sector Scholarship",
    type: "gov" as const,
    state: "All",
    gender: "any",
    description: "Merit-based scholarship for top percentile undergraduate students from recognized boards.",
    amount: "₹20,000",
    deadline: "Oct 31, 2025",
  },
  {
    id: 2,
    title: "Post Matric Scholarship",
    type: "gov" as const,
    state: "MP",
    gender: "any",
    description: "Financial assistance for SC/ST/OBC students pursuing post-matriculation education.",
    amount: "₹15,000",
    deadline: "Nov 30, 2025",
  },
  {
    id: 3,
    title: "Women in Tech Scholarship",
    type: "non-gov" as const,
    state: "All",
    gender: "female",
    description: "Support for women pursuing technical education in STEM fields.",
    amount: "₹50,000",
    deadline: "Dec 15, 2025",
  },
  {
    id: 4,
    title: "Pragati Scholarship for Girls",
    type: "gov" as const,
    state: "All",
    gender: "female",
    description: "One girl child per family pursuing technical diploma/degree courses.",
    amount: "₹30,000",
    deadline: "Sep 30, 2025",
  },
  {
    id: 5,
    title: "National Talent Search Exam",
    type: "gov" as const,
    state: "All",
    gender: "any",
    description: "Prestigious scholarship for students with exceptional academic abilities.",
    amount: "₹12,500",
    deadline: "Aug 31, 2025",
  },
  {
    id: 6,
    title: "Minority Merit Scholarship",
    type: "gov" as const,
    state: "UP",
    gender: "any",
    description: "Financial support for minority community students with academic excellence.",
    amount: "₹25,000",
    deadline: "Nov 15, 2025",
  },
  {
    id: 7,
    title: "Google India Scholarship",
    type: "non-gov" as const,
    state: "All",
    gender: "any",
    description: "For students pursuing Computer Science or related technical degrees.",
    amount: "₹1,00,000",
    deadline: "Jan 31, 2026",
  },
  {
    id: 8,
    title: "State Merit Scholarship",
    type: "gov" as const,
    state: "Maharashtra",
    gender: "any",
    description: "Scholarship for top-performing students in state board examinations.",
    amount: "₹18,000",
    deadline: "Oct 15, 2025",
  },
];

const Scholarships = () => {
  const [type, setType] = useState("");
  const [state, setState] = useState("");
  const [gender, setGender] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  const filteredScholarships = scholarshipsData.filter((s) => {
    const matchesType = type === "" || type === "all" || s.type === type;
    const matchesState = state === "" || state === "all" || s.state === state || s.state === "All";
    const matchesGender = gender === "" || gender === "all" || s.gender === gender || s.gender === "any";
    const matchesSearch =
      searchQuery === "" ||
      s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesType && matchesState && matchesGender && matchesSearch;
  });

  const clearFilters = () => {
    setType("");
    setState("");
    setGender("");
    setSearchQuery("");
  };

  const hasActiveFilters = type || state || gender || searchQuery;

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-primary py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
              Discover Your <span className="text-secondary">Scholarship</span>
            </h1>
            <p className="text-primary-foreground/80 text-lg mb-8">
              Browse through government and private scholarships tailored to your
              eligibility and interests.
            </p>

            {/* Search Bar */}
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search scholarships..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-14 rounded-xl bg-card border-none text-foreground placeholder:text-muted-foreground"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Filter Toggle & Stats */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div>
              <h2 className="font-display text-xl font-semibold text-foreground">
                {filteredScholarships.length} Scholarships Found
              </h2>
              <p className="text-sm text-muted-foreground">
                Matching your criteria
              </p>
            </div>
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden"
            >
              <SlidersHorizontal className="h-4 w-4 mr-2" />
              Filters
            </Button>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <motion.aside
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className={`lg:col-span-1 ${
                showFilters ? "block" : "hidden md:block"
              }`}
            >
              <div className="bg-card rounded-xl border border-border p-6 sticky top-24">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-display font-semibold text-lg text-foreground">
                    Filters
                  </h3>
                  {hasActiveFilters && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={clearFilters}
                      className="text-xs text-muted-foreground hover:text-foreground"
                    >
                      <X className="h-3 w-3 mr-1" />
                      Clear All
                    </Button>
                  )}
                </div>

                <div className="space-y-6">
                  {/* Type Filter */}
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Scholarship Type
                    </label>
                    <Select value={type} onValueChange={setType}>
                      <SelectTrigger>
                        <SelectValue placeholder="All Types" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Types</SelectItem>
                        <SelectItem value="gov">Government</SelectItem>
                        <SelectItem value="non-gov">Private</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* State Filter */}
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      State
                    </label>
                    <Select value={state} onValueChange={setState}>
                      <SelectTrigger>
                        <SelectValue placeholder="All States" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All States</SelectItem>
                        <SelectItem value="MP">Madhya Pradesh</SelectItem>
                        <SelectItem value="UP">Uttar Pradesh</SelectItem>
                        <SelectItem value="Maharashtra">Maharashtra</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Gender Filter */}
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Gender
                    </label>
                    <Select value={gender} onValueChange={setGender}>
                      <SelectTrigger>
                        <SelectValue placeholder="All Genders" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Genders</SelectItem>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </motion.aside>

            {/* Scholarships Grid */}
            <div className="lg:col-span-3">
              {filteredScholarships.length > 0 ? (
                <div className="grid md:grid-cols-2 gap-6">
                  {filteredScholarships.map((scholarship, index) => (
                    <ScholarshipCard
                      key={scholarship.id}
                      scholarship={scholarship}
                      index={index}
                    />
                  ))}
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-16"
                >
                  <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    No scholarships found
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Try adjusting your filters or search query.
                  </p>
                  <Button variant="outline" onClick={clearFilters}>
                    Clear Filters
                  </Button>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Scholarships;
