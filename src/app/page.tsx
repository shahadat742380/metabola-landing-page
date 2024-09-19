// import sections and components
import Banner from "@/components/banner";
import AboutUs from "@/sections/aboutUs";
import Hero from "@/sections/hero";
import OurTreatment from "@/sections/ourTreatment";
import Faq from "@/sections/Faq";
import CountDown from "@/sections/countDown";
import Blog from "@/sections/blog";

export default function Home() {
  return (
    <main>
      <Hero />
      <CountDown />
      <AboutUs />
      <OurTreatment />
      <Faq />
      <Banner />
      <Blog />
    </main>
  );
}
