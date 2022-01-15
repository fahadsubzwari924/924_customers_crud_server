const mongoose = require('mongoose');
const connection = require('./connection');
require('dotenv').config();


let mongoURI = `mongodb://${process.env.DB_HOST}/${process.env.DB_NAME}`;

mongoose.connect(mongoURI).then(() => {
    console.log('DB connected!')
})
.catch((err) => {
    console.log(err);
})

// const db = mongoose.createConnection(
//     mongoURI, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//     }
// );


// global.db = db;


// db.on('connected', () => {
//     console.log('Connected to db!');
// })

// // Mongoose disconnected event
// db.on('disconnected', () => {
//     console.log('DB disconnected');
// });

// // Mongoose error event
// db.on('error', error => {
//     console.log('DB error : ', error);
// });

