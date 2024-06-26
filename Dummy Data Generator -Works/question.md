 Generate a Dummy data in this format in a collection called employees in a db called company 

 {
    name: 'Harry',
  salary:"450000",
     language: "Python",
     city:"New York",
     isManager: "True"
 }

 Generate 10 such records when a button called generate data is clicked!

 Create and Express app with mongoose to achieve it 
 Every time the button is clicked you should, clear the collection


 const express = require('express');
 const mongoose = require('mongoose');
 const bodyParser = require('body-parser');
 const cors = require('cors');
 const path = require('path');