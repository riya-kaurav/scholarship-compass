import { Link } from "react-router-dom";
import { GraduationCap, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    Product: [
      { label: "Scholarships", path: "/scholarships" },
      { label: "Dashboard", path: "/dashboard" },
      { label: "Categories", path: "/scholarships" },
      { label: "How It Works", path: "/" },
    ],
    Company: [
      { label: "About Us", path: "/" },
      { label: "Careers", path: "/" },
      { label: "Blog", path: "/" },
      { label: "Contact", path: "/" },
    ],
    Legal: [
      { label: "Privacy Policy", path: "/" },
      { label: "Terms of Service", path: "/" },
      { label: "Cookie Policy", path: "/" },
    ],
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="p-2 rounded-lg bg-primary-foreground/10">
                <GraduationCap className="h-5 w-5" />
              </div>
              <span className="font-display font-bold text-lg">
                Scholar<span className="text-secondary">Hub</span>
              </span>
            </Link>
            <p className="text-primary-foreground/70 text-sm mb-6 max-w-xs">
              Empowering students to discover and access educational funding
              opportunities across India.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-primary-foreground/70">
                <Mail className="h-4 w-4" />
                support@scholarhub.com
              </div>
              <div className="flex items-center gap-2 text-sm text-primary-foreground/70">
                <Phone className="h-4 w-4" />
                +91 1234 567 890
              </div>
              <div className="flex items-center gap-2 text-sm text-primary-foreground/70">
                <MapPin className="h-4 w-4" />
                New Delhi, India
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-display font-semibold mb-4">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/60">
            © 2025 ScholarHub. All rights reserved.
          </p>
          <div className="flex gap-4">
            {["Twitter", "LinkedIn", "Instagram"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
