import React from 'react';
import PropTypes from 'prop-types';
import '../styles/post.scss';

import PostHeader from './postheader';

const Post = ({
  data: {
    avatar, name, time, content,
  },
}) => (
  <div className="post">
    <PostHeader avatar={avatar} name={name} time={time} />
    <div className="line" />
    <div className="content">{content}</div>
  </div>
);

Post.defaultProps = {
  data: {
    avatar:
      'https://images.unsplash.com/photo-1508614999368-9260051292e5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=07b3e311bd77d17eb7b57be259ba922e&auto=format&fit=crop&w=600&q=60',
    name: 'Alguém',
    time: 'algum tempo',
    content: '',
  },
};

Post.propTypes = {
  data: {
    avatar: PropTypes.string,
    name: PropTypes.string,
    time: PropTypes.string,
    content: PropTypes.string,
  },
};

export default Post;
