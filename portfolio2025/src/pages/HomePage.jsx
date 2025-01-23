import Hero from "../components/Hero";
import CenterImage from "../components/CenterImage";
import Links from "../components/Links";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div className="container">
      <Hero />
      <CenterImage />
      <Links />
      <Footer />
    </div>
  );
};

export default HomePage;
