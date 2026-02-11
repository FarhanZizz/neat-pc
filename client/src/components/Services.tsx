import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useI18n } from "@/lib/i18n";
import { Check, Wind, Cpu, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

interface ServicesProps {
  onSelectPackage: (pkg: string) => void;
}

export function Services({ onSelectPackage }: ServicesProps) {
  const { t } = useI18n();

  const packages = [
    {
      id: "Basic",
      name: t("pkg.basic.name"),
      price: "৳499",
      desc: t("pkg.basic.desc"),
      icon: Wind,
      features: [t("pkg.basic.feat1"), t("pkg.basic.feat2"), t("pkg.basic.feat3")],
      popular: false,
      color: "blue"
    },
    {
      id: "Advanced",
      name: t("pkg.adv.name"),
      price: "৳699",
      desc: t("pkg.adv.desc"),
      icon: Cpu,
      features: [t("pkg.adv.feat1"), t("pkg.adv.feat2"), t("pkg.adv.feat3")],
      popular: true,
      color: "teal"
    },
    {
      id: "Ultimate",
      name: t("pkg.ult.name"),
      price: "৳999",
      desc: t("pkg.ult.desc"),
      icon: ShieldCheck,
      features: [t("pkg.ult.feat1"), t("pkg.ult.feat2"), t("pkg.ult.feat3"), t("pkg.ult.feat4"), t("pkg.ult.feat5")],
      popular: false,
      color: "purple"
    }
  ];

  return (
    <section id="services" className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("services.title")}</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => {
            const Icon = pkg.icon;
            return (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className={`
                  relative h-full flex flex-col border-2 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl
                  ${pkg.popular ? 'border-primary shadow-lg scale-105 z-10' : 'border-border/50 hover:border-primary/50'}
                `}>
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold shadow-md">
                      {t("services.popular")}
                    </div>
                  )}

                  <CardHeader>
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-${pkg.color}-100 text-${pkg.color}-600`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                    <div className="flex items-baseline gap-1 mt-2">
                      <span className="text-3xl font-bold text-primary">{pkg.price}</span>
                    </div>
                    <CardDescription className="mt-2">{pkg.desc}</CardDescription>
                  </CardHeader>

                  <CardContent className="flex-grow">
                    <ul className="space-y-3">
                      {pkg.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm">
                          <Check className="w-5 h-5 text-green-500 shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>

                  <CardFooter>
                    <Button 
                      className={`w-full h-12 text-base font-semibold ${pkg.popular ? 'bg-primary hover:bg-primary/90' : 'variant-outline'}`}
                      variant={pkg.popular ? "default" : "outline"}
                      onClick={() => onSelectPackage(pkg.id)}
                    >
                      {t("services.book_btn")}
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
