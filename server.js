const express = require("express");
const compression = require("compression");
const morgan = require("morgan");
const path = require("path");

const app = express();
const env = app.get("env");

const port = process.env.PORT || 5001;

if(env === 'production') {
  app.disable('x-powered-by');
  app.use(compression());
  app.use(morgan('common'));

  app.use(express.static(path.resolve(__dirname, 'build')));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'))
  })
}

app.listen(port, () => {
  console.log('environment=', env);
  // console.log('node_env=', process.env)
  console.log(`app listening on port: ${port}!`);
});