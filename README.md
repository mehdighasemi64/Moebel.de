The goal is to create a weather app that shows the weather forecast for a given city.

The initial city can either be hardcoded or resolved via browser api
Days should start at the current day and the next four days should be shown (so five days altogether)
Background gradient should change based on temperature average of next 5 days:
Teal shades for less than 15°C
Orange shades for greater or equal than 15°C

Design
Abstract: https://share.goabstract.com/d9d21d66-c748-4877-adf2-7c511d0812d7

Icons: https://github.com/erikflowers/weather-icons/tree/master/svg

Font: https://fonts.google.com/specimen/Roboto?query=roboto

Tech Stack
React (UI Library)
React Redux (for state management)
Typescript (Language)
Bootstrap

Note: Please stick with React's internal APIs to handle state management. Prefer function components and hooks over class components

Checklist
 Create a background component that changes based on given temperature
 Create ui components for the rest
 Setup weather api (or implement a mock server)
 Wire city input with the api
 Create a component for listing weekly weather forecast
 Wire that component with the api
Acceptance Criteria
Using Typescript is mandatory.
Test coverage should be above 90%.
The app should be working and buildable with no errors.
----------------------------------------------------------------------------------------------------------------------

How to Run:

I have used a ASP.NET WebAPI that connects to a SQL Server DB to fetch JSON data to show. 
I have uploaded the backup of DB in the project folder(Moebel.bak).please restore it to MS sql server before running.
API should open with visual studio and run on http://localhost:7867/api/City/getAllWeather.
I have used Bootstrap library to manage the UI layer.
I have used Redux as state manager in this task.



