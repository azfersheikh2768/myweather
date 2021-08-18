import logo from './logo.svg';
import './App.css';
import React, { useState,useEffect } from 'react';
import WeatherForm from './WeatherForm';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {
  const[city,setCity] = useState("Moscow");
  const[mydata,setMydata] = useState(null);

  const api = {
    key: "503569e57336b524e34ff5708ae37721",

    base: "https://api.openweathermap.org/data/2.5/forecast/"
  }

useEffect(() => {

    if(city){
      fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${api.key}&units=metric`)

    .then(res => res.json())
    .then(data => setMydata(data.list))
    }
   
    
  
 
}, [city])


  return (
    
      <>
         {/* {mydata & console.log(mydata)} */}
         <div className="city"> {(city) ? city : ""}</div>
         <button type="button" className="btn btn-light" onClick={()=>setCity("Moscow")}>Moscow</button>
         <button type="button" className="btn btn-light" onClick={()=>setCity("Islamabad")}>Islamabad</button>
         <button type="button" className="btn btn-light" onClick={()=>setCity("Madrid")}>Madrid</button>



        {(mydata) ?  <WeatherForm info={mydata}/> : ""}

        </>

  );
}

export default App;
