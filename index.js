const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const config = require('config');
// const ObjectID = require('mongodb').ObjectID;

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname + '/pub')));
app.use('/api/tasks', require('./routes/tasks-route') );

// let db;
const PORT = process.env.PORT || config.get('port');
const url = process.env.mongoURI || config.get('mongoURI');
// const dbname = "todos";
// const client = new MongoClient(url, {
//     useUnifiedTopology: true
// });

app.get('/', (req, res) => {
    res.sendFile('index.html')
});

// app.get('/tasks', (req, res) => {
//     db.collection('tasks').find().toArray((err, docs) => {
//         if (err) {
//             console.error(err);
//             return sendStatus(500);
//         }
//         res.send(docs);
//     })
// })
// app.get('/tasks/:id', (req, res) => {
//     db.collection('tasks').findOne({ _id: ObjectID(req.params.id) }, (err, docs) => {
//         if (err) {
//             console.error(err);
//             return res.sendStatus(500);
//         }
//         res.send(docs);

//     })
// });
// app.post('/tasks/addTask', (req, res) => {
//     db.collection('tasks').insertOne(req.body, err => {
//         if (err) {
//             console.error(err);
//             return res.sendStatus(500);
//         }
//         res.sendStatus(200);
//     })
// });
// app.put('/tasks/:id', (req, res) => {
//     db.collection('tasks').updateOne({ _id: ObjectID(req.params.id) }, {
//         $set: {
//             serviceType: req.body.serviceType,
//             task: req.body.task,
//             location: req.body.location,
//             description: req.body.description
//         }
//     }, err => {
//         if (err) {
//             console.error(err);
//             return res.sendStatus(500);
//         }
//         res.sendStatus(200);
//     })
// });

// app.delete('/tasks/:id', (req, res) => {
//     db.collection('tasks').deleteOne({ _id: ObjectID(req.params.id) }, err => {
//         if (err) {
//             console.error(err);
//             return res.sendStatus(500);
//         }
//         res.sendStatus(200);
//     })
// });
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