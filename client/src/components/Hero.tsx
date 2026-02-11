import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";
import { ArrowRight, MessageCircle, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  const { t } = useI18n();

  const handleWhatsApp = () => {
    window.open("https://wa.me/8801632425636", "_blank");
  };

  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-4 overflow-hidden min-h-[90vh] flex items-center bg-[#001b3a]"
    >
      {/* Background Gradient & Pattern */}
      <div className="absolute inset-0 bg-white z-0"></div>
      {/* <div className="absolute inset-0 z-0 opacity-10"></div> */}
      {/* <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,212,255,0.1),transparent_70%)]"></div> */}

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary text-primary-foreground text-sm font-medium border border-primary/30 backdrop-blur-sm">
            <MapPin className="w-3 h-3 text-primary-foreground " />
            {t("hero.serving")}
          </div>

          <div className="relative group">
            <div className="absolute -inset-1  blur-2xl rounded-full opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <h1 className="relative text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] text-foreground">
              {t("hero.headline")}
            </h1>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
            {t("hero.subhead")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              onClick={scrollToServices}
              className="bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-8 text-base rounded-2xl shadow-xl shadow-primary/20"
            >
              {t("hero.cta_packages")}
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              onClick={handleWhatsApp}
              className="h-14 px-8 text-base rounded-2xl  bg-green-50 text-green-600 border-green-200 transition-all backdrop-blur-sm hover:bg-green-100"
            >
              <MessageCircle className="mr-2 w-5 h-5 text-green-500" />
              {t("hero.cta_whatsapp")}
            </Button>
          </div>
        </motion.div>

        {/* Decorative Element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-primary/20 border-8 border-white/50 backdrop-blur-md transform rotate-2 hover:rotate-0 transition-transform duration-500">
            <img
              src="https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&q=80&w=1000"
              alt="Clean PC Setup"
              className="w-full h-auto object-cover aspect-[4/3] opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#001b3a]/80 to-transparent flex items-end p-8">
              <div className="text-white">
                <p className="font-bold text-lg">
                  Gaming Beast? Office Workstation?
                </p>
                <p className="text-white/80 text-sm">We clean them all.</p>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50 flex items-center gap-3 animate-bounce-slow">
            <div className="bg-green-100 p-2 rounded-full">
              <MessageCircle className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Response Time</p>
              <p className="font-bold text-sm">&lt; 15 Minutes</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
