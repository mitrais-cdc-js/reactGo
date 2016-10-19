import mongoose from 'mongoose';

/*
 Post Schema
 */

const PostSchema = new mongoose.Schema({
  title: { type: String },
  date: {type: Date, default: Date.now},
  content: {type: String }
});

export default mongoose.model('Post', PostSchema);
