import React, { useState, Component } from 'react';

/*
function get_data2() {

    const mongoose = require("mongoose");
    mongoose.connect('mongodb+srv://unique:unique@cluster0-3cmqe.mongodb.net/prod?retryWrites=true&w=majority', {
        useNewUrlParser: true
    });

    const connection = mongoose.connection;
    connection.once("open", function () {
        console.log("Connection with MongoDB was successful");
    });

    var Schema = mongoose.Schema;
    const uniqueness = mongoose.model('uniqueness', Schema(
        {
            counter: Number,
            Curiosity: Number
        }
    ));

    let query = uniqueness.find().where('counter').equals(324);
    //query instanceof mongoose.Query; // true

    // Execute the query
    var ans = '';
    query.exec().then(
        (d) => {
            ans = d[0];
        });
    return (ans);
}
*/

function get_data() {
    const mongo = require('mongodb').MongoClient;
    const url = 'mongodb+srv://unique:unique@cluster0-3cmqe.mongodb.net';
    var ans = '';
    mongo.connect(url, {
        //useNewUrlParser: true,
        useUnifiedTopology: true
    }, (err, client) => {
        if (err) {
            console.error(err)
            return;
        }
        console.log('connection success');
        const db = client.db('prod');
        const collection = db.collection('uniqueness');
        collection.findOne({ counter: 3425 }, (err, item) => {
            console.log(item)
            ans = item['Curiosity']
        });
    });
    return (ans);
}

function get_data_test2() {
    return 'testData';
}

export default class Fetch extends Component {
    constructor(props) {
        super(props);
        this.data = '';
        this.state = { data: '' };
    }

    componentDidMount() {
        this.data = get_data();
        var x = get_data();
        this.setState({ data: [x] });
    }

    render() {
        var x = get_data();
        return (
            <div>
                <p>Test</p>
                <p> first {x} </p>
                <p> second this.data {this.data}</p>
                <p> third this.props.data {this.state['data']}</p>
            </div>
        );
    }
}