import React from 'react';
import youtube from './../../api/youtube.js'

import SearchBar from './../../components/search-bar/search-bar.component';
import VideoList from './../../components/video-list/video-list.component';
import VideoDetail from './../../components/video-detail/video-detail.component';


class HomePage extends React.Component {
  
  state={videos: [], selectedVideo: null };

  componentDidMount(){
    this.onTermSubmit('buildings');
  }

  onTermSubmit = async (term) => {
    console.log(term);
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    })

    //console.log(response);
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  };

  onVideoSelect = (video) => {
    this.setState({selectedVideo: video});
  }

  render(){
    return (
      <div className="ui container" style={{marginTop: "10px"}}>
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video = {this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList videos={this.state.videos}  onVideoSelect = {this.onVideoSelect} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default HomePage;
