const express = require('express');
const cors = require('cors')
const {Chatbot} = require('./data')

const app = express();

const config = {
    origin: "*",
    optionsSuccessStatus: 200,
    AccessControlAllowOrigin: "*"
}

app.use(cors(config));
app.get('/test', function (req, res) {
    res.send(Chatbot());
  });

app.get('/', (req,res)=>{
    res.send('server is running');
})

app.listen(8000, () => {
    console.log(`server is listening on port 8000`);
})