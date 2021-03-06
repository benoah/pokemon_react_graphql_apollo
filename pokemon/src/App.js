import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import "./App.css";
import PokemonContainer from "./containers/PokemonContainer";

export default function App() {
  const client = new ApolloClient({
    uri: "https://graphql-pokemon2.vercel.app/",
  });
  return (
    <ApolloProvider client={client}>
      <main>
        <PokemonContainer />
      </main>
    </ApolloProvider>
  );
}
