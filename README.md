![logo](https://user-images.githubusercontent.com/9641348/66985105-7926fb00-f092-11e9-9b58-d8edac3690e2.png)


# Description
AirCnC is an application developed during a JavaScript training course at [Rocketseat](https://rocketseat.com.br) :rocket:.

The concept of the application is composed by:
  - A company providing spots in their office for individual developers
  - An individual developer looking for mentoring, training, or even a job, can look up for companies using tech he is interested in
  - The company can establish a cost per day or a free spot
  - The user selects a date of preference
  - The company admin can either approve or reject the user's request
  - The user is notified about the company's evaluation
  - Success \o/

# Technologies used during the training
- [Backend](https://github.com/heronsilva/omnistack-backend):
  - NodeJS
  - Express
  - MongoDB + Mongoose
  - Socket.io
- [Frontend](https://github.com/heronsilva/omnistack-frontend) & [Mobile](https://github.com/heronsilva/omnistack-mobile)
  - ReactJS
  - React Native + Expo

# Admin's web interface

Through the web interface, the admin can create new spots that will be available to the [mobile app](https://github.com/heronsilva/omnistack-mobile) users.


## Login form

For simplicity, a password is not required at the moment.

![login-form-admin](https://user-images.githubusercontent.com/9641348/66985103-7926fb00-f092-11e9-808f-1f35fbe5082f.png)


## Dashboard

On the dashboard page the admin can see all the spots he has created.

![dashboard-admin](https://user-images.githubusercontent.com/9641348/66985101-788e6480-f092-11e9-8e2f-bda817dd5f0e.png)


## New spot creation

The required info upon the spot creation are:
- A simple picture of the company's office environment
- The company which will provide the spot
- The technology stack
- A cost per day. If not provided, it will be free of cost for the user.

![new-spot-form-admin](https://user-images.githubusercontent.com/9641348/66985106-79bf9180-f092-11e9-8454-200bfd8b6b1d.png)


## New booking request

When a mobile user fills a [booking request through the app](#booking-request), the admin will be notified through a real time websocket connection.

![request-booking-notification-admin](https://user-images.githubusercontent.com/9641348/66985108-79bf9180-f092-11e9-996c-1dd6ac64e74f.png)


# User's mobile app


## Login form

The mobile app login requires the user's e-mail and the technology he would like to learn and work with.

<img src="https://user-images.githubusercontent.com/9641348/66985102-7926fb00-f092-11e9-9e24-8608868a49d6.png" alt="login-form-mobile" width="40%" />


## Spots

A list of companies that provide spots for the user's preferred technologies.

<img src="https://user-images.githubusercontent.com/9641348/66985110-7a582800-f092-11e9-9e4c-b9d95a41cf74.png" alt="spot-list-mobile" width="40%" />


## Booking request

Once the user finds a nice opportunity, he can book a request with a date of preference.

<img src="https://user-images.githubusercontent.com/9641348/66985107-79bf9180-f092-11e9-96fe-24ddc5f2d1e0.png" alt="booking-request-mobile" width="40%" />


## Booking request approved

If the admin approves the user's booking request, he will receive a real time notification.

<img src="https://user-images.githubusercontent.com/9641348/66985100-788e6480-f092-11e9-9097-b38b55642c09.png" alt="booking-request-approved-mobile" width="40%" />
