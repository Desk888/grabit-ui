import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";


const FAQSection = () => {
  const faqs = [
    {
      question: "How do I get started?",
      answer: "Getting started is easy! Simply sign up for an account and either search for items or post your own ad."
    },
    {
      question: "How do I post an ad?",
      answer: "Simply search for the item you want to sell and click the 'Sell' button. Fill in the details and submit the form. Once the ad is submitted, it will be listed on the marketplace."
    },
    {
      question: "Can I cancel my account?",
      answer: "Yes, you can cancel your account at any time. Drop us an email using the contact form in this page."
    },
    {
      question: "How can I reset my password?",
      answer: "Click the 'Forgot Password' link on the login page. We'll send you an email with instructions to reset your password."
    },
    {
      question: "Can I charge for my items?",
      answer: "It's up to you, on Grabit, we proud ourselves of providing a free service, and we encourage our users of offering items for free. However, if you want to charge for your items, you can do so, but we do not offer any payment methods through our platform."
    },
    {
      question: "Are ads free of charge?",
      answer: "Yes, all ads on Grabit are free of charge. However, if you want to charge for your items, you can do so, but we do not offer any payment methods through our platform."
    },
    {
      question: "What items can I give away?",
      answer: "You can give away any items except pornographic, obscene, or otherwise offensive content. We do not allow items that are illegal or violate any laws."
    }

  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Frequently Asked Questions</CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  );
};

export default FAQSection;