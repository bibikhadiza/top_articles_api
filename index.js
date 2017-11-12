import React from 'react';
import {renderToString} from 'react-dom/server';
import App from './src/App';
// import getFacts from './src/Facts';
import express from 'express';
import fs from 'fs';
import path from 'path';
import Transmit from 'react-transmit'

// const index = fs.readFileSync(__dirname + './public/html', 'utf8')
//
// const app = express();
//
// app.get('**', (req, res) => {
//   getFacts().then(facts => {
//     const html = renderToString(<App facts={facts}/>);
//     const finalHtml = index.replace('<-!--- ::APP:: --->', html)
//     res.send(finalHtml);
//   });
// });

function handleRender(req, res){
  Transmit.renderToString(App).then(({reactString, reactData}) => {
    fs.readFile('./build/index.html', 'utf8', function (err, data) {
      if (err) throw err;

      const document = data.replace(/<div id="root"><\/div>/, `<div id="root">${reactString}</div>`);
      const output = Transmit.injectIntoMarkup(document, reactData, ['/build/client.js']);
      res.send(document);
    });
  });
}

const app = express();



app.use('/build', express.static(path.join(__dirname, 'build')));

app.get('*', handleRender);
app.listen(3000);


// export let ssrapp = functions.https.onRequest(app);
