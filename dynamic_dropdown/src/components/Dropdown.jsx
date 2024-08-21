import React, { useState } from "react";
import useFetch from "./useFetch";
const Dropdown = () => {
  const styles = {
    wrapper: {
      height: "100vh",
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      gap: "1rem",
    },
    dropdow: {
      height: "3rem",
      width: "40%",
      padding: "1rem",
      fontFamily: "Georgia",
    },
  };
  const [selectedCountry, setSelectedCountry] = useState("Select the country");
  const [selectedState, setSelectedState] = useState("Select the state");
  const [selectedCity, setSelectedCity] = useState("Select the city");
  const { countries, states, cities } = useFetch(
    selectedCountry,
    selectedState
  );
  const dropDownData = [
    {
      item: selectedCountry,
      onchange: (e) => setSelectedCountry(e.target.value),
      data: countries,
    },
    {
      item: selectedState,
      onchange: (e) => setSelectedState(e.target.value),
      data: states,
    },
    {
      item: selectedCity,
      onchange: (e) => setSelectedCity(e.target.value),
      data: cities,
    },
  ];
  return (
    <div style={styles.wrapper}>
      {dropDownData.map((dropDownDataItem, dropDownDataItemIndex) => (
        <select
          defaultValue={dropDownDataItem.item}
          style={styles.dropdow}
          onChange={dropDownDataItem.onchange}
          key={dropDownDataItemIndex}
        >
          <option value="">{dropDownDataItem.item}</option>
          {dropDownDataItem.data.map((item, itemIndex) => (
            <option key={itemIndex} value={item.iso2}>
              {item.name}
            </option>
          ))}
        </select>
      ))}
    </div>
  );
};

export default Dropdown;
