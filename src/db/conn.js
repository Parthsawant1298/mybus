const e = require("express");
const express = require("express");
const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://parthsawant1296:1234567890@cluster0.upnon.mongodb.net/", {


}).then(() => {
    console.log('Connection successful');
}).catch((e) => {
    console.error('no connection',e);
})

