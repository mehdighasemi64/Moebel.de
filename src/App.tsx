import './App.css';
import { Weather, City } from './types/index';
import { useDispatch, useSelector } from "react-redux";
import React, { useState, useEffect } from 'react';
import { initWeatherList, filterCity } from './actions'
import { Table } from 'react-bootstrap'
import Snowy from './svg/wi-snow.svg'
import Sunny from './svg/wi-day-sunny.svg'
import Stormy from './svg/wi-thunderstorm.svg'
import Wet from './svg/wi-showers.svg'
import Cloudy from './svg/wi-cloudy.svg'
import Windy from './svg/wi-windy.svg'
import Rainy from './svg/wi-rain.svg'

function App() {

  const [DropDownCity, setDropDownCity] = useState([]);
  const [selectedCity, setselectedCity] = useState(0);
  const [ShowTableWeather, setShowTableWeather] = useState(false);
  const ds = useSelector((state: any) => state.weather);
  const dispatch = useDispatch(); 

  useEffect(() => {
    document.title = `How about the weather`;
    BindCities();
    getAllWeather();
  }, []);

  const BindCities = () => {
    debugger;
    fetch('http://localhost:7867/api/City/AllCities', {
      method: "GET",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json; charset=utf-8"
      },
    })
      .then(result => result.json())
      .then(result => setDropDownCity(result))
  }

  const handleChange = (e: any) => {
    setselectedCity(e.target.value)
    dispatch(filterCity(e.target.value));
    setShowTableWeather(true);
  }

  const getAllWeather = () => {
    debugger;
    fetch('http://localhost:7867/api/City/getAllWeather', {
      method: "PUT",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json; charset=utf-8"
      },
    })
      .then(result => result.json())
      .then(result => dispatch(initWeatherList(result))
      )
  }

  const renderTableData = (cityID: any) => {
    return ds.items.filter((item: Weather) => item.CityId == cityID).map((item: Weather, index: any) => {
      var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thurday", "Friday", "Saturday"];
      var today = daysOfWeek[new Date().getDay()];
      var todayIndex = daysOfWeek.indexOf(today);
      var sortedWeek = [];

      for (let i = todayIndex; i < daysOfWeek.length; i++) {
        sortedWeek.push(daysOfWeek[i])
      }

      const LenghtSortedweek = sortedWeek.length;
      for (let i = 0; i < 7 - LenghtSortedweek; i++) {
        sortedWeek.push(daysOfWeek[i])
      }

      var image = "";
      switch (item.WeatherType) {

        case "Snowy":
          image = Snowy;
          break;

        case "Rainy":
          image = Rainy;
          break;

        case "Stormy":
          image = Stormy;
          break;

        case "Cloudy":
          image = Cloudy;
          break;

        case "Wet":
          image = Wet;
          break;

        case "Windy":
          image = Windy;
          break;

        case "Sunny":
          image = Sunny;
          break;

        default:
          break;
      }

      return (
        <tr>
          <td className="WeeklyTable">{sortedWeek[index]}</td>
          <td className="celsius" style={{ fontSize: "20px" }}>{item.Temperature}</td>
          <td >
            <img src={image} style={{ width: "40px", height: "40px" }} alt="NoWeather" />
          </td>
        </tr>
      )
    })
  }

  const ShowTodayTemp = (cityID: any) => {
    var todayTemp = ds.items.filter((item: Weather) => item.CityId == cityID);
    return todayTemp[0].Temperature;
  }

  const ShowTodayWeatherType = (cityID: any) => {
    debugger;
    var todayTemp = ds.items.filter((item: Weather) => item.CityId == cityID);
    var WeatherType;

    switch (todayTemp[0].WeatherType) {
      case "Snowy":
        WeatherType = Snowy;
        break;

      case "Rainy":
        WeatherType = Rainy;
        break;

      case "Stormy":
        WeatherType = Stormy;
        break;

      case "Cloudy":
        WeatherType = Cloudy;
        break;

      case "Wet":
        WeatherType = Wet;
        break;

      case "Windy":
        WeatherType = Windy;
        break;

      case "Sunny":
        WeatherType = Sunny;
        break;

      default:
        return "";
    }
    return <img src={WeatherType} style={{ width: "40px", height: "40px" }} ></img>
  }

  var WeatherList =
    <div className="col-md-4" style={{ float: "none", margin: "auto" }}>
      <div className="todayTemp" style={{ textAlign: "center" }}>
        {selectedCity != 0 ? ShowTodayWeatherType(selectedCity) : ""}
        {selectedCity != 0 ? <span className="celsius">{ShowTodayTemp(selectedCity)}</span> : ""}
      </div>

      <Table borderless hover style={{ backgroundColor: "transparent" }} >
        <tbody>
          {renderTableData(selectedCity)}
        </tbody>
      </Table>
    </div >;

  return (
    <div className="App">
      <div className="topCorner" style={{ textAlign: "left" }}>
        <p style={{ fontSize: "36px" }}>WW</p>
        <p>whatweather?</p>
      </div>
      <br />
      <br />
      <div style={{ textAlign: "left" }} >
        <p>Select your location and we tell you what weather to expect.</p>
      </div>
      <div>
        <select className="btn-lg  menu dropdown-toggle" onChange={handleChange} value={selectedCity}
          style={{ width: '100%', backgroundColor: "white", textAlignLast: "center" }}>

          <option value={0}>Please select a city</option>
          {DropDownCity.map((x: City) => <option key={x.CityId} value={x.CityId}> {x.CityName}</option>)}

        </select>
      </div>
      <br></br>
      {ShowTableWeather && WeatherList}
    </div>
  );
}

export default App;
