const passport = require ('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require ('../config/keys');

const user = require('../models/user');

passport.use(
    new GoogleStrategy(
        {
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
   }, 
    (accessToken, refreshToken, profile, done) => {
       new user({ googleId: profile.id }).save();
       new user({ name: profile.id }).save();
       new user({ emai: profile.id }).save();
   }
 )
);