import { SectionTitle } from "@/components/common/SectionTitle";
import { ContactForm } from "@/components/forms/ContactForm";

export default function Contact() {
  return (
    <div className="container section-padding">
      <SectionTitle title="Contact Us" />
      <div className="mt-12 max-w-2xl mx-auto">
        <ContactForm />
      </div>
    </div>
  );
}