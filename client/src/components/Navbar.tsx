import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";
import { Globe, Menu, Monitor } from "lucide-react";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Navbar() {
  const { language, setLanguage, t } = useI18n();
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const toggleLang = () => {
    setLanguage(language === "en" ? "bn" : "en");
  };

  const NavLinks = () => (
    <>
      <button onClick={() => scrollToSection("home")} className="text-sm font-medium hover:text-primary transition-colors">
        {t("nav.home")}
      </button>
      <button onClick={() => scrollToSection("services")} className="text-sm font-medium hover:text-primary transition-colors">
        {t("nav.services")}
      </button>
      <button onClick={() => scrollToSection("why-us")} className="text-sm font-medium hover:text-primary transition-colors">
        {t("nav.why_us")}
      </button>
    </>
  );

  return (
    <nav className="glass-nav fixed top-0 w-full z-50 px-4 md:px-8 h-16 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection("home")}>
        <div className="bg-primary/10 p-2 rounded-lg">
          <Monitor className="w-5 h-5 text-primary" />
        </div>
        <span className="font-display font-bold text-xl tracking-tight text-foreground">
          Neat PC
        </span>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-8">
        <NavLinks />
      </div>

      {/* Actions */}
      <div className="hidden md:flex items-center gap-4">
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={toggleLang}
          className="gap-2 font-medium"
        >
          <Globe className="w-4 h-4" />
          {language === "en" ? "বাংলা" : "English"}
        </Button>
        <Button 
          onClick={() => scrollToSection("book")}
          className="bg-primary hover:bg-primary/90 text-white font-semibold shadow-lg shadow-primary/20"
        >
          {t("nav.book_now")}
        </Button>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden flex items-center gap-2">
         <Button 
          variant="ghost" 
          size="icon" 
          onClick={toggleLang}
          className="mr-1"
        >
          <span className="font-bold text-xs">{language === "en" ? "BN" : "EN"}</span>
        </Button>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <Menu className="w-5 h-5" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <div className="flex flex-col gap-6 mt-10">
              <NavLinks />
              <Button onClick={() => scrollToSection("book")} className="w-full">
                {t("nav.book_now")}
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
