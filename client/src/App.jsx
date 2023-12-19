import './App.css';
import { Outlet } from 'react-router-dom';
import { ApolloClient, ApolloProvidor, InMemoryCache } from '@apollo/client';
import Navbar from './components/Navbar';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvidor client={client}>
      <Navbar />
      <Outlet />
    </ApolloProvidor>
  )
}

export default App
