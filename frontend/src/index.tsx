import "./index.css";
import { ApolloProvider } from "@apollo/client";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";
import { client } from "./lib/apollo-client/apollo.config";
import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </BrowserRouter>
  </React.StrictMode>
);
