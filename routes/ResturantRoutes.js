//https://github.com/elhamvei/Lab03MongoDB-Mongoose

const e = require('express');
const express = require('express');
const Resturants = require('../models/Resturants');
const app = express();

app.get('/resturants', async (req, res) => {
    
    let query = Resturants.find({}).select("cuisine name city resturant_id");
    
    const sortText =   req.query.sortBy;
    if(sortText === 'ASC')
        query = query.sort({'resturant_id': 1})
    else if(sortText === 'DESC')
        query = query.sort({'resturant_id': -1})

    try {
        const resturants = await query.exec();
        res.status(200).send(resturants);
    } catch (err) {
        res.status(500).send(err);
    }
});


app.get('/resturants/cuisine/:type', async (req, res) => {
    try {
        const type = req.params.type;
        const resturants = await resturantModel.find({ cuisine: type }).exec();
        res.send(resturants)
    } catch (err) {
        res.status(500).send(err)
    }
});


app.get('/resturants/Delicatessen', async (req, res) => {
    try {
        const resturants = await Resturants.find({cuisine: 'Delicatessen', city : {$ne: 'Brooklyn'}}).select("cuisine name city -_id").sort({'name': 1}).exec();
        res.status(200).send(resturants);
    } catch (err) {
        res.status(500).send(err);
    }
});


module.exports = app