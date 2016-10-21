import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';

export default class PostItem extends Component {
  render() {
    const { title, id, date } = this.props;
    const url = '/read/' + id;
    return (
      <div key={id}>
        <Link to={url}><h2>{title}</h2></Link>
        <small>{new Date(date).toDateString()}</small>
      </div>
    );
  }
}
