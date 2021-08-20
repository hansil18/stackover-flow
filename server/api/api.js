import express from 'express';
import User from '../schema/User.js';
import Answer from '../schema/Answer.js'
import Question from '../schema/Question.js';

const router=express.Router();


router.post('/signin', async (req,res,next) => {
    const exist = await User.findOne({ username: req.body.username });
    
    if(exist){
        return res.status(401).json('Username already exist');
    } 
    User.create(req.body)
    .then(data => res.json(data))
    .catch(next => console.log(next));
})

router.post('/login', async (req, res, next) => {
    const user = await User.findOne({username: req.body.username, password: req.body.password});
    if(user){
        return res.status(200).json(`${req.body.username} login successfull`);
    }
    else{
        return res.status(401).json('Invalid Login');
    }
})

export default router;