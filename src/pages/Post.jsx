// import React from "react";

import PropTypes from "prop-types";

function Post({ item }) {
  return (
    <div className="post">
      <img
        src={item.user.profilePic}
        alt={item.user.username}
        className="profile-pic"
      />
      <h3>{item.user.username}</h3>
      <img src={item.imageUrl} alt={item.caption} className="post-image" />
      <p>{item.caption}</p>
    </div>
  );
}

Post.propTypes = {
  item: PropTypes.shape({
    user: PropTypes.shape({
      profilePic: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
    }).isRequired,
    imageUrl: PropTypes.string.isRequired,
    caption: PropTypes.string.isRequired,
  }).isRequired,
};

export default Post;
