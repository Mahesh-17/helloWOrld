const axios = require('axios');
const express = require('express');
const test = express();
const port = 8000;
test.get('/test', async (req, res) => {
    try {
        const helloRsp = await axios.get('http://hello-service:8080/hello');
        const worldRsp = await axios.get('http://world-service:8081/world');
        res.send(`${helloRsp.data} ${worldRsp.data}`);
    } catch (error) {
        res.send('Error with status code 500');
    }
});
test.listen(port, () => {
    console.log(`Service running on port ${port}`);
});
