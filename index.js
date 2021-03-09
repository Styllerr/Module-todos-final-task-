const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const config = require('config');

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname + '/pub')));
app.use('/api/tasks', require('./routes/tasks-route') );

const PORT = process.env.PORT || config.get('port');
const url = process.env.mongoURI || config.get('mongoURI');

const urlencodedParser = bodyParser.urlencoded({extended: false});

app.get('/', (req, res) => {
    res.sendFile('index.html')
});
app.post('/auth', urlencodedParser, (req, res) => {
    if(!req.body) return res.sendStatus(400);
    console.log(req.body);
});


async function start() {
    try {
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });
        console.log('Connection success...');
        app.listen(PORT, () => console.log(`Server running at port: ${PORT}...`));
        
    } catch (error) {
        console.log('Server not started: ', error.message);
        process.exit(1)
    } 
}

start();