import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://api-ap-south-1.hygraph.com/v2/clituqn150pa001ul6ixbb5yg/master",
    cache: new InMemoryCache(),
});

export default client;