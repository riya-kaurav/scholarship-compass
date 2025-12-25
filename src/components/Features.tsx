import { motion } from "framer-motion";
import { Search, Filter, Bell, FileCheck, Shield, Clock } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Search,
      title: "Smart Discovery",
      description:
        "AI-powered search to find scholarships that match your profile, qualifications, and goals.",
      color: "bg-primary/10 text-primary",
    },
    {
      icon: Filter,
      title: "Advanced Filters",
      description:
        "Filter by state, category, gender, income, and more to narrow down your options.",
      color: "bg-secondary/20 text-secondary-foreground",
    },
    {
      icon: Bell,
      title: "Deadline Alerts",
      description:
        "Never miss a deadline with timely notifications for your saved scholarships.",
      color: "bg-accent/10 text-accent",
    },
    {
      icon: FileCheck,
      title: "Track Applications",
      description:
        "Monitor your application status in one centralized dashboard.",
      color: "bg-sage-light text-sage",
    },
    {
      icon: Shield,
      title: "Verified Listings",
      description:
        "All scholarships are verified to ensure authenticity and legitimacy.",
      color: "bg-gold-light text-secondary-foreground",
    },
    {
      icon: Clock,
      title: "Real-time Updates",
      description:
        "Get instant updates when new scholarships matching your profile are added.",
      color: "bg-primary/10 text-primary",
    },
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Everything You Need to
            <span className="text-primary"> Succeed</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our platform provides all the tools you need to discover, apply, and
            track scholarships effectively.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card rounded-xl p-6 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div
                className={`inline-flex p-3 rounded-lg ${feature.color} mb-4 group-hover:scale-110 transition-transform`}
              >
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
