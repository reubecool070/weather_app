# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `cd backend_api`

### `sudo apt install redis-server` // for redis in ubuntu

For more info about install of redis, Open: (https://redis.io/docs/getting-started/installation/)

### `npm run dev`

Launches the backend.

## 🧐 What's inside?

A quick look at the top-level files and directories in this weather-react project.

```
├── backend_api
	├── config
	├── controllers
	├── middleware
	├── routes
	├── utils
	├── app.js
├── public
├── src
	├── app
       ├── features
       ├── axios.config.ts
       ├── hook.ts
       ├── store.ts
	├──	assets
       ├── css
       ├── icons
       ├── images
	├── Component
       ├── Common
	├── data
	├── utils
	├── App.tsx
	├── index.tsx
├── tailwind.config.js
```

## 😢 Challenges

-   The first and biggest challenges of the project was to find the right api, I used the OpenWeatherMap API to fetch the weather forecast data. However, it was hard to find the right api for the hourly based forecast and also the api based on location and time i.e. So I used 5-day forecast data only i.e. _when a user on 30th March 2022 at 7:00 PM EST tries to fetch 5-day forecast data, will get forecast data till 25th March 2020 at 12:00 AM UTC._ And hourly based api provides data for only 40 hours.

-   Second challenge was using redis cache for api like weather which data that needs to be updated every once in a while. So I used for current weather data only.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
