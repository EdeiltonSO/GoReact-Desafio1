import React from 'react';
import PropTypes from 'prop-types';
import '../styles/postheader.scss';

const PostHeader = ({ avatar, name, time }) => (
  <div className="cabecalho">
    <img alt="avatar" className="avatarUser" src={avatar} />
    <div className="infoContainer">
      <p className="username">{name}</p>
      <p className="timepost">há {time} atrás</p>
    </div>
  </div>
);

PostHeader.defaultProps = {
  avatar:
    'https://images.unsplash.com/photo-1508614999368-9260051292e5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=07b3e311bd77d17eb7b57be259ba922e&auto=format&fit=crop&w=600&q=60',
  name: 'Alguém',
  time: 'algum tempo',
};

PostHeader.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  time: PropTypes.string,
};

export default PostHeader;
