import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
import CardExampleCard from "./components/CardExampleCard";
import { Dimmer, Loader } from "semantic-ui-react";

function App() {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      await fetch(
        `${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`
      )
        .then((res) => res.json())
        .then((result) => {
          setData(result);
          console.log(result);
        });
    };
    fetchData();
  }, [lat, long]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>My Weather App in React</h1>
        {typeof data.main != "undefined" ? (
          <CardExampleCard weatherData={data} />
        ) : (
          <div>
            <Dimmer active>
              <Loader>Loading..</Loader>
            </Dimmer>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
