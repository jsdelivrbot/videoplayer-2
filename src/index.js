import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search'
import SearchBar from './Components/searchbar';
import VideoList from './Components/videolist';
import VideoPlugin from './Components/video_plugin';
import _ from 'lodash';
const API_KEY = 'AIzaSyA6Iv0ASORpI5vwLrE8t2llJCGbqZaeEDM';

class App extends Component {
    constructor(props){
      super(props);
      this.state = {
        videos: [],
        clickedVideo:null
      }
    this.videoSearch('welcome');
    }

    videoSearch(searchterm){
      YTSearch({key:API_KEY, term:searchterm}, (videos) => {
        this.setState({
          videos: videos,
          clickedVideo:videos[0]
        });
      });
    }

    render(){
      const search = _.debounce(searchterm => {this.videoSearch(searchterm)},500)

      return (<div>
                <SearchBar onSearchType={search}/>
                <VideoPlugin video={this.state.clickedVideo}/>
                <VideoList
                onVideoClick={clickedVideo => this.setState({clickedVideo})}
                videos={this.state.videos}/>
              </div>);
    }
}

ReactDOM.render(<App/>, document.querySelector('.container'));
