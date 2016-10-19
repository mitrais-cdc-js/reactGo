import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import PostForm from 'components/PostForm';
import { createPost } from 'actions/posts';

class Dashboard extends Component {
    render() {
      const { user: { role }, createPost } = this.props;
      return (
        <div>
          <h2>Dashboard</h2>
          <p>Welcome to the Dasboard. will updated later with some serious form or menu here.</p>
          <p>by the way, your role is <strong>{ role }</strong></p>
          <PostForm onPostSave={createPost} />
        </div>
      );
    }
}

Dashboard.propType = {
  user: PropTypes.object,
  createPost: PropTypes.func
};

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps, { createPost })(Dashboard);
