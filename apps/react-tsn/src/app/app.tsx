import styled from "styled-components";
import {
  ApolloClient,
  NormalizedCacheObject,
  ApolloProvider,
  HttpLink,
  gql,
} from "@apollo/client";

import GlobalStyle from "../components/GlobalStyle.jsx";
import { cache } from "./cache.js";
import Pages from "../pages";

const StyledApp = styled.div`
  // Your style here
`;

const uri = import.meta.env.VITE_REACT_APP_API_URI;

export const typeDefs = gql`
   extend type Query {
     isLoggedIn: Boolean!
   }
 `;

// configure Apollo Client
const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  link: new HttpLink({
    uri: uri,
    headers: {
      authorization: localStorage.getItem("token"),
    },
  }),
  cache,
  resolvers: {},
  typeDefs,
  connectToDevTools: true,
});

export function App() {
  return (
    <ApolloProvider client={client}>
      <StyledApp>
        {/* <NxWelcome title="react-tsn" /> */}
        <GlobalStyle />
        <Pages />
      </StyledApp>
    </ApolloProvider>
  );
}

export default App;
