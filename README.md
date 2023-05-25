# MapNap

### Project description:
Mapnap is a mobile app designed for anyone looking to manage a busy schedule. It is designed to manage daily routines and notify users on time-based and location-based events in response to stored user data. Location and time triggers, settings, associated events, and usage data will be stored in Mapnap's database. Additional features (depending on time) include theme support, snoozing options, and social media integration.

### Project task requirements:
##### Minimal requirements
The application must display a notification when a specific location is reached.
The application must display a notification at a specified time.
The application must support recurring triggers for notifications.
The application must provide alarm/notification functionality for events.
The application must allow users to add, update, and delete triggers and events.

##### Standard requirements
1. Ability to create workflow
2. Snooze / priority
3. User authentication and authorization
4. Share with friends
5. Analytics report (snooze / cancel, etc.) summary

##### Stretch requirements
1. Music event
2. Ability to adapt based on snooze / action
3. Customization themes (theme support)

### Task breakdown:
##### Task 1: Location based triggers
- Point of interest (POI): type in address or name a point of interest
- Map view: image of map with marker on POI
- Customization: user can rename POI (i.e. "Home", "Work")
- Confirmation: user confirms POI and whether it's one-time or recurring

##### Task 2: Alarm / notification event
- Threshold: set a reminder (i.e. alarm that triggers 2 minutes before event) & select option of being alerted at a location or time
- Arrival: sends a notification (pop-up) whenever the trigger is fired
- Type: choose to set up one-time or recurring notifications
- Confirmation & cancellations: ability to modify the next event when alarmed
