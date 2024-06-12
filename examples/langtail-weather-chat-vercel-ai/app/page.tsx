"use client";

import React, { useState } from "react";
import styles from "./page.module.css";
import Chat from "./components/chat";
import WeatherWidget, { WeatherData } from "./components/weather-widget";
import zod from "zod";
import { WeatherSchema, decodeSkyState } from "./utils/shared-utils";

type WeatherType = zod.infer<typeof WeatherSchema>;

function normalizeYrWeatherData<T>(
  data,
  cb: (weather: WeatherType) => T,
): T | undefined {
  try {
    const weather = WeatherSchema.parse(data);
    return cb(weather);
  } catch (error) {
    console.warn("Couldn't parse weather data", error);
  }
}

const defaultWeatherMessage: WeatherData[] = [
  {
    location: "---",
    temperature: "---",
    conditions: "Sunny",
    unit: "C",
    initial: true,
  },
];

const FunctionCalling = () => {
  const [weatherData, setWeatherData] = useState<WeatherData[]>(
    defaultWeatherMessage,
  );

  const initAI = () => {
    setWeatherData(defaultWeatherMessage);
  };

  const functionCallHandler = async (toolCall: {
    args: unknown;
    toolCallId: string;
    toolName: string;
  }) => {
    const location =
      toolCall.args &&
      typeof toolCall.args === "object" &&
      "location" in toolCall.args
        ? String(toolCall.args.location)
        : "";

    return fetch(
      `/api/langtail/weather?${new URLSearchParams({
        location,
      })}`,
      {
        method: "GET",
      },
    )
      .then((res) => res.json())
      .then((apiData) => {
        const unit = "C";
        const weatherData: WeatherData = normalizeYrWeatherData(
          apiData,
          (data) => {
            const temperature = data.main.temp;
            const conditions = decodeSkyState(data.weather[0]?.main) ?? "Sunny";

            return {
              temperature: temperature ?? "---",
              location,
              unit: unit.substring(0, 1).toUpperCase(),
              conditions: conditions ?? "Sunny",
            };
          },
        ) ?? {
          temperature: "---",
          location,
          unit: unit.substring(0, 1).toUpperCase(),
          conditions: "Sunny",
        };

        setWeatherData((prev) => [
          ...prev.filter((data) => !data.initial),
          weatherData,
        ]);
      });
  };

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.weatherColumn}>
          {weatherData.map((data) => (
            <WeatherWidget key={data.location} {...data} />
          ))}
        </div>
        <div className={styles.chatContainer}>
          <div className={styles.chat}>
            <Chat
              onAiStart={initAI}
              functionCallHandler={functionCallHandler}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default FunctionCalling;
