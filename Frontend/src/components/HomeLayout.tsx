import AchievementBanner from "./AchievementBanner";
import ContactSection from "./Contactus";
import IntegratedProgramCards from "./Coursecategories";
import Features from "./Features";
import Landing from "./Landing";
import MovingSchoolAds from "./MovingAds";
import ProductSection from "./ProductSection";
import StatsSection from "./StatsSection";
import Testimonials from "./Testimonials";


const HomeLayout = () => {
  return (
    <>
      <AchievementBanner />
      <Landing />
      <MovingSchoolAds />
      <StatsSection />
      <ProductSection />
      <Features />
      <Testimonials />
      <IntegratedProgramCards />
      {/* <IntegratedProgramCards2 /> */}
      <ContactSection />
    </>
  );
};

export default HomeLayout;
