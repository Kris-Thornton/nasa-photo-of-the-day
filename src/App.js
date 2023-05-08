import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios"


function App() {
  const [data, setData] = useState({});
  const [query, setQuery] = useState("");


  useEffect(() => {
  const fetchData = () => {
    axios
      .get("https://api.nasa.gov/#apod")
      .then ((res) => {
        console.log(res)
      })
  }
      
}, [])


  return (
    <><div className="App">
      <header>
        <h1>
        Welcome to the NASA photo of the day.
        </h1>
      </header>
      </div>

    <div>
      <img src="https://api.nasa.gov/#apod" alt="Nasa photo" />
    </div>

    <footer>Thank you for taking a look.</footer>
    </>
    
  );




}

export default App;
