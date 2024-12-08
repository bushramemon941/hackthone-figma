import AboutBrand from "@/components/About/AboutBrand";
import AboutFeatures from "@/components/About/AboutFeatures";
import AboutGetInTouch from "@/components/About/AboutGetInTouch";
import AboutSection from "@/components/About/AboutSection";
import AboutSignUp from "@/components/About/AboutSignUp";

const About = () => {
  return (
    <div className="relative mx-auto w-[390px] h-[3911px] md:w-[1440px] md:h-[2960px] bg-white">
      <AboutSection />
      <AboutFeatures />
      <AboutGetInTouch />
      <AboutBrand />
      <AboutSignUp />
    </div>
  );
};

export default About;