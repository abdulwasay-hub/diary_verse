import axios from "axios";

export const fetchWeatherData = async (latitude, longitude) => {
  try {
    const apiKey = "96591827064b072ead82048000b238be"; // Replace with your API key
    const response = await axios.get(
      `https://api.weatherapi.com/v1/current.json`,
      {
        params: {
          key: apiKey,
          q: `Lagos`, // Example location, you can replace this with latitude and longitude
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log("Error fetching weather data:", error);
    throw error; // Optionally rethrow the error to handle it elsewhere
  }
};