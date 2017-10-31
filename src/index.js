import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './Components/searchbar';

const API_KEY = 'AIzaSyCWNTi7_vAWeS1bFmGxb7j4mfsjp7jz2cU';
const App = () => {
   return (<div>
            <SearchBar />
          </div>
  );
}

ReactDOM.render(<App/>, document.querySelector('.container'));
