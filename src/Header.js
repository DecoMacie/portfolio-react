import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import HeroImage from "./images/hero.png";

function Header() {
  return (
    <div>
      {/* <Hero /> */}
      <Navbar image={HeroImage} />
    </div>
  );
}

export default Header;
