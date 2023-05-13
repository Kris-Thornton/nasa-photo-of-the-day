import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios";
import ChangePhoto from "./components/ChangePhoto"
import {format} from "date-fns"


function App() {

  const [data, setData] = useState({});
  const formattedDate = format(new Date(), "yyyy-MM-dd")
  const [date, setDate] = useState(formattedDate)
  console.log(date)


  useEffect(() => {
  const fetchData = () => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=A2OpCJGYHwZcJpHYKAdOxHKQAHNaSjfblhGWSA97&date=${date}`)
      .then ((res) => {
        console.log(res)
        setData(res.data) 
        
      })
      .catch(err => console.error(err))
  }
      fetchData()
}, [date])

const onChangeHandler = (e) => {
    const inputValue = e.target.value;
    setDate(inputValue);

}


 return (
    <>
    
    <div className="App">
      <header>
        <h1>
        Welcome to the NASA photo of the day.
        </h1>
      </header>
      </div>
      <h5>Enter a date.</h5>
      <input type="date" value={date} onChange={onChangeHandler} max={formattedDate}></input>
    <div className = "PhotoStyle">
      {<ChangePhoto data={data} />}
    </div>
    
      
    <footer>Thank you for taking a look.</footer>
    </>
    
  );




}

export default App;
