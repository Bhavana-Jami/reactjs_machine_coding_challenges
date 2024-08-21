import React, { useEffect, useState } from 'react'
const useFetch = (selectedCountry, selectedState) => {
    const [countries, setCountries] = useState([]);
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);
    var headers = new Headers();
    headers.append(
        "X-CSCAPI-KEY",
        "VjNnT1lUYmpETlIyanNiZ0F1UTg2RXpCWXBwb2dsRzJndG1MV2VIbQ=="
    );

    var requestOptions = {
        method: "GET",
        headers: headers,
        redirect: "follow",
    };

    const fetchData = (url, setState) => {
        fetch(url, requestOptions)
            .then((response) => response.json())
            .then((result) => setState(result))
            .catch((error) => console.log("error", error));
    };
    useEffect(() => {
        fetchData("https://api.countrystatecity.in/v1/countries", setCountries);
    }, []);
    useEffect(() => {
        if (selectedCountry != "Select the country") {
            fetchData(`https://api.countrystatecity.in/v1/countries/${selectedCountry}/states`, setStates)
        }
    },
        [selectedCountry]);
    useEffect(() => {
        if (selectedState != "Select the state")
            fetchData(`https://api.countrystatecity.in/v1/countries/${selectedCountry}/states/${selectedState}/cities`, setCities)
    }
        , [selectedState]);

    return { countries, states, cities }

}
export default useFetch;