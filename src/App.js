import "./App.scss";
import Button from "react-bootstrap/Button";

import {
  About,
  Events,
  Footer,
  Header,
  Courses,
  Skills,
  Testimonial,
  Work,
} from "./container";

import { Navbar } from "./components";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Events />
      <Work />
      <Courses />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
