import "bulma/css/bulma.css";

import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

function App() {
  return (
    <div className="container is-max-desktop">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
