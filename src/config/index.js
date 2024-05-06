import { getEnv } from "@/helpers/common";

export default {
  mapBoxApiURL: getEnv("VITE_MAP_BOX_API_URL"),
  mapBoxApiKEY: getEnv("VITE_MAP_BOX_API_KEY"),
  openWeatherOneCallApi: getEnv("VITE_OPEN_WEATHER_ONE_CALL_URL"),
  openWeatherWeatherApi: getEnv("VITE_OPEN_WEATHER_WEATHER_URL"),
  openWeatherAppId: getEnv("VITE_OPEN_WEATHER_APP_ID"),
};
