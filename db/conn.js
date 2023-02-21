const mongoose = require('mongoose');

const username = 'care@pregamate.com';
const password = '27May@2011';
const clusterName = 'cluster0';

mongoose.connect(
  `mongodb+srv://${care@pregamate.com}:${27May@2011}@${cluster0}.mongodb.net/<your-db-name>?retryWrites=true&w=majority`,
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function() {
  console.log('Connected to MongoDB!');
});
