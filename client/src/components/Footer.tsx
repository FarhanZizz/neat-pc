import { useI18n } from "@/lib/i18n";
import { Monitor, Phone, Mail } from "lucide-react";

export function Footer() {
  const { t } = useI18n();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Brand */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
             <div className="bg-background/10 p-2 rounded-lg">
                <Monitor className="w-6 h-6 text-primary-foreground" />
             </div>
             <span className="font-display font-bold text-2xl tracking-tight">Neat PC</span>
          </div>
          <p className="text-background/70 max-w-xs">
            {t("footer.tagline")}
          </p>
        </div>

        {/* Contact */}
        <div className="space-y-4">
          <h3 className="font-bold text-lg">Contact Us</h3>
          <div className="flex items-center gap-3 text-background/80 hover:text-primary-foreground transition-colors cursor-pointer" onClick={() => window.open("https://wa.me/8801632425636")}>
            <Phone className="w-5 h-5" />
            <span>01632-425636</span>
          </div>
          <div className="flex items-center gap-3 text-background/80">
            <Mail className="w-5 h-5" />
            <span>support@neatpc.com</span>
          </div>
        </div>

        {/* Copyright */}
        <div className="space-y-4 md:text-right">
           <p className="text-sm text-background/50">
             © {currentYear} Neat PC Service. <br/>All rights reserved.
           </p>
           <p className="text-xs text-background/30">
             Dhaka, Bangladesh
           </p>
        </div>

      </div>
    </footer>
  );
}
