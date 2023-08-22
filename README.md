# AuthenticationApp

This repository contains the "Authentication App" project that I made during the internship. This is a simple authentication app built using React Native and Firebase. The app allows users to register, log in, and log out. It includes two main screens: the login screen and the home screen.

# Features
* User Registration: Users can create a new account using their email and password.
* User Login: Users can log in using their registered email and password.
* Home Screen: After successful login, users are directed to the home screen where they can see their email and sign out.

# Video


https://github.com/Ardelean-Claudiu-Andrei/AuthenticationApp/assets/91498815/d74a7df2-0ef9-4d80-bc4d-3120dbaa126b


# Screens
* **Login Screen** (`LoginScreen.js`):
  The login screen allows users to log in using their registered email and password. If a user is already authenticated, they are automatically redirected to the home screen.
  
* **Home Screen** (`HomeScreen.js`):
  The home screen displays a welcome message to the authenticated user, showing their email. Users can also sign out from this screen.

# Firebase Setup (`firebase.js`)
The firebase.js file initializes the Firebase SDK with the provided configuration and exports the authentication module for use in the app.

# Technical
* JavaScript
* Frameworks: Expo, React Native
* Backend: Firebase (Authentication, Realtime Database, etc.)

# Tutorial Credit

This app was developed with the help of a tutorial by Made With Matt. 
- Tutorial URL: https://www.youtube.com/watch?v=ql4J6SpLXZA&ab_channel=MadeWithMatt
