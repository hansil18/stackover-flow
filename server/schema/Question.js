import mongoose from 'mongoose';

const questions = new mongoose.Schema( {
    content: {
        type: String,
        required: true,
        index: true,
        lowercase: true
    },
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        index: true,
        lowercase: true
    }
});


const Question = mongoose.model('Question', questions);

export default Question;