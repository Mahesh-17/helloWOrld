const express = require('express');
const hello = express();
const port = 8080;
hello.get('/hello', (rq, rsp) => {
  rsp.send('Hello, ');//sending the response as hello
});
// starting the server
hello.listen(port, () => {
  console.log(`Server running on port 8080`);
});
