const express = require('express');
const app = express();
app.use((req, res, next) => {
  console.log('Middleware executed');
  next();
});
app.get('/', (req, res) => res.send('Hello World'));
app.listen(3000, () => console.log('App running on port 3000'));

const os = require('os');
console.log('Free Memory:', os.freemem());
console.log('CPU Info:', os.cpus());

const fs = require('fs');
fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});

try {
    let result = riskyFunction();
  } catch (error) {
    console.error('Error occurred:', error);
  }

  // Using http module
const http = require('http');
http.get('https://jsonplaceholder.typicode.com/todos/1', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => console.log(data));
});

// Using axios
const axios = require('axios');
axios.get('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => console.log(response.data))
  .catch(error => console.error('Error:', error));


// const express = require('express');
// const app = express();
// app.get('/api/data', (req, res) => res.json({ message: 'Hello API' }));
// app.listen(3000, () => console.log('API running on port 3000'));
