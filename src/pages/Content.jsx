import "./Content.css"; // Add your styling

const dummyPosts = [
  {
    id: 1,
    username: "user1",
    profilePic: "https://via.placeholder.com/50", // Dummy profile picture
    imageUrl: "https://via.placeholder.com/500", // Dummy post image
    caption: "Enjoying the view!",
    likes: 150,
    comments: 20,
  },
  // Add more dummy posts
];

const dummyStories = [
  {
    id: 1,
    username: "user_story1",
    profilePic: "https://via.placeholder.com/50", // Dummy profile picture
  },
  // Add more dummy stories
];

const Content = () => {
  return (
    <div className="content">
      <div className="stories">
        {dummyStories.map((story) => (
          <div key={story.id} className="story">
            <img src={story.profilePic} alt="story" className="storyPic" />
            <p>{story.username}</p>
          </div>
        ))}
      </div>

      <div className="posts">
        {dummyPosts.map((post) => (
          <div key={post.id} className="post">
            <div className="postHeader">
              <img src={post.profilePic} alt="profile" className="profilePic" />
              <p>{post.username}</p>
            </div>
            <img src={post.imageUrl} alt="post" className="postImage" />
            <div className="postFooter">
              <p>❤️ {post.likes} likes</p>
              <p>{post.caption}</p>
              <p>{post.comments} comments</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Content;
