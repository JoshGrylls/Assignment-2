# ChatSystem

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.5.

## Run Server

Run `npm run build` to run the server

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Project

This Project is the deshboard of a role based chat system where users are able to chat in real time. Based on the users role (super admin, group admin, normal user) the user would have different system privileges.

There were many porblems encountered with this project the biggest being user authentication. I was not succesfully able to implement user authentication due to the difficulties filtering through the array of users returned in the respons. A major factor to why this project is so poorly completed is the time spent on this project. To better follow due dates and phases etc, will allow for more time to research syntax and components that I did not understand. 

## Documentation
### Git
My git repository was split into phases where each commit included a working part of the system. eg. the login and account components working and added. You can find images and json files under '/src/assets', services under '/src/app/services', routes under '/src/app/routes' and all the components at '/src/app'.

### REST API
The login route uses mondodb to return a list of users and filter through them to find if the user is in the database.. Due to a lack of time left to spend on this project, The user authentication was not completed properly.
Routes in this system can be found under '/src/app/routes'.

### Angular Architecture

This application runs on a single webpage, meaning the page does not reload, only updates when there is a change. The user is redirected to the login component automatically, the user can choose to log in or register etc. When doing this, the components are changed in the router-outlet. The next stage of the assignment was to add the user rights after the login authentication. Based on the user logged in, the system would check local storage and display the correct components based on the user rights. The server was initially created using node, where angular was then installed along with nodemon to create a constantly running build of the angular dist.

