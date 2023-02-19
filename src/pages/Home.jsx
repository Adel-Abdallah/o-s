import SimpleSlider from "../components/slider/Slider";
import ContactForm from '../components/contact/Contact'
import Shop from "./Shop";
import About from "./About";
import Footer from "../components/footer/Footer"

function Home({items}) {
    return (
      <div className="Home">
          <Shop/>
          <div className="homepage-layout">
          <About/>
          <SimpleSlider items={items}/>
          <ContactForm/>
          <Footer/>
          </div>
      </div>
    );
  }
  
  export default Home;
  