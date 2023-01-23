import "./App.scss";
import Button from "react-bootstrap/Button";

// import {
//   Work,
//   Events,
//   Footer,
//   Header,
//   Courses,
//   Skills,
//   Testimonial,
// } from "./container";

import { Navbar } from "./components";
import Header from "./container/Header/Header";
import Work from "./container/Work/Work";
import Events from "./container/Events/Events";
import Transport from "./container/transport/Transport";
import Accomodation from "./container/accomodation/Accomodation";
import Activities from "./container/activities/Activities";
import Opportunities from "./container/opportunities/Opportunities";
import Menu from "./container/menu/Menu";
import Help from "./container/Testimonial/Testimonial";
import Footer from "./container/Footer/Footer";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <Work />
      <Transport />
      <Events />
      <Accomodation />
      <Activities />
      <Opportunities />
      {/* <Menu /> */}
      {/* <Help /> */}

      {/* <Courses />
      <Skills />
      <Testimonial /> */}
      <Footer />
    </div>
  );
}

export default App;
