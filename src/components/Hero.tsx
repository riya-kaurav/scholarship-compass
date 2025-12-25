import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, GraduationCap, Award, Users, Search } from "lucide-react";

const Hero = () => {
  const stats = [
    { icon: GraduationCap, value: "500+", label: "Scholarships" },
    { icon: Award, value: "₹50Cr+", label: "Total Awards" },
    { icon: Users, value: "10K+", label: "Students Helped" },
  ];

  return (
    <section className="relative overflow-hidden bg-primary min-h-[90vh] flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-secondary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent rounded-full blur-3xl" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6"
            >
              <span className="flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-secondary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
              </span>
              <span className="text-sm text-primary-foreground/90">
                New scholarships added daily
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6"
            >
              Your Gateway to
              <span className="block text-secondary">Educational Funding</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-primary-foreground/80 mb-8 max-w-lg"
            >
              Discover government and private scholarships tailored to your
              profile. Track applications, meet deadlines, and unlock your
              academic potential.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <Link to="/scholarships">
                <Button variant="hero" size="xl">
                  Explore Scholarships
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link to="/signup">
                <Button variant="hero-outline" size="xl">
                  Create Account
                </Button>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-8"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <stat.icon className="h-6 w-6 text-secondary mx-auto mb-2" />
                  <div className="font-display text-2xl font-bold text-primary-foreground">
                    {stat.value}
                  </div>
                  <div className="text-sm text-primary-foreground/60">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden lg:block relative"
          >
            <div className="relative">
              {/* Floating Cards */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-0 right-0 bg-card rounded-xl p-4 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-accent/20 rounded-lg">
                    <Award className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Merit Scholarship</p>
                    <p className="font-semibold text-foreground">₹75,000/year</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute bottom-20 left-0 bg-card rounded-xl p-4 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-secondary/20 rounded-lg">
                    <GraduationCap className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Students Applied</p>
                    <p className="font-semibold text-foreground">2,450+</p>
                  </div>
                </div>
              </motion.div>

              {/* Main Card */}
              <div className="bg-card/90 backdrop-blur-lg rounded-2xl p-8 shadow-2xl mx-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-primary rounded-lg">
                    <Search className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground">
                      Smart Search
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Find matching scholarships
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  {["Engineering", "Medical", "Arts"].map((field, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between bg-muted/50 rounded-lg p-3"
                    >
                      <span className="text-sm text-foreground">{field}</span>
                      <span className="text-xs text-accent font-medium">
                        {50 + i * 23} available
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
