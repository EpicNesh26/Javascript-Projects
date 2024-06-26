import express from 'express'
const app = express()
const port = 3000

import mongoose from 'mongoose';
import Employee from './models/Employee.js'
mongoose.connect('mongodb://127.0.0.1:27017/company');

app.set('view engine', 'ejs')

const getRandom = (arr) => {
    let rno = Math.floor(Math.random() * (arr.length - 1))
    return arr[rno]
}

app.get('/', (req, res) => {
    res.render('index', { foo: 'FOO' });
})


app.get('/generate', async (req, res) => {

    await Employee.deleteMany({})

    let randomNames = ["Nesh","Forloop","CodewithHarry","OneByte"]
    let randomLang = ["Python","Javascript","HTML","CSS","Kotlin"]
    let randomcities = ["Regina", "Calgary","Waterloo"]

    for (let index = 0; index < 10; index++) {
        let e = await Employee.create({

            name: getRandom(randomNames),
            salary: Math.floor(Math.random() * 100000),
            language: getRandom(randomLang),
            city: getRandom(randomcities),
            isManager: Math.random() > 0.5

        });
        console.log(e)
        // await e.save()

    }
    res.render('index', { foo: 'FOO' });
})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})