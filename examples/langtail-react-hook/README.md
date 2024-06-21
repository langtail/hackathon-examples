# Langtail Weather Chat Example with React hook

**Deployed here**: [https://langtail-weather-chat-react-hook.vercel.app/](https://langtail-weather-chat-react-hook.vercel.app/)

This example leverages our `useChatStream` hook we developed in the [Langtail SDK](https://github.com/langtail/langtail-node?tab=readme-ov-file#usechatstream-react-hook).

## Quickstart Setup

### 1. Clone the Repository

```shell
git clone git@github.com:langtail/examples.git
cd examples/langtail-weather-chat
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

You can deploy this project to Vercel or any other platform that supports Next.js. Our instance runs here: [https://langtail-weather-chat-react-hook.vercel.app/](https://langtail-weather-chat-react-hook.vercel.app/).

## Overview

This project showcases how to create a chat application using Langtail, including streaming AI responses and handling tool calls.

### Important Files

#### API Routes

- [Langtail AI Endpoint](./app/api/langtail/route.ts): A simple endpoint that forwards requests to the Langtail API.
- [Weather Endpoint](./app/api/langtail/weather/route.ts): An endpoint for the OpenWeather API that also forwards requests.

The AI and weather endpoints are called from the backend (Node.js) to ensure that secrets are not exposed to the browser.

#### UI Components

- [Chat Component](./app/components/chat.tsx): Where we use `useChatStream` hook, that simplifies the work with AI Streams masivelly. You can use it either by sending all posted messages to the API endpoint, or just one message. It depends on your backend deployment.

### Test It Live

- Basic Chat Example: [https://langtail-weather-chat-react-hook.vercel.app/](https://langtail-weather-chat-react-hook.vercel.app/)
