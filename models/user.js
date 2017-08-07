const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: String,
    name: String,
    email: String
  
});

//create model class

mongoose.model('users', userSchema);