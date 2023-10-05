export interface WeatherData {
  location: string;
  temperature: number | string;
  condition: string;
  isGoodWeather: boolean;
}

export interface Activity {
  name: string;
  id: string;
  isForGoodWeather: boolean;
}
