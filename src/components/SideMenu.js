import { Dropdown } from 'semantic-ui-react';
import React from 'react';

const topStories = [ {key:'home', text: 'home' }, {key:'opinion', text: 'opinion' },
{key: 'world', text: 'world'},
{key: 'national', text: 'national'},
{key: 'politics', text: 'politics'},
{key: 'upshot', text: 'upshot'},
{key: 'nyregion', text: 'nyregion'},
{key: 'business', text: 'business'},
{key: 'technology', text: 'technology'},
{key: 'science', text: 'science'},
{key: 'health', text: 'health'},
{key: 'sports', text: 'sports'},
{key: 'arts', text: 'arts'},
{key: 'books', text: 'books'},
{key: 'movies', text: 'movies'},
{key: 'theater', text: 'theater'},
{key: 'sundayreview', text: 'sundayreview'},
{key: 'fashion', text: 'fashion'},
{key: 'tmagazine', text: 'tmagazine'},
{key: 'food', text: 'food'},
{key: 'travel', text: 'travel'},
{key: 'magazine', text: 'magazine'}
]

const mostPopularSection = [ {key: 'arts', text: "arts"},
{key: 'automobiles', text: 'automobiles'},
{key: 'blogs', text: 'blogs'},
{key: 'books', text: 'books'},
{key: 'business day', text: 'business day'},
{key: 'education', text: 'education'},
{key: 'food', text: 'food'},
{key: 'health', text: 'health'},
{key: 'job market', text: 'job market'},
{key: 'magazine', text: 'magazine'},
{key: 'membercenter', text: 'membercenter'},
{key: 'movies', text: 'movies'},
{key: 'multimedia', text: 'multimedia'},
{key: 'open', text: 'open'},
{key: 'opinion', text: 'opinion'},
{key: 'science', text: 'science'},
{key: 'technology', text: 'technology'}
]

var SideMenu = React.createClass({
  render() {

    var sideBarStyle = {
      height: "100%",
      width: "30%",
      backgroundColor: "grey",
      textAlign: "center"
     };

     var dropDownParent = {
       textAlign: "center",
       height: "auto",
       width: "75%",
       backgroundColor: "white"
     }

     var dropDownStyle = {
       "marginBottom": "30px"
     }

  return (
    <div style={sideBarStyle}>
      <div style={dropDownParent}>
        <select onChange={this.props.handleTopStoriesClick}>
            {topStories.map((story) => {
              return (
                <option value={story.text} key={story.text}>{story.text}</option>
              )
            })}
        </select>
        <br></br>
        <select onChange={this.props.handleMostPopClick}>
            {mostPopularSection.map((story) => {
              return (
                <option value={story.text} key={story.text}>{story.text}</option>
              )
            })}
        </select>
      </div>
    </div>
    )
  }
})

export default SideMenu
