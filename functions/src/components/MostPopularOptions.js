// import React from 'react';
//
// const mostPopularGenre = [ {key: 'mostemailed', text: "most emailed"},
// {key: 'mostshared', text: 'most shared'},
// {key: 'mostviewed', text: 'most viewed'}
// ]


// const mostPopularSection = [ {key: 'arts', text: "arts"},
// {key: 'automobiles', text: 'automobiles'},
// {key: 'blogs', text: 'blogs'},
// {key: 'books', text: 'books'},
// {key: 'business day', text: 'business day'},
// {key: 'education', text: 'education'},
// {key: 'food', text: 'food'},
// {key: 'health', text: 'health'},
// {key: 'job market', text: 'job market'},
// {key: 'magazine', text: 'magazine'},
// {key: 'membercenter', text: 'membercenter'},
// {key: 'movies', text: 'movies'},
// {key: 'multimedia', text: 'multimedia'},
// {key: 'open', text: 'open'},
// {key: 'opinion', text: 'opinion'},
// {key: 'science', text: 'science'},
// {key: 'technology', text: 'technology'}
// ]

// const mostPopularTimePeriod = [ {key: '1', text: "1"},
// {key: '7', text: '7'},
// {key: '30', text: '30'}
// ]
//
// var MostPopularOptions = React.createClass({
//   render() {
//   return (
//     <form onSubmit={this.props.handleSubmit}>
//         <label>
//           Genre:
//           <select name="Genre" required>
//               {mostPopularGenre.map((genre) => {
//                 return (
//                   <option value={genre.text} key={genre.text}>{genre.text}</option>
//                 )
//               })}
//           </select>
//         </label>
//           <br></br>
//         <label>
//           Section:
//           <select name="Section" required>
//               {mostPopularSection.map((section) => {
//                 return (
//                   <option value={section.text} key={section.text}>{section.text}</option>
//                 )
//               })}
//         </select>
//         </label>
//           <br></br>
//         <label>
//           Time:
//           <select name="Time" required>
//               {mostPopularTimePeriod.map((time) => {
//                 return (
//                 <option value={time.text} key={time.text}>{time.text}</option>
//               )
//             })}
//           </select>
//       </label>
//         <br></br>
//         <input type="submit" value="Submit" />
//
//     </form>
//     )
//   }
// })
//
//
// export default MostPopularOptions
"use strict";