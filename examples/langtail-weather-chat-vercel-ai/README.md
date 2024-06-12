# Langtail Weather Chat Example with Langtail SDK and Vercel AI

**Deployed here**: [https://langtail-weather-chat-vercel-ai.vercel.app/](https://langtail-weather-chat-vercel-ai.vercel.app/)

This example builds upon the basic weather chat application, adding modern features for enhanced functionality. The Langtail tools SDK allows for better and type-safe handling of AI tools and function calls.

Using Vercel's `ai` package, you can stream messages directly and handle streams elegantly on the frontend.

## Quickstart Setup

### 1. Clone the Repository

```shell
git clone git@github.com:langtail/examples.git
cd examples/langtail-weather-chat-vercel-ai
```

### 2. Set Your API Keys

Set your [Langtail API key](https://app.langtail.com/), [OpenAI API key](https://platform.openai.com/api-keys), and [OpenWeather API key](https://openweathermap.org/appid):

```shell
export OPENAI_API_KEY=""
export LANGTAIL_API_KEY=""
export OPEN_WEATHER_API_KEY=""
```

Alternatively, you can set these in the `.env.example` file and rename it to `.env`.

### 3. Install Dependencies

```shell
npm install
```

### 4. Run the Development Server

```shell
npm run dev
```

### 5. Open in Your Browser

Navigate to [http://localhost:3000](http://localhost:3000).

## Deployment

You can deploy this project to Vercel or any other platform that supports Next.js. Our instance is available here: [https://langtail-weather-chat-vercel-ai.vercel.app/](https://langtail-weather-chat-vercel-ai.vercel.app/).

## Overview

This project showcases how to create a chat application using Langtail, including streaming AI responses and handling tool calls.

### Important Files

#### API Routes

- [Langtail AI Endpoint](./app/api/langtail/route.ts): An endpoint where we use Vercel AI to stream data in a compatible format to the frontend. Additionally, we handle AI weather requests here to provide the AI with a message about the current weather in a human-readable format.
- [Weather Endpoint](./app/api/langtail/weather/route.ts): An endpoint for the OpenWeather API that also forwards requests.

The AI and weather endpoints are called from the backend (Node.js) to ensure that secrets are not exposed to the browser.

#### UI Components

- [Chat Page](./app/page.tsx): Renders the chat and requests JSON data about the weather to display weather tiles on the left, based on how the AI calls the tools.
- [Chat Component](./app/components/chat.tsx): Manages the AI chat using Vercel AI hooks `useChat`, simplifying the handling of streams. It also notifies `page.tsx` to request weather data to display the tiles.

### Test It Live

- Basic Chat Example: [https://langtail-weather-chat-vercel-ai.vercel.app/](https://langtail-weather-chat-vercel-ai.vercel.app/)
