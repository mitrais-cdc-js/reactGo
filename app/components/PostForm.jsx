import React, { Component, PropTypes } from 'react';
import styles from 'css/components/post-form';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export default class PostForm extends Component {
  constructor(props) {
    super(props);
    this.onSaveClick = this.onSaveClick.bind(this);
  }

  onSaveClick() {
    const { onPostSave } = this.props;
    const title = this._title.value;
    const content = this._content.value;
    onPostSave(title, content);
  }

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="title post"
          className={cx('titlePost')}
          ref={(t) => this._title = t} />
        <textarea
          placeholder="fill this with a content post"
          className={cx('contentPost')}
          ref={(t) => this._content = t} />
        <input
          className={cx('button')}
          onClick={this.onSaveClick}
          type="submit"
          value="SavePost" />
      </div>
    );
  }
}

PostForm.propTypes = {
  onPostSave: PropTypes.func
};
