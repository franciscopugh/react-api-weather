import React from 'react';

import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "bfd1b980aa5416c251b43fb2f1ba6c22";

class App extends React.Component{
    
    state = {
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error:undefined
    }

    getWeather = async(e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const country= e.target.elements.country.value;
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
        const data = await  api_call.json();
        if(data.message !== "city not found"){
            this.setState({
                temperature: data.main.temp,
                city: data.name,
                country: data.sys.country,
                humidity: data.main.humidity,
                description: data.weather[0].description,
                error: ""
                
            }); 
        } else {
            this.setState({
                error: "Please Enter a valid city and country" 
            });
        }
    }  
    render() {
        return (
            <div>
                <Titles/>
                <Form getWeather={this.getWeather}/>
                <Weather 
                    temperature={this.state.temperature}
                    city={this.state.city}
                    country={this.state.country}
                    humidity={this.state.humidity}
                    description={this.state.description}
                    error={this.state.error}
                />
            </div>
        );
    }
};

export default App;
