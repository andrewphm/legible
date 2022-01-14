<div align="center">

# Legible Clone

https://andrewpham.ca/legible

<img src="~/../legiblepreview.png">

</div>

## About

This project is a full stack eBook eCommerce web application. It was built mobile-first, ensuring a great UX on mobile devices, where eBooks would often be read.

## Code Stack

### Core Technologies

- `Front-end`:
  - React framework
  - React Router for routing
  - Redux/Redux Toolkit for state management
  - Styled components for CSS-in-JS
  - Material UI for icons
- `Back-end`:
  - Node/Express for the server
  - MongoDB/Mongoose/Atlas for the NoSql DB and ODM
  - Json web token (JWT) for authenticated API routes
  - Stripe for secure check out
- `Hosting`:
  - Heroku for hosting the server
  - Firebase for hosting images
  - Github Pages for hosting the client

## Features

Here is a list of features that were considered `core features` to be present in an e-commerce web application.

- Sign up/Sign in flow
  - On login, issuing a Json web token to the user to allow for authenticated API calls
- Product search
  - Querying the database based on title, category, or author.
- Product snippets
- Product categories/organization
- Browse product page
- Secure check out flow
  - Utilizing Stripe for a complient secure check out

## Challenges and learnings

- Utlizing Stripe Secure web check out was very intuitive with their recently updated user guide documentation. Their guides are very DX friendly, allowing you to choose the platform, back-end, front-end of your choice to make a custome payment flow. https://stripe.com/docs/payments/quickstart

## Improvements

- Add more authentication strategies (OAuth 2.0, SSO)
- Create/add webhooks to send e-mail confirmations for purchases
- Create more custom hooks to deal with side effects

## Available Scripts

- To start the React development server

```sh
cd client
npm install
npm start
```

#

### Client File Structure

```sh
client/src/
├── components    # All UI components
├── redux         # state management files
├── API.js        # REST api requests
├── pages         # Pages
├── App.js        # Routes and layout

```

### Server File Structure

```sh
server/
├── controllers    # Route-handler callback functions
├── models         # data models
├── routes         # Forward request to appropriate controllers
├── index.js       # Main server index with middlewares
```
