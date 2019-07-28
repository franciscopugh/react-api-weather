import React from 'react';

import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "bfd1b980aa5416c251b43fb2f1ba6c22";

class App extends React.Component{
    getWeather = async(e) => {
        e.preventDefault();
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=Manchester,uk&appid=${API_KEY}&units=metric`);
        const data = await  api_call.json();
        console.log(data);
    }
    render() {
        return (
            <div>
                <Titles/>
                <Form getWeather={this.getWeather}/>
                <Weather/>
            </div>
        );
    }
};

export default App;
