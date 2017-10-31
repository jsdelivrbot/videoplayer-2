import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './Components/searchbar';
import VideoList from './Components/videolist'
import YTSearch from 'youtube-api-search'
const API_KEY = 'AIzaSyA6Iv0ASORpI5vwLrE8t2llJCGbqZaeEDM';

class App extends Component {
    constructor(props){
      super(props);
      this.state = {
        videos: []
      }

      YTSearch({key:API_KEY, term:'surfboards'}, (videos) => {
        this.setState({videos});
      });
    }

    render(){
      return (<div>
                <SearchBar />
                <VideoList videos={this.state.videos}/>
              </div>);
    }
}

ReactDOM.render(<App/>, document.querySelector('.container'));
