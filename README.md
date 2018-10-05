# ChatSystem

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.5.

## Run Server

Run `npm run build` to run the server

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Project

This Project is the base of a of a role based chat system where users are able to chat in real time. Based on the users role (super admin, group admin, normal user) the user would have different system privileges. As this is the second part of the project, and the first milestone was incomplete, user priveledges were not implemented.

At first glance of the system a user can choos to login or go to the account or chat page which will return an error if the user has not logged in. The user must have an account in the mongodb to be able to login. If the suer does not provide the correct details, the user will be asked to try again. The user can also change their profile image in their account page.

## Documentation
### Data Structure
The Only data structure used in the chat system is users. The list of users are stored in a mongodb database named users in a collection also named users. Each user has an id, username, password, and image path. The image path is crucial when displaying and updating the users profile picture. If the project contained the user priviledges required in assignment 1, the users would also contain a account type, which would help when applying restriction in a role based navigation system.

### Git
My git repository was split into phases where each commit included a working part of the system. The login and chat components were firstly added folled by the account page. After these base components were implemented, account modification was added. You can follow the progress of the project through the constant commits to this repositry.

### REST API
The login route uses mondodb to return a list of users and filter through them to find if the user is in the database. There is a route to add new users to the database although it is not used in the front end of the chat system. There is a dedicated path to returning the image path of the users profile image which is used to help display the users profile image in the account page (soon to be implemented into the chat socket). A user can update their profile image which uses a route that takes a new image path and stores in in the mongodb. Other rotes incude the actual path used to uplaod the image, and unused mongo CRUD operations.

### Angular Architecture

This application runs on a single webpage, meaning the page does not reload, only updates when there is a change. The user is redirected to the login component automatically, the user can choose to login or register(to be added soon). When doing this, the components are changed in the router-outlet. The next stage of the assignment was to add the user rights after the login authentication. Based on the username and password entered, the system would check the mongodb to see if the user exists, if they do the user logs in. The server was initially created using node, where angular was then installed along with nodemon to create a constantly running build of the angular dist. The services used include the image upload service and the socket service. The image upload service controlls how the image is uploaded and the socket service allows for users to communicate through the chat room.

