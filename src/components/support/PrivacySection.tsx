import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
const PrivacySection = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Privacy Policy</CardTitle>
      </CardHeader>
      <CardContent className="prose dark:prose-invert max-w-none">
        <h2>1. Information We Collect</h2>
        <p>We collect information that you provide directly to us, including when you create an account, make a purchase, or contact us for support.</p>
        <h2>2. How We Use Your Information</h2>
        <p>We use the information we collect to provide, maintain, and improve our services, to process your transactions, and to communicate with you.</p>
        <h2>3. Information Sharing</h2>
        <p>We do not sell or share your personal information with third parties except as described in this privacy policy or with your consent.</p>
        <h2>4. Data Security</h2>
        <p>We implement appropriate technical and organizational measures to protect the security of your personal information.</p>
      </CardContent>
    </Card>
  );
};
export default PrivacySection;