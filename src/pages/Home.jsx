import Footer from "../components/Footer";
import Header from "../components/Header";
import Latest from "../components/Latest";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import Skills from "../components/Skills";
import Timeline from "../components/Timeline";
import About from "../components/About"
import Touch from "../components/Touch";
import Sidebar from "../components/sidebar";

const Home = () => {
  return (
    <>
      {/* <Sidebar /> */}
      <Header />
      <About />
      <Services />
      {/* <Latest /> */}
      <Touch />
      <Skills />
      {/* <Timeline />; */}
    </>
  );
};

export default Home;
