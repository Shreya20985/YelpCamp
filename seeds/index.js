const express=require('express');
const cities=require('./cities');
const mongoose=require('mongoose');
const {places,descriptors,descriptions,images}=require('./seedHelpers');
const Campground=require('../models/campground');
mongoose.connect('mongodb://localhost:27017/yelp-camp');
const db=mongoose.connection;
db.on("error",console.error.bind(console,"connection error:"));
db.once("open",()=>{
    console.log("Database connected");
});
const sample=(array)=>array[Math.floor(Math.random()*array.length)];
const seedDB=async()=>{
    await Campground.deleteMany({});
    for(let i=0;i<6;i++){
        const randomIndex=Math.floor(Math.random()*cities.length);
        const price=Math.floor(Math.random()*20)+10;
        const camp=new Campground({
            author:'69c6a3c2222a4d298cab547a',
            location:`${cities[randomIndex].city},${cities[randomIndex].state}`,
            title:`${sample(descriptors)} ${sample(places)}`,
            description:sample(descriptions),
            price:price,
           images: [
    {
        url: sample(images),
        filename: 'seed-image-1'
    },
    {
        url: sample(images),
        filename: 'seed-image-2'
    }
]
        })
        await camp.save();
    }
}
seedDB().then(()=>{
    mongoose.connection.close();
})