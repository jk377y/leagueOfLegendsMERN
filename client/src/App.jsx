import './App.css';
import Homepage from './components/Homepage';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
	uri: "http://localhost:3001/graphql",
	cache: new InMemoryCache(),
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Homepage /> 
      </ApolloProvider>
    </>
  );
}

export default App;
