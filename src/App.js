import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios";


function App() {
  const [data, setData] = useState({});
  

  useEffect(() => {
  const fetchData = () => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=A2OpCJGYHwZcJpHYKAdOxHKQAHNaSjfblhGWSA97")
      .then ((res) => {
        setData(res.data) 
        
      })
      .catch(err => console.error(err))
  }
      fetchData()
}, [])




const ChangePhoto = (props) => {
  return (
    
    <div className = "PhotoStyle">
     
    <h2>{props.photo.title}</h2>
    <p>{props.photo.date}</p>
    <img src={props.photo.hdurl} className="nasa-photo"/>
    </div>
  )
}





  return (
    <><div className="App">
      <header>
        <h1>
        Welcome to the NASA photo of the day.
        </h1>
      </header>
      </div>

    <div className = "PhotoStyle">
      {<ChangePhoto photo={data} />}
      
    </div>
    <div>
      <button>Date Back</button>
      <button>Date Forward</button>
    </div>
      
    <footer>Thank you for taking a look.</footer>
    </>
    
  );




}

export default App;
