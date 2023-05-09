import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios";


function App() {
  const [data, setData] = useState({});
  const [query, setQuery] = useState("");
  const [image, setImage] = useState({})

  useEffect(() => {
  const fetchData = () => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=A2OpCJGYHwZcJpHYKAdOxHKQAHNaSjfblhGWSA97")
      .then ((res) => {
        setData(res.data) 
        console.log(res.data)
      })
      .catch(err => console.error(err))
  }
      fetchData()
}, [])




const ChangePhoto = (props) => {
  return (
    
    <div className = "PhotoStyle">
     <button>Date Back</button>
    <button>Date Forward</button>
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

    <div >
      {/* <img src = {data.url} className = 'PhotoStyle' alt={data.title}/>
      <p className='DataInfo'> {data.date} - {data.explanation}</p> */}
      {<ChangePhoto photo={data} />}

    </div>

    <footer>Thank you for taking a look.</footer>
    </>
    
  );




}

export default App;
