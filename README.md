# vodafone-technical-test

Technical test for Vodafone position based in React and Node/GraphQL

## Project structure

### Back-End

The Back-End has been developed following hexagonal architecture:

- infrastructure: components that interact with outer world such as database configuration and his repositories.
- application: use cases.
- domain: models and types.

### Front-End

- assets: static assets such as images.
- components: all shared components that are used across the entire application.
- features: contains all the application features. Most of the application code inside here.
- lib: configurations for different third-party libraries that are used in our application.
- pages: the pages of our application.
- model: shared model definitions.

## Running the project

### Back-End

- Open /backend directory and install dependencies:

```
npm install
```

- Complete the enviroment file .env with the data provided by email.
- Run the project:

```
npm run dev
```

### Front-End

- Open /frontend directory and install dependencies:

```
npm install
```

- Complete the enviroment file .env with the data provided by email.
- Run the project:

```
npm run start
```

- Open the application at http://localhost:3000/
