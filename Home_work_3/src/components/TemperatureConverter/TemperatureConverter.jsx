import React, { useState } from "react";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const TemperatureConverter = () => {
    const BoxStyle = {
      margin: '20px',
      width: '500px',
      maxWidth: "100%"

    }
    const [celsius, setCelsius] = useState("");
    const [fahrenheit, setFahrenheit] = useState("");


     const handleCelsiusChange = (event) => {
    setCelsius(event.target.value);
    setFahrenheit((parseFloat(event.target.value)*1.8 + 32).toFixed(2)); // Преобразование в Фаренгейт
  };

  const handleFahrenheitChange = (event) => {
    setFahrenheit(event.target.value);
    setCelsius((parseFloat((event.target.value)-32 )/1.8).toFixed(1)); // Преобразование в Цельсия
  };
  return (
    <div>
      <Box style={BoxStyle}>
        <TextField
          fullWidth
         
          label="Температура в C°"
          id="celsius"
          onChange={handleCelsiusChange}
          value={celsius}
        />
      </Box>
      <Box style={BoxStyle}>
        <TextField
          fullWidth
          
          label="Температура в F°"
          id="fahrenheit"
          onChange={handleFahrenheitChange}
          value={fahrenheit}
          
        />
      </Box>
    </div>
  );
};

export default TemperatureConverter;