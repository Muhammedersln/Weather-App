// pages/api/weather.js
import fetch from 'node-fetch';

export default async function handler(req, res) {
  const { location } = req.query;
  const apiKey = process.env.WEATHER_APP_API_KEY;
  const url = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=7&aqi=yes&alerts=yes`;

  const response = await fetch(url);
  const data = await response.json();

  res.status(response.status).json(data);
}
