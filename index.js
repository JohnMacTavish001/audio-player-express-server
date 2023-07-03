const express = require('express');
const fs = require('fs');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.post('/audio/:audioId', (req, res) => {
  const fileName = req?.params?.audioId;
  if (fileName) {
    try {
      const file = fs.readFileSync(`resource/${fileName}`);
      res.send(file);
    } catch (error) {
      res.status(500).send({
        error,
      })
    }
    
  } else {
    res.status(400).send({
      error: "Audio id is invalid",
    });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})
