import BookSlider from "../components/BookSlider";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Special from "../components/Special/Special";
import { categories } from "../data";

const Home = () => {
  return (
    <>
      <Navbar />
      <Slider />
      <Special />
      {categories.map((item) => (
        <BookSlider item={item} key={item.id} />
      ))}
      <Footer />
    </>
  );
};

export default Home;
