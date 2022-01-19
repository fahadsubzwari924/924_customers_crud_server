const mongoose = require('mongoose');
require('dotenv').config();


let mongoURI = `mongodb://${process.env.DB_HOST}/${process.env.DB_NAME}`;

mongoose.connect(mongoURI).then(() => {
    console.log('DB connected!')
})
.catch((err) => {
    console.log(err);
})


