var React = require('react');
var createReactClass = require('create-react-class');
// import { Dropdown } from 'semantic-ui-react';
var Dropdown = require('semantic-ui-react');


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

const mostPopularOptions = [ {key: 'mostemailed', text: "most emailed"},
{key: 'mostshared', text: 'most shared'},
{key: 'mostviewed', text: 'most viewed'}
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
        {/* <Dropdown placeholder='Top Stories' options={topStories} style={dropDownStyle}/>
        <Dropdown placeholder='Top Stories'  options={mostPopularOptions} /> */}
      </div>
    </div>
    )
  }
})


export default SideMenu
