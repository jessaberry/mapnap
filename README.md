# MAPNAP

### App description:

[//]: # "Mapnap is a mobile app designed for anyone looking to manage a busy schedule. It is designed to manage daily routines and notify users on time-based and location-based events in response to stored user data. Location and time triggers, settings, associated events, and usage data will be stored in Mapnap's database. Additional features (depending on time) include theme support, snoozing options, and social media integration."

**Mapnap** is a website designed for travellers to plan and organize their itineraries and record memories from their trips.
The user can plan and organize upcoming travel ideas in map or calendar view, and also add media files to create a memory album to reflect upon.
If a user so chooses, they can then share their trip with their friends over the social media.

Access Mapnap here: https://mapnap.onrender.com/

### Statement of goals:

##### Minimal goals

✅ The application must allow users to create, update, and delete a _trip_

✅ The application must allow users to create, update, and delete an _experience_ (e.g., accommodation,
attraction, dining, etc.) within a trip, where each experience includes information like start / end time, location, cost, etc.

✅ The application must allow users to import media files (e.g., images, documents, or movies, etc.) to an experience as _memories_

✅ The application must allow users to share Mapnap on social media

#### Standard goals

✅ The application should be able to show the trip itinerary and memories as a dashboard and map view

✅ The application should automatically extract metadata in the media files (e.g., exif, etc.) and during the media import process

✅ The application should allow the user to budget their itinerary, by allowing an optional cost/price entry when an experience is added

:warning: The application should allow users to set itinerary, experience, and memories to private (edit: only itinerary trips and memories can be set to private)

✅ The application should allow users to track and provide analytics such as expenses by itinerary or by experience

#### Stretch goals

:x: The application could allow users to query and save transportation details between the location of experiences

✅ The application could be able search for Point of Interest (POI) by name

:x: The application could provide location-aware weather forecast information for upcoming experiences

:warning: The application could allow the user to see a friend's itineraries and experiences (edit: the user can see any public trips, but cannot filter by friend)

### Description of Tech from Units 1-5

**1. React**
   - cleaner, simplified frontend code compared to HTML/CSS/JS
   - virtual DOM only updates necessary parts of the UI
   - broke down UI into reusable functional components for trips, experiences, and memories
   - used react router to navigate within the app

     
**2. Redux**
   - ‘single source of truth’ applied to trips, experiences, and memories, filtered by user ID
   - used redux toolkit for standardized code
   - extracted data from store for components instead of calling the database too often

     
**3. Node & Express**
   - Node.js app framework used to build the API and handle HTTP requests for the app
   - organized routes with routers for trips, experiences, memories, point of interest — everything
   - simultaneously ran a 'dev' mode with localhost:PORT alongside the deployed site
   - integrated seamlessly with React/Redux frontend

     
**4. MongoDB**
   - collection of trips, experiences, as well as point of interest, etc
   - stored data in a flexible and scalable NoSQL database
   - utilized a single database, with multiple collections, each with multiple documents
   - easily modified and monitored fields and types of values in documents

     
**5. Builds & Deployment**
   - effortless deployment on Render.com, well-suited for MERN stack applications
   - Render features: automatic scaling (Render adjusts resources to handle the traffic to Mapnap), zero downtime deployment, and setup automatic deployment from Git branches.

     

### Description of "Above and Beyond" functionality

- TODO: describe functionality, research, design, learning, debugging, documentation, or some other area
- explain what the team has accomplished
- explain why this goes beyond the complexity of other projects
-

### Next Steps

As the program itself is somewhat unique compared and maybe a little difficult to onboard users to, having a UI that would show and teach new users how to create and effectively use the application would be extremely useful. Because the program itself is already being built in React, using a library like React Tours could allow new users or users who have not been back in a while to teach themselves on how to use the program. As for other goals that initially were planned as stretch requirements, connecting the program with opentable-react or similar libraries would allow the user experience to be far more streamlined when booking reservations, seeing exactly where they had eaten and various other information related to anything with a reservation. Furthermore, replacing the Leaflet API with Google Maps API would be a good step to make in order to allow the Places API to be used and have a more updated and maintained map, as well as information for specific businesses and landmarks, such as when they open and close, or their respective Google reviews. In order to take this step, we must also be aware that there will be a significant cost in order to gain access to the API, which is necessary yet expensive if we want to continue the development of this application into a more robust and streamlined product.

### List of Contributions

- Eric Chau: backend (express + mongoDB integration), memories, S3 upload and user authentication, frameworking and R&D for project itself
- Max Zhong: map view and React Leaflet implementation, frontend, styling, UX choices and implementation
- Jessa Shi: frontend (react + redux integration) of trips, experiences, budgeting, as well as working on deployment
