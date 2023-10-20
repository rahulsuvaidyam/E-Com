const mongoose = require('mongoose');
const { DB_URI_STRING } = process.env;
// console.log(DB_URI_STRING);
mongoose.connect(DB_URI_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', function() {
  console.log('Connected to MongoDB');
});