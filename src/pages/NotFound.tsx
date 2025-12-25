import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { Home, Search, ArrowLeft } from "lucide-react";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <main className="min-h-screen bg-background flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-md"
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-8xl font-display font-bold text-primary mb-4"
        >
          404
        </motion.div>
        
        <h1 className="font-display text-2xl font-bold text-foreground mb-3">
          Page Not Found
        </h1>
        
        <p className="text-muted-foreground mb-8">
          Oops! The page you're looking for doesn't exist or has been moved.
          Let's get you back on track.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/">
            <Button variant="default" size="lg">
              <Home className="h-4 w-4" />
              Go Home
            </Button>
          </Link>
          <Link to="/scholarships">
            <Button variant="outline" size="lg">
              <Search className="h-4 w-4" />
              Browse Scholarships
            </Button>
          </Link>
        </div>

        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mt-8 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to homepage
        </Link>
      </motion.div>
    </main>
  );
};

export default NotFound;
