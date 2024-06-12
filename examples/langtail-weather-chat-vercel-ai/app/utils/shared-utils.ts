import zod from "zod";

export function decodeSkyState(maybeSkyState: string): SkyCondition | null {
  const loweredCase = maybeSkyState.toLocaleLowerCase();
  if (loweredCase.includes("cloud")) {
    return "Cloudy";
  }

  if (loweredCase.includes("rain")) {
    return "Rainy";
  }

  if (loweredCase.includes("snow")) {
    return "Snowy";
  }

  if (loweredCase.includes("wind")) {
    return "Windy";
  }

  if (loweredCase.includes("fair")) {
    return "Sunny";
  }

  if (loweredCase.includes("sun")) {
    return "Sunny";
  }

  return null;
}

export const WeatherSchema = zod.object({
  main: zod.object({
    temp: zod.union([zod.number(), zod.string()]),
  }),
  weather: zod.array(zod.object({ main: zod.string() })),
});

export type SkyCondition = "Cloudy" | "Sunny" | "Rainy" | "Snowy" | "Windy";

export function getWeather(location: string) {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${process.env.OPEN_WEATHER_API_KEY}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    },
  ).then((res) => res.json());
}
