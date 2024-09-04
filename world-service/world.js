const express = require('express');
const world = express();
const port = 8081;
world.get('/world', (rq, rsp) => {
  rsp.send('World ! ');
});
// starting server
world.listen(port, () => {
  console.log(`Server running on port 8081`);
});