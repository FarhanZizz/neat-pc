import { useI18n } from "@/lib/i18n";
import { Home, Wrench, Zap, HandCoins } from "lucide-react";
import { motion } from "framer-motion";

export function WhyUs() {
  const { t } = useI18n();

  const features = [
    {
      icon: Home,
      title: t("why.doorstep"),
      desc: t("why.doorstep_desc"),
    },
    {
      icon: Wrench,
      title: t("why.expert"),
      desc: t("why.expert_desc"),
    },
    {
      icon: Zap,
      title: t("why.guarantee"),
      desc: t("why.guarantee_desc"),
    },
    {
      icon: HandCoins,
      title: t("why.loyalty"),
      desc: t("why.loyalty_desc"),
    }
  ];

  return (
    <section id="why-us" className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("why.title")}</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-secondary/20 border border-border/50 hover:bg-secondary/40 transition-colors text-center"
            >
              <div className="w-14 h-14 mx-auto bg-white rounded-full flex items-center justify-center shadow-sm mb-6 text-primary">
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
