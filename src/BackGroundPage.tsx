import './App.css';
import { useSelector } from "react-redux";
import React, { useState, useEffect } from 'react';
import App from './App'

function BackGroundPage() {

    const dsWeather = useSelector((state: any) => state.weather);
    const dsCity = useSelector((state: any) => state.city);
    const [BGColor, setBGColor] = useState('#c8e5ae');

    useEffect(() => {
        document.title = `How about the weather`;
        switchBackground();
    });   

    const switchBackground = () =>{
        debugger;
        var Average = 0;
        var filteredWeather = dsWeather.items.filter((item: any) => item.CityId == dsCity.CityId);

        for (let index = 0; index < filteredWeather.length; index++) {
            Average = filteredWeather[index].Temperature + Average;
        }

        Average = Average / 5;
        if (Average != 0) {
            if (Average < 15) { setBGColor('Teal') }
            else { setBGColor('Orange') }
        }
    }

    return (
        <div style={{ backgroundColor: BGColor, padding: "80px", height:"100vh"}} >
            <App />
        </div>
    );
}

export default BackGroundPage;
