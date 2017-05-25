import mongoose from 'mongoose'

const Schema = mongoose.Schema

var comments = new Schema({
    comment: { type: String, required: [true, 'Comment Required'] },
    created_by: { type:String, default: "ผู้ไม่ประสงค์ออกนาม" },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
});

var BlogModel = new Schema({
    name: { type: String, required: [true, 'Topic Name Required'] },
    topic: { type: String, required: [true, 'Topic Required']},
    content: { type: String, required: [true, 'Content Required'] },
    pic: String,
    created_by: String,
    comments: [comments],
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
})

export const Blog = mongoose.model('Blog', BlogModel)
