import "./Content.css"; // Add your styling

const dummyPosts = [
  {
    id: 1,
    username: "user1",
    profilePic: "https://via.placeholder.com/50", // Dummy profile picture
    imageUrl:
      "https://i.pinimg.com/474x/48/83/24/4883248276d9d3da8b5ccce7c526d0bd.jpg", // Dummy post image
    caption: "Enjoying the view!",
    likes: 150,
    comments: 20,
  },
  {
    id: 2,
    username: "user2",
    profilePic: "https://via.placeholder.com/50", // Dummy profile picture
    imageUrl: "https://via.placeholder.com/500", // Dummy post image
    caption: "Enjoying the view!",
    likes: 150,
    comments: 20,
  },
  {
    id: 3,
    username: "user1",
    profilePic: "https://via.placeholder.com/50", // Dummy profile picture
    imageUrl: "https://via.placeholder.com/500", // Dummy post image
    caption: "Enjoying the view!",
    likes: 150,
    comments: 20,
  },
  {
    id: 4,
    username: "user1",
    profilePic: "https://via.placeholder.com/50", // Dummy profile picture
    imageUrl: "https://via.placeholder.com/500", // Dummy post image
    caption: "Enjoying the view!",
    likes: 150,
    comments: 20,
  },
  {
    id: 5,
    username: "user1",
    profilePic: "https://via.placeholder.com/50", // Dummy profile picture
    imageUrl: "https://via.placeholder.com/500", // Dummy post image
    caption: "Enjoying the view!",
    likes: 150,
    comments: 20,
  },
  {
    id: 6,
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
  {
    id: 2,
    username: "user_story1",
    profilePic: "https://via.placeholder.com/50", // Dummy profile picture
  },
  {
    id: 3,
    username: "user_story1",
    profilePic: "https://via.placeholder.com/50", // Dummy profile picture
  },
  {
    id: 1,
    username: "user_story1",
    profilePic: "https://via.placeholder.com/50", // Dummy profile picture
  },
  {
    id: 1,
    username: "user_story1",
    profilePic: "https://via.placeholder.com/50", // Dummy profile picture
  },
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
