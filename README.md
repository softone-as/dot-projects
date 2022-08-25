# Getting Started with iNews (DOT Project's pretest)
This project is a pre-test for application in DOT Indonesia, this project is built to get the newest information about Top Headlines of News in Indonesia, using open source [NewsAPI](https://newsapi.org/)

## Project Content's
* Home Page (Public)
* News Page (Private)
* About Page (Public)
* Login Page (Public)

## How to Install
1. Clone this repository
2. Open the terminal
3. Run **`yarn install`** to install all of the dependencies that are used in the project
4. Run **`yarn start`** to start the project

## Authorization

This app implement authorization, there is public and private content, to access the private please login with the fake user.
Public content is including **Home Page** and **About Page**

### `Fake User's list`
```javascript
[
  { username: 'user_dot', password: 'P@ssw0rd' },
  { username: 'dot_user', password: 'P@ssw0rd' },
  { username: 'user_dummy', password: 'P@ssw0rd' },
]
```
## Deployment

This app was deployed on vercel in this [link](https://dot-projects.vercel.app/). But there is a bug on API call that will cause a CORS error because the third API from News API doesn't allow to hit the API except localhost.

## Available Scripts

In the project directory, you can run:

### `yarn install`

This command will install all of the dependencies that are used in the project

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.
