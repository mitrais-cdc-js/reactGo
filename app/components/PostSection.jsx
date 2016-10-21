import React, { PropTypes } from 'react';
import PostItem from 'components/PostItem';

const PostSection = ({ posts }) => {
  const postItems = posts.map((post, key) => {
    return (
      <PostItem
        key={key}
        {...post} />);
  });

  return (
    <div>
      { postItems }
    </div>
  );
};

PostSection.propTypes = {
  posts: PropTypes.array.isRequired
};

export default PostSection;
