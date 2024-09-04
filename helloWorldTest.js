const axios = require('axios');
const getHelloWorldTest = async () => {
  try {
    const hel = await axios.get('http://127.0.0.1:52479/hello'); // async http GET request
    const wor = await axios.get('http://127.0.0.1:52496/world');
    console.log(`${hel.data} ${wor.data}`);
  } catch (error) {
    console.error(error); //catching the error
  }
};

getHelloWorldTest();//calling the function to print the output
