import React from 'react';
import axios from 'axios';
import Movie from './Movie';
import "./App.css";
import "./Movie.css";

class App extends React.Component {
  state = { //life cycle 과 함께 사용 가능한 요소
    isLoading: true,
    movies: []
  };

  getMovies = async () => {
    const { //데이터 구조를 확인 한 후 data object 안에 movies object가 있는 걸 확인 후 
      data: { //object 구조로 const를 선언했다.
        data: { movies }
      }
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating"); //그리고 json파일을 불러오면
    // console.log(movies); //콘솔 로그엔 json 파일중에 우리가 원하는 movies objcet만 가져올 수 있다.
    this.setState({ movies, isLoading: false }); //원래는 state안에 있는 movies : movies 는 axios 안에 있는 것을 각각 써야 하지만 ES6는 이해 가능
  };
  componentDidMount() {
    this.getMovies();
  }

  // renderMovie(){
  //   const {movies} = this.state;
  //   return(
  //     movies.map(movie => {
  //       <Movie
  //         key={movie.id}
  //         id={movie.id}
  //         year={movie.year}
  //         title={movie.title}
  //         summary={movie.summary}
  //         poster={movie.movie_medium_cover_image}
  //       />
  //     })
  //   )
  // };

  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
        <div className="loader">
          <span className="loader__text">Loading...</span>
        </div>
        ) : (
           <div className="movies">
             {movies.map(movie => (
               <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
             ))}
           </div>
        )}
      </section>
    );
  }
}

export default App;
