const express=require('express');
const router=express.Router({mergeParams:true});//so this mergeparams will allow us to use the params that were is app.js(id etc) in this line app.use('/campgrounds/:id/reviews',reviews);

const Campground=require('../models/campground');
const Review=require('../models/review');
const {reviewSchema}=require('../schemas.js');
const ExpressError=require('../utils/ExpressError');
const catchAsync=require('../utils/catchAsync');

const reviews=require('../controllers/reviews');

const {validateReview,isLoggedIn,isReviewAuthor}=require('../middleware');

router.post('/', isLoggedIn, validateReview,catchAsync(reviews.createReview));

router.delete('/:reviewId',isLoggedIn,isReviewAuthor,catchAsync(reviews.deleteReview));
module.exports=router;