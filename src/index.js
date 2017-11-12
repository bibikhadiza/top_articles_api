import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
// import getFacts from './components/Facts'

// getFacts().then(facts => {
//   ReactDOM.render(<App facts={facts}/>, document.getElementById('root'));
//   registerServiceWorker();
// })

ReactDOM.render(<App />, document.getElementById("root"));
