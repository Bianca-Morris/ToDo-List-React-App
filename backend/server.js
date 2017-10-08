const express = require('express');
const app = express();
const dbRoutes = require('./routes/databaseAccess.js');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.connection.on('connected', () => console.log("MongoDB connected!"));
if (!process.env.MONGODB_URI){
  throw new Error ("No URI provided. Please source env.sh.")
}
mongoose.connect(process.env.MONGODB_URI);

app.use(express.static('build'));
app.use(bodyParser.json());
app.use('/db', dbRoutes);

app.listen(3000, () =>{
  console.log("Server for React Todo App listening on port 3000.")
})
