import './App.css';
import ChampionGallery from './components/Champions';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
	uri: "http://localhost:3001/graphql",
	cache: new InMemoryCache(),
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <ChampionGallery /> 
      </ApolloProvider>
    </>
  );
}

export default App;
