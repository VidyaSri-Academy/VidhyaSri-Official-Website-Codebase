import ContactSection from "./Contactus";
import IntegratedProgramCards from "./Coursecategories";
import IntegratedProgramCards2 from "./Coursescategories2";
import Features from "./Features";
import InvestorSection from "./Investorsec";
import Landing from "./Landing";
import MovingSchoolAds from "./MovingAds";
import ProductSection from "./ProductSection";
import Testimonials from "./Testimonials";


const HomeLayout = () => {
  return (
    <>
      <Landing />
      <MovingSchoolAds />
      <ProductSection />
      <Features />
      <Testimonials />
      <InvestorSection />
      <IntegratedProgramCards />
      <IntegratedProgramCards2 />
      <ContactSection />
    </>
  );
};

export default HomeLayout;
