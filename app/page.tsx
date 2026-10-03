import { Hero } from "@/components/sections/Hero";
import { TrustedBy } from "@/components/sections/TrustedBy";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Capabilities } from "@/components/sections/Capabilities";
import { Testimonials } from "@/components/sections/Testimonials";
import { CtaBand } from "@/components/sections/CtaBand";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <Services />
      <Process />
      <CaseStudies />
      <Capabilities />
      <Testimonials />
      {/* On Home, Hero has the single primary CTA button; CtaBand renders outline variant */}
      <CtaBand isPrimary={false} />
    </>
  );
}
