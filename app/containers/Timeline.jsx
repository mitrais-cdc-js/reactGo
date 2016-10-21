import React, { Component, PropTypes } from 'react';
import { connect }  from 'react-redux';
// import classNames from 'classNames/bind';
// import { fetchPosts } from 'actions/posts';
import PostSection from 'components/PostSection';

class Timeline extends Component {
  render() {
    const { posts } = this.props;
    return (
      <div>
        <h2>Timeline Post</h2>
        <PostSection posts={posts} />
      </div>
    );
  }
}

Timeline.propTypes = {
  posts: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    posts: state.post.posts
  };
}

export default connect(mapStateToProps)(Timeline);
