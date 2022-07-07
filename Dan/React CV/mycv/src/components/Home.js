import React, { Component } from "react";
import Skills from "./components/Skills.js";
import Navbar from "./Navbar.js";

export default class Home extends Component {
  render() {
    return (
      <section>
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="col s12 m9">
              <Profile />
            </div>
            <div className="col s12 m8 l9">
              <About />
              <Skills />
              <Experience />
              <Education />
              <Portfolio />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
