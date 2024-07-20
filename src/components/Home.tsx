import Certified from "./Certified";
import Course from "./Course";
import Footer from "./Footer";
import Others from "./Others";
import Payment from "./Payment";

const Home = () => {
  return (
    <section className="w-full h-full flex items-center justify-center flex-wrap">
      <Course />
      <Payment />
      <Others />
      <Certified />
      <Footer />
    </section>
  );
};

export default Home;
