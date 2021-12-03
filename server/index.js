const express = require('express');
const request = require('request');
const cors = require('cors'); //

const PORT = 3001;

const app = express();

app.use(cors());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/paintings', (req, res) => {
  request(
    {
      url: 'https://collectionapi.metmuseum.org/public/collection/v1/objects?departmentIds=3'
    },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res
          .status(response.statusCode)
          .json({ type: 'error', message: response.statusMessage });
      }

      res.json(JSON.parse(body));
    }
  );
});

app.get('/details/:id', (req, res) => {
  request(
    {
      url: `https://collectionapi.metmuseum.org/public/collection/v1/objects/${req.params.id}`
    },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res
          .status(response.statusCode)
          .json({ type: 'error', message: response.statusMessage });
      }

      res.json(JSON.parse(body));
    }
  );
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
