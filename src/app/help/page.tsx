import { HelpCircle, FileText, Mail, Info, Shield } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ContactForm from "@/components/layout/support/ContactForm";
import FAQSection from "@/components/layout/support/FAQSection";
import TermsSection from "@/components/layout/support/TermsSection";
import PrivacySection from "@/components/layout/support/PrivacySection";
import SupportHero from "@/components/layout/support/SupportHero";

const Help = () => {
  return (
    <div className="min-h-screen h-full bg-gradient-to-b from-white to-[#F1F0FB] dark:from-gray-900 dark:to-gray-800">
      <SupportHero />
      <div className="container mx-auto px-4 py-8">
        
        <Tabs defaultValue="faq" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="faq" className="flex items-center gap-2">
              <HelpCircle className="w-4 h-4" />
              FAQ
            </TabsTrigger>
            <TabsTrigger value="terms" className="flex items-center gap-2">
              <FileText className="w-4 h-4" />
              Terms
            </TabsTrigger>
            <TabsTrigger value="privacy" className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              Privacy
            </TabsTrigger>
            <TabsTrigger value="contact" className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              Contact
            </TabsTrigger>
          </TabsList>
          <TabsContent value="faq">
            <FAQSection />
          </TabsContent>
          <TabsContent value="terms">
            <TermsSection />
          </TabsContent>
          <TabsContent value="privacy">
            <PrivacySection />
          </TabsContent>
          <TabsContent value="contact">
            <Card>
              <CardHeader>
                <CardTitle>Contact Us</CardTitle>
              </CardHeader>
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};
export default Help;