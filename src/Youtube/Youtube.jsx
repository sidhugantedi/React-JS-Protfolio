import _ from 'lodash';
import React, { Component } from 'react';
import SearchBar from './SearchBar';
import VideoDetails from './VideoDetails';
import VideoList from './VideoList';
import YTSearch from 'youtube-api-search';
import '../css/style.css';

const API_KEY = 'AIzaSyBRJ4Tc3zuRj9yRb-XPhTLW4aHxDfly0eY';

class Youtube extends Component {
    constructor(props) {
        super(props);
        this.state={
            videos: [],
            selectedVideo: ''
        };
        this.videoSearch('  ')
    }
    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({ videos, selectedVideo: videos[0] });
        });
    }

    render() {
        const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300); 

        return (
			<div className="video-app">
				<h1 className="video-title">The Video Master</h1>
				<SearchBar onSearchTermChange={videoSearch}/>
				<VideoDetails video={this.state.selectedVideo}/>
				<VideoList videos={this.state.videos}
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                />


			</div>
        )
    }
}

export default Youtube;