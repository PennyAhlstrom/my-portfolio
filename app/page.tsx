import Banner from "@/components/home/Banner";
import CareerSummary from "@/components/home/CareerSummary";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import ContactSection from "@/components/home/ContactSection";

export default function HomePage() {
  return (
    <>
      <Banner />
      <CareerSummary />
      <FeaturedProjects />
      <ContactSection />
    </>
  );
}