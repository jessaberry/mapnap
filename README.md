# MapNap

### Project description:
Mapnap is a mobile app designed for anyone looking to manage a busy schedule. It is designed to manage daily routines and notify users on time-based and location-based events in response to stored user data. Location and time triggers, settings, associated events, and usage data will be stored in Mapnap's database. Additional features (depending on time) include theme support, snoozing options, and social media integration.

### Project task requirements:
##### Minimal requirements
1. The application must display a notification when a specific location is reached.
2. The application must display a notification at a specified time.
3. The application must support recurring triggers for notifications.
4. The application must provide alarm/notification functionality for events.
5. The application must allow users to add, update, and delete triggers and events.

##### Standard requirements
1. The application should enable users to create workflows or sequences of actions.
2. The application should support snooze and priority settings for notifications.
3. The application should include user authentication and authorization features.
4. The application should provide the option to share triggers and events with friends.
5. The application should generate analytics reports summarizing actions such as snooze and cancel.
6. The user should be able to see a summary of their tasks and time spent on each task with a relevant visual (eg. Bar chart, Line Chart)
7. The application should be able to record and store task specific data for eg. time, location, duration.

##### Stretch requirements
1. The application could include support for music events, such as playing a specific song as a notification.
2. The application could adapt its behavior based on user actions, such as snoozing or taking specific actions.
3. The application could offer customization options for themes and visual appearance.

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
