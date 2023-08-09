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

:warning: The application should allow users to set itinerary, experience, and memories to private (edit: only itinerary trips can be set to private)

✅ The application should allow users to track and provide analytics such as expenses by itinerary or by experience

#### Stretch goals

:x: The application could allow users to query and save transportation details between the location of experiences

✅ The application could be able search for Point of Interest (POI) by name

:x: The application could provide location-aware weather forecast information for upcoming experiences

:warning: The application could allow the user to see a friend's itineraries and experiences (edit: the user can see any public trips, but cannot filter by friend)

### Description of Tech from Units 1-5

1. HTML, CSS, JS
   - CSS: styling
2. React & Redux
   - react frontend
   - redux stores for handling single-state of trips and experiences
3. Node & Express
   - express backend with routes for GET, POST, PATCH, DEL trips and experiences
4. MongoDB
   - collection of trips, experiences, as well as point of interest, etc
5. Builds & Deployment
   - deployed on render.com

### Description of "Above and Beyond" functionality

- TODO

### Next Steps

- TODO

### List of Contributions

- Eric Chau: backend (express + mongoDB integration), S3 upload and user authentication
- Max Zhong: map view, frontend, styling
- Jessa Shi: frontend (react + redux integration) of trips, experiences, budgeting
