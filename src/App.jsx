import { useState, useEffect } from 'react';
import MovieDisplay from './components/MovieDisplay';
import Form from './components/Form';
import Header from './components/Header';
import { Container } from './components/styles/Container.styled';
import Favorites from './components/Favorites';
import Footer from './components/Footer';
import GlobalStyles from './components/styles/Global';

const App = () => {

  const apiKey = 'c10b0538';
  const [movie, setMovie] = useState(null);

  const [favorite, setFavorite] = useState(null)


  const getMovie = async (searchTerm) => {
    try {
    const response = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`);
    const data = await response.json();

    setMovie(data);
    // console.log('>' + data)
    } catch(e) {
        console.error(e)
    }
  };

  useEffect(() => {
    getMovie('Clueless');
  }, []);


  const addFavorite = (movie) => {
    setFavorite([...movie, movie])
    console.log(favorite)
  }

  return (
    <>
      {/* <Form movieSearch={getMovie} /> */}
      <Header movieSearch={getMovie} />
      <Container>
        <MovieDisplay movie={movie} />
      </Container>
      {/* <Favorites 
        movie={movie} 
        addFavorite={addFavorite} 
      /> */}
      <Footer />
    </>
  )
}

export default App;
