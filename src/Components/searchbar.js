import React, {Component} from 'react';

class SearchBar extends Component{
  constructor(props) {
      super(props);
      this.state = {
        searchterm: ''
      };
  }

  onInputChange(searchterm){
    this.setState({searchterm});
    this.props.onSearchType(searchterm);
  }

  render() {
    return (
     <div className = "search-bar">
      <input
      value = {this.state.searchterm}
      onChange = {event => this.onInputChange(event.target.value) }/>
    </div>
    );
  }
}

export default SearchBar;
