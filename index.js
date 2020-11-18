const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
let MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

let app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname + '/pub')));

let db;
const PORT = process.env.PORT || 3000
const url = 'mongodb+srv://todoser:loD9ILEH6r8o@cluster0.a8nsi.mongodb.net/todos?retryWrites=true&w=majority';
const dbname = "todos";
const client = new MongoClient(url, {
    useUnifiedTopology: true
});

app.get('/', (req, res) => {
    res.sendFile('index.html')
});

app.get('/tasks', (req, res) => {
    db.collection('tasks').find().toArray((err, docs) => {
        if (err) {
            console.error(err);
            return sendStatus(500);
        }
        res.send(docs);
    })
})
app.get('/tasks/:id', (req, res) => {
    db.collection('tasks').findOne({ _id: ObjectID(req.params.id) }, (err, docs) => {
        if (err) {
            console.error(err);
            return res.sendStatus(500);
        }
        res.send(docs);

    })
});
app.post('/addTask', (req, res) => {
    db.collection('tasks').insertOne(req.body, err => {
        if (err) {
            console.error(err);
            return res.sendStatus(500);
        }
        res.sendStatus(200);
    })
});
app.put('/tasks/:id', (req, res) => {
    db.collection('tasks').updateOne({ _id: ObjectID(req.params.id) }, {
        $set: {
            serviceType: req.body.serviceType,
            task: req.body.task,
            location: req.body.location,
            description: req.body.description
        }
    }, err => {
        if (err) {
            console.error(err);
            return res.sendStatus(500);
        }
        res.sendStatus(200);
    })
});

app.delete('/tasks/:id', (req, res) => {
    db.collection('tasks').deleteOne({ _id: ObjectID(req.params.id) }, err => {
        if (err) {
            console.error(err);
            return res.sendStatus(500);
        }
        res.sendStatus(200);
    })
});

client.connect(err => {

    console.log('Connection success...');
    db = client.db(dbname);
    app.listen(PORT, () => console.log(`Server running at port: ${PORT}...`));
});