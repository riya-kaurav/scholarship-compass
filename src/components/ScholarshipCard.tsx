import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, MapPin, Users, ArrowRight } from "lucide-react";

interface Scholarship {
  id: number;
  title: string;
  type: "gov" | "non-gov";
  state: string;
  gender: string;
  description: string;
  amount?: string;
  deadline?: string;
}

interface ScholarshipCardProps {
  scholarship: Scholarship;
  index: number;
}

const ScholarshipCard = ({ scholarship, index }: ScholarshipCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group bg-card rounded-xl border border-border p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
          <GraduationCap className="h-5 w-5 text-primary" />
        </div>
        <Badge
          variant={scholarship.type === "gov" ? "default" : "secondary"}
          className="text-xs"
        >
          {scholarship.type === "gov" ? "Government" : "Private"}
        </Badge>
      </div>

      <h3 className="font-display font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
        {scholarship.title}
      </h3>

      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
        {scholarship.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        <div className="flex items-center gap-1 text-xs text-muted-foreground bg-muted px-2 py-1 rounded-md">
          <MapPin className="h-3 w-3" />
          {scholarship.state === "All" ? "All India" : scholarship.state}
        </div>
        <div className="flex items-center gap-1 text-xs text-muted-foreground bg-muted px-2 py-1 rounded-md">
          <Users className="h-3 w-3" />
          {scholarship.gender === "any"
            ? "All Genders"
            : scholarship.gender === "female"
            ? "Women Only"
            : "Men Only"}
        </div>
      </div>

      {scholarship.amount && (
        <div className="mb-4">
          <span className="text-lg font-bold text-accent">{scholarship.amount}</span>
          <span className="text-xs text-muted-foreground ml-1">/year</span>
        </div>
      )}

      <Button variant="outline" size="sm" className="w-full group/btn">
        View Details
        <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
      </Button>
    </motion.div>
  );
};

export default ScholarshipCard;
