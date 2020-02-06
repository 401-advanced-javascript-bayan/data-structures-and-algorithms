'use strict ';
const bcrypt = require('bcrypt');
const jwt = require ('jsonwebtoken'); //  is a compact URL-safe means of representing claims to be transferred between two parties. 

let SECRET = 'cool bayan ';        // conjuction with jwt   //layer of security
                                    //  we will use it in environment later
let db = {};  //some data                                  // fake database
let users = {}; //some users 
