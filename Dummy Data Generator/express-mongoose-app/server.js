// Generate a Dummy data in this format in a collection called employees in a db called company 

// {
//     name: 'Harry',
//     salary:"450000",
//     language: "Python",
//     city:"New York",
//     isManager: "True"
// }

// Generate 10 such records when a button called generate data is clicked!

// Create and Express app with mongoose to achieve it 
// Every time the button is clicked you should, clear the collection


// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const path = require('path');
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect('mongodb://localhost:27017/');

const employeeSchema = new mongoose.Schema({
    name:String,
    salary:String,
    language:String,
    city:String,
    isManager:String
});

const Employee = mongoose.model('Employee', employeeSchema)

app.get('/generate-data', async (req,res) => {
    const newEmployee = [];
    for (let i = 0; i < 10; i++) {
        newEmployee.push({
            name:`Employee${i}`,
            salary:`${Math.floor(Math.random() * 1000000)}`,
            language: ['Python', 'Javascript', 'Java', 'C++'][Math.floor(Math.random() * 4)],
            city: ['New York', 'Los Angeles', 'Chicago', 'Houston'][Math.floor(Math.random() * 4)],
            isManager: Math.random() > 0.5 ? 'True' : 'False'
        });
        
    }
    try{
        await Employee.inserMany(newEmployee)
        res.status(200).send('10 New Employees Generated')

    } catch (error){
        res.status(500).send(error);
    }
})

app.listen(PORT,() => {
    console.log(`Server is running on port ${PORT}`)
})