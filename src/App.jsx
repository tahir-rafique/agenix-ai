import "./styles/typography.css";
import "./styles/fonts.css";
import "./styles/animation.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Work from "./components/Work";
import Flowchart from "./components/Flowchart";
import Services from "./components/Services";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>

      <Navbar />
      <Header />
      <Work />
      <Flowchart />
      <Services />
      <ContactUs />
      <Footer />

    </>
  );
};

export default App;
