const mongoose = require('mongoose')



mongoose.connect('mongodb://127.0.0.1:27017/jokeDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log(`Established connection to the DataBase 5000`))
.catch (err => console.log('Something went wrong then connecting to the DataBase',err));