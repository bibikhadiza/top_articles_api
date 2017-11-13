import React from 'react';
import Component from 'react';
import fetch from 'isomorphic-fetch';
import Transmit from 'react-transmit';
import SideMenu from './SideMenu';

const fetchTopStories = fetch(`//api.nytimes.com/svc/topstories/v2/world.json?api-key=9ceb8c3021fc44f1b839f525b9f2b193`)
    .then(function(response) {
        if (response.status >= 400) {
            throw new Error("Bad response from server");
        }
        return response.json();
    })

export class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      topStories: null,
      mostPopular: null,
      mostPopularData: null
    }
    this.handleTopStoriesClick = this.handleTopStoriesClick.bind(this);
    this.handleMostPopClick = this.handleMostPopClick.bind(this);
  }

  handleTopStoriesClick(event){
    fetch(`//api.nytimes.com/svc/topstories/v2/${event.target.value}.json?api-key=9ceb8c3021fc44f1b839f525b9f2b193`).then( response => {
      if (response.status >= 400){
        throw new Error('Unable to fetch stories')
      }
      return response.json()
    }).then(({results}) => {
      const topStories = results
      this.setState({topStories})
    })
  }

  handleMostPopClick(event){
    fetch(`//api.nytimes.com/svc/mostpopular/v2/mostviewed/${event.target.value}/30.json?api-key=9ceb8c3021fc44f1b839f525b9f2b193`).then( response => {
      if (response.status >= 400){
        throw new Error('Unable to fetch stories')
      }
      return response.json()
    }).then(response => {
      this.setState({
        mostPopularData: response.results
      })
    })
  }

  componentDidMount(){
    fetch(`//api.nytimes.com/svc/mostpopular/v2/mostviewed/arts/30.json?api-key=9ceb8c3021fc44f1b839f525b9f2b193`).then( response => {
      if (response.status >= 400){
        throw new Error('Unable to fetch stories')
      }
      return response.json()
    }).then(response => {
      this.setState({
        mostPopularData: response.results
      })
    })
  }

  render(){
    var sample = {
      backgroundColor: "red",
      height: "100%",
      float: "right"
    }

    var sample1 = {
      backgroundColor: "yellow",
      float: "right"
    }


    return (
      <div>
        <SideMenu handleTopStoriesClick={this.handleTopStoriesClick} handleMostPopClick={this.handleMostPopClick}/>

        <div style={sample}>
            {this.state.topStories ? this.state.topStories.map((post) => {return (<div>{post.title}</div>)}) :
            this.props.posts.results.map((post) => {
              return(
                <div>{post.title}</div>
              )
            })
           }
        </div>

      <div style={sample1}>
        {this.state.mostPopularData ? this.state.mostPopularData.map((post) => {return (<div>{post.title}</div>)}) : <h1>no</h1>}

      </div>
  </div>
    )
  }
}

 export default Transmit.createContainer(App, {
  initialVariables: {},
  fragments: {
    posts() {
      return fetchTopStories.then((resp) => resp);
    }
  }
})
