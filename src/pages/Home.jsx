import Banner from "../components/Banner";
import HowItWorks from "../components/HowItWorks";
import LatestVisas from "../components/LatestVisas";
import WhyChooseUs from "../components/WhyChooseUs";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <LatestVisas></LatestVisas>
      <WhyChooseUs></WhyChooseUs>
      <HowItWorks></HowItWorks>
    </div>
  );
};

export default Home;
