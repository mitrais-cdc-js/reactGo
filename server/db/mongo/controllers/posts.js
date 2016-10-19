import passport from 'passport';
import Post from '../models/post';

/**
 * Get all post
 */
export function all(req, res) {
  Post.find({}).exec((err, posts) => {
    if (err) {
      console.error(err);
      return res.status(500).json({status: 'error', message: 'Something went wrong getting the post'});
    }
    return res.json(posts);
  });
}

/**
 * Get a post
 */
export function get(req, res) {
  Post.findOne({_id: req.params.id}).exec((err, post) => {
    if (err) {
      console.error(err);
      return res.status(500).json({status: 'error', message: 'we failed get the post: ' + req.params.id});
    }
    if (post === null) {
      console.warn('post with id #' + req.params.id + ' not found');
      return res.status(404).json({status: 'error', message: 'post not found'});
    }
    return res.json(post);
  });
}

/**
 * Add a post
 * Secure endpoint, only contributor+
 */
export function add(req, res) {
  Post.create(req.body, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({status: 'error', message: 'Something went wrong when adding the post'});
    }
    return res.status(200).json({status: 'ok'});
  });
}

/**
 * Update a post
 * Secure endpoint
 */
export function update(req, res) {
  Post.findOneAndUpdate({_id: req.params.id}, req.body, (err) => {
    if (err) {
      console.err(err);
      return res.status(500).json({status: 'error', message: 'Somehow, we failed update post'});
    }
    return res.status(200).json({status: 'ok'});
  });
}

/**
 * Remove a post
 * Secure endpoint
 */
export function remove(req, res) {
  Post.findOneAndRemove({_id: req.params.id}, (err) => {
    if (err) {
      console.err(err);
      return res.status(500).json({status: 'error', message: 'Somehow, we failed delete post'});
    }
    return res.status(200).json({status: 'ok'});
  });
}

export default {
  all,
  get,
  add,
  update,
  remove
};
