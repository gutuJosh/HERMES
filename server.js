const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler();

const grid = require('./routes/Grid');
const typography = require('./routes/Typography');
const lists = require('./routes/Lists');
const forms = require('./routes/Forms');
const tabs = require('./routes/Tabs');
const table = require('./routes/Table');
const modals = require('./routes/Modals');
const miscellaneous = require('./routes/Miscellaneous');
const download = require('./routes/Download');

app.prepare()
.then(() => {
  const server = express();

  server.use('/grid', grid);
  server.use('/typography', typography);
  server.use('/lists', lists);
  server.use('/forms', forms);
  server.use('/tabs', tabs);
  server.use('/table', table);
  server.use('/modals', modals);
  server.use('/miscellaneous', miscellaneous);
  server.use('/download',download);
  server.use('/static', express.static(__dirname + '/static'));
  
  server.get('*', (req, res) => {
    return handle(req, res);
  });

  //set global var to use in routes
  server.set('app', app);

  server.listen(5000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:5000')
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
});