import CounterApp from "./assets/counter/CounterApp";
import Form from "./assets/form/form";
import CarouselBase from "./assets/carousel/carouselBase";
import { useState } from "react";

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  return (
    <div style={{ position: "relative" }}>
      <section id="login-container" style={{ visibility: isLoggedIn ? "hidden" : "visible" }}>
        <Form></Form>
        <button onClick={() => setLoggedIn(true)}>Tab to this button to actually Log In</button>
        <p>(couldn't get what i wanted to work)</p>
      </section>

      <section id="counter-container" style={{ visibility: isLoggedIn ? "visible" : "hidden" }}>
        <CounterApp></CounterApp>
      </section>

      <section id="carousel-container" style={{ visibility: isLoggedIn ? "visible" : "hidden" }}>
        <p>This is non-functional and WIP:</p> <br />
        <div className="container">
          <CarouselBase></CarouselBase>
        </div>
      </section>
    </div>
  );
}

export default App;
