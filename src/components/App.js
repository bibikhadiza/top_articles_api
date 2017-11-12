// import React from 'react';
//
// function App(props){
//   const facts = props.facts.map((fact, i) => {
//     return <li key={i}>{fact.text}</li>
//   })
//   return (
//     <ul>
//       {facts}
//     </ul>
//   )
// }
//
// export default App;

import React from 'react';
import fetch from 'isomorphic-fetch';
import Transmit from 'react-transmit';
import SideMenu from './SideMenu';

const fetchTopStories = fetch('//api.nytimes.com/svc/topstories/v2/world.json?api-key=9ceb8c3021fc44f1b839f525b9f2b193')
    .then(function(response) {
        if (response.status >= 400) {
            throw new Error("Bad response from server");
        }
        return response.json();
    })


var App = React.createClass({
  handleTopStoriesClick: function(event){
    console.log(event)
  },


  render: function(){
    var sample = {
      backgroundColor: "red",
      height: "100%",
      float: "right"
    }
    console.log(this.props.posts.results);

    return (<div>
          <SideMenu/>
          <div style={sample} handleTopStoriesClick={this.handleTopStoriesClick}>
            {this.props.posts.results.map((post) => {
              return (
                <div>{post.title}</div>
              )
            })}
          </div>
      </div>
    )
  }
});

 export default Transmit.createContainer(App, {
  initialVariables: {},
  fragments: {
    posts() {
      return fetchTopStories.then((resp) => resp);
    }
  }
})
