import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertBookingSchema, type InsertBooking } from "@shared/schema";
import { useI18n } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { MessageCircle, Info } from "lucide-react";
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface BookingFormProps {
  selectedPackage: string;
}

export function BookingForm({ selectedPackage }: BookingFormProps) {
  const { t } = useI18n();
  const { toast } = useToast();
  const [minDate, setMinDate] = useState("");

  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    setMinDate(today);
  }, []);

  const form = useForm<InsertBooking>({
    resolver: zodResolver(insertBookingSchema),
    defaultValues: {
      fullName: "",
      phoneNumber: "",
      address: "",
      preferredDate: "",
      packageType: "",
      notes: ""
    }
  });

  // Update form when selectedPackage prop changes
  useEffect(() => {
    if (selectedPackage) {
      form.setValue("packageType", selectedPackage);
    }
  }, [selectedPackage, form]);

  const onSubmit = (data: InsertBooking) => {
    toast({
      title: t("book.success"),
      description: t("book.redirect"),
    });

    // Construct WhatsApp Message
    const message = `Hello Neat PC! I want to book a service.\n\n*Name:* ${data.fullName}\n*Phone:* ${data.phoneNumber}\n*Package:* ${data.packageType}\n*Address:* ${data.address}\n*Date:* ${data.preferredDate}\n*Notes:* ${data.notes || "None"}`;
    
    // Encode and redirect
    const whatsappUrl = `https://wa.me/8801632425636?text=${encodeURIComponent(message)}`;
    
    // Wait a moment for toast then redirect
    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
      form.reset();
    }, 1500);
  };

  const openWhatsAppDirect = () => {
    window.open("https://wa.me/8801632425636", "_blank");
  };

  return (
    <section id="book" className="py-24 px-4 bg-secondary/30">
      <div className="max-w-2xl mx-auto">
        <Card className="shadow-2xl border-0 overflow-hidden">
          <div className="h-2 bg-gradient-to-r from-primary to-accent"></div>
          <CardHeader className="bg-white pb-8">
            <CardTitle className="text-3xl text-center">{t("book.title")}</CardTitle>
          </CardHeader>
          <CardContent className="bg-white pt-2">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("book.name")}</FormLabel>
                        <FormControl>
                          <Input className="h-12 bg-secondary/30 border-transparent focus:bg-white focus:border-primary transition-all" placeholder="John Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phoneNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("book.phone")}</FormLabel>
                        <FormControl>
                          <Input className="h-12 bg-secondary/30 border-transparent focus:bg-white focus:border-primary transition-all" placeholder="017..." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("book.address")}</FormLabel>
                      <FormControl>
                        <Input className="h-12 bg-secondary/30 border-transparent focus:bg-white focus:border-primary transition-all" placeholder="Chattogram" {...field} />
                      </FormControl>
                      <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
                        <Info className="w-3 h-3 text-primary" />
                        {t("book.address_helper")}
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="packageType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("book.package")}</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger className="h-12 bg-secondary/30 border-transparent focus:bg-white focus:border-primary">
                              <SelectValue placeholder={t("book.package")} />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Basic">Basic Clean (৳499)</SelectItem>
                            <SelectItem value="Advanced">Advanced Care (৳699)</SelectItem>
                            <SelectItem value="Ultimate">Ultimate Detox (৳999)</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="preferredDate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("book.date")}</FormLabel>
                        <FormControl>
                          <Input 
                            type="date" 
                            min={minDate}
                            className="h-12 bg-secondary/30 border-transparent focus:bg-white focus:border-primary transition-all" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="notes"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("book.notes")}</FormLabel>
                      <FormControl>
                        <Textarea className="min-h-[100px] bg-secondary/30 border-transparent focus:bg-white focus:border-primary transition-all" placeholder="..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  className="w-full h-14 text-lg font-bold bg-gradient-to-r from-primary to-primary/90 hover:to-primary shadow-lg shadow-primary/25 rounded-xl"
                >
                  {t("book.submit")}
                </Button>
              </form>
            </Form>
            
            <div className="mt-8 text-center border-t pt-6">
               <Button variant="ghost" onClick={openWhatsAppDirect} className="text-green-600">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  {t("book.or_whatsapp")}
               </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
