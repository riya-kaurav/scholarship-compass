import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import {
  ArrowRight,
  BookOpen,
  Clock,
  Bell,
  CheckCircle,
  TrendingUp,
  Calendar,
} from "lucide-react";

const Dashboard = () => {
  const stats = [
    { icon: BookOpen, label: "Available Scholarships", value: "127", trend: "+12 this week" },
    { icon: Bell, label: "Saved Scholarships", value: "8", trend: "3 ending soon" },
    { icon: Clock, label: "Applications Pending", value: "3", trend: "2 need action" },
    { icon: CheckCircle, label: "Completed", value: "5", trend: "2 approved" },
  ];

  const recentActivity = [
    {
      title: "Central Sector Scholarship",
      status: "Applied",
      date: "Dec 20, 2025",
      statusColor: "bg-accent/10 text-accent",
    },
    {
      title: "Women in Tech Grant",
      status: "Saved",
      date: "Dec 18, 2025",
      statusColor: "bg-secondary/20 text-secondary-foreground",
    },
    {
      title: "State Merit Award",
      status: "Deadline Soon",
      date: "Dec 15, 2025",
      statusColor: "bg-destructive/10 text-destructive",
    },
  ];

  const upcomingDeadlines = [
    { title: "NTSE Scholarship", date: "Jan 5, 2026", daysLeft: 11 },
    { title: "Google India Grant", date: "Jan 15, 2026", daysLeft: 21 },
    { title: "Pragati for Girls", date: "Jan 31, 2026", daysLeft: 37 },
  ];

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-primary py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-2">
              Welcome back! 👋
            </h1>
            <p className="text-primary-foreground/80">
              Track your scholarship applications and discover new opportunities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-8 -mt-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-xl border border-border p-5 shadow-card"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <stat.icon className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <div className="font-display text-2xl font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
                <div className="text-xs text-accent mt-2 flex items-center gap-1">
                  <TrendingUp className="h-3 w-3" />
                  {stat.trend}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Recent Activity */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-2"
            >
              <div className="bg-card rounded-xl border border-border p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-display text-lg font-semibold text-foreground">
                    Recent Activity
                  </h2>
                  <Button variant="ghost" size="sm">
                    View All
                  </Button>
                </div>

                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <div className="p-2 rounded-lg bg-primary/10">
                          <BookOpen className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium text-foreground">
                            {activity.title}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {activity.date}
                          </p>
                        </div>
                      </div>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${activity.statusColor}`}
                      >
                        {activity.status}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-border">
                  <Link to="/scholarships">
                    <Button className="w-full" variant="outline">
                      Browse More Scholarships
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Upcoming Deadlines */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="bg-card rounded-xl border border-border p-6">
                <div className="flex items-center gap-2 mb-6">
                  <Calendar className="h-5 w-5 text-primary" />
                  <h2 className="font-display text-lg font-semibold text-foreground">
                    Upcoming Deadlines
                  </h2>
                </div>

                <div className="space-y-4">
                  {upcomingDeadlines.map((deadline, index) => (
                    <div
                      key={index}
                      className="p-4 bg-muted/30 rounded-lg border-l-4 border-secondary"
                    >
                      <h4 className="font-medium text-foreground mb-1">
                        {deadline.title}
                      </h4>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">
                          {deadline.date}
                        </span>
                        <span className="text-xs font-medium text-secondary">
                          {deadline.daysLeft} days left
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <Button variant="gold" size="lg" className="w-full mt-6">
                  Set Reminders
                  <Bell className="h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Dashboard;
