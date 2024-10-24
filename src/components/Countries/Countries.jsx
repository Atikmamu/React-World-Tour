import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'

// array distructuring 
const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([])
    const [visitedFlags, setVisitedFlags] = useState ([]);

    //  useEffect fetch 
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data));
    }, [])

        //  event handler 
    const handleVisitedCountry = country => {
        console.log('add this to your visited country');
        const newVisitedCountry = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountry);
    }

    const handleVisitedFlags = flag => {
        const newVisitedFlags = [...visitedFlags, flag];
        setVisitedFlags(newVisitedFlags);
    }

    // remove item from an array in a state 
    // use filter to select all the elements except the one you want to remove 

    



    return (
        <div>
            <h3>Countries: {countries.length}</h3>
            {/* visited country  map chalaisi*/}
            <div>
                <h5>Visited Countries: {visitedCountries.length}</h5>
                <ul>
                    {
                        visitedCountries.map(country => <li key={country.cca3}>
                        {country.name.common}</li>)
                    }
                </ul>
            </div>
              {/* visited flags ar jonno map chalaisi */}
             <div className="flag-container">
                  {
                    visitedFlags.map((flag, index) => <img key={index} src={flag}></img>)
                  }
             </div>

            {/* display countries map chalaisi */}
          <div className="country-container">
          {
                countries.map(country => <Country 
                    key={country.cca3}
                    handleVisitedCountry = {handleVisitedCountry}
                    handleVisitedFlags = {handleVisitedFlags}
                    country={country}></Country>)
            }
          </div>
        </div>
    );
};

export default Countries;