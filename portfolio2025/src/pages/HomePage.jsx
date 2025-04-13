import Hero from "../components/Hero";
import CenterImage from "../components/CenterImage";
import AltCenterImage from "../components/AltCenterImage";
import Links from "../components/Links";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div className="container">
      <Hero />
      {/* <CenterImage /> */}
      <AltCenterImage />
      <Links />
      <Footer />
    </div>
  );
};

export default HomePage;
