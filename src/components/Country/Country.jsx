import { useState } from 'react';
import './Country.css';

const Country = ({ country, handleVisitedCountry, handleVisitedFlags }) => {
    const {name, flags, area, capital, population, cca3} = country;

    const [visited, setVisited] = useState(false);


    const handleVisited = () => {
        setVisited(!visited);
    }    
    

    return (
        <div className={`country ${visited ? 'visited' : 'non-visited'}`}>
            <h3 style={{color: visited ? 'purple' : 'black'}}>{name.common}</h3>
            <img src={flags.png} alt="" />
            <h3>area: {area}</h3>
            <h3>capital: {capital}</h3>
            <h3>Population: {population}</h3>
            <p><small>Code: {cca3}</small></p>
            <button onClick={() => handleVisitedCountry(country)}>Mark visited</button>
            <br />
            <button onClick={() => handleVisitedFlags(country.flags.png)}>Add Flag</button>
            <br />
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>
            {visited ? 'I have visited this country.' : 'I want to visit'}
        </div>
    );
};

export default Country;