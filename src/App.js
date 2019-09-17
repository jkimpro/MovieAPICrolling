import React from 'react';
import axios from 'axios';
import Movie from './Movie';


//yts.lt에서 제공한 API 사용 예정 https://yts.lt/api/v2/list_movies.json
//yts proxy라는 API를 별도로 사용예정 https://yts-proxy.now.sh/list_movies.json

class App extends React.Component{      

    //setState를 사용할 때 state안에 default값들을 선언할 필요는 없다.
    
    state ={
        isLoading: true,
        movies: []
    };

    getMovies = async() =>{ 
        const{
            data:{
                data:{
                    movies
                }
            }
        } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");

        this.setState({movies, isLoading: false});   //this.setState({movies:movies}); 와 같은 뜻
        

        // 위와 같이 movies.data.data.movies 로 접근하는 것 보다는 위의 방식이 더 나음

        //axios가 다끝날때까지 기다려줘라는 뜻 
        //async 를 써야 await 이 가능함
    }
    componentDidMount(){
/*        setTimeout(() => {

            this.setState({isLoading: false});
        },6000);
  */
        this.getMovies();
        //이 과정에서 fetch를 할 예정
        //fatch 위의 작은 layer임 (일종의 땅콩위의 초콜릿)
    
    }
    render(){
        const {isLoading, movies} = this.state;
        return <div> {this.state.isLoading ? "Loading..." 
        : movies.map(movie => (
             <Movie
            key={movie.id}
            id={movie.id} 
            year={movie.year} 
            title={movie.title} 
            summary={movie.summary} 
            poster={movie.medium_cover_image}
            />
            
        ))} </div>;
    }
}

export default App;