import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";

const Index = () => {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <Features />

      {/* CTA Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-primary rounded-3xl p-8 md:p-12 relative overflow-hidden"
          >
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/20 rounded-full blur-3xl" />

            <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                  Ready to Find Your
                  <span className="text-secondary"> Perfect Scholarship?</span>
                </h2>
                <p className="text-primary-foreground/80 mb-6">
                  Join thousands of students who have already discovered their
                  ideal funding opportunities through ScholarHub.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/scholarships">
                    <Button variant="hero" size="lg">
                      Browse Scholarships
                      <ArrowRight className="h-5 w-5" />
                    </Button>
                  </Link>
                  <Link to="/signup">
                    <Button variant="hero-outline" size="lg">
                      Create Free Account
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  "Access 500+ verified scholarships",
                  "Smart matching based on your profile",
                  "Track all applications in one place",
                  "Never miss a deadline",
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="h-5 w-5 text-secondary" />
                    <span className="text-primary-foreground/90">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
};

export default Index;
