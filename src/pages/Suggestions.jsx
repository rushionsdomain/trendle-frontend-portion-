import "./Suggestions.css"; // Add your styling

const suggestedUsers = [
  {
    id: 1,
    username: "suggested_user1",
    profilePic: "https://via.placeholder.com/50", // Dummy profile picture
  },
  // Add more suggested users
];

const Suggestions = () => {
  return (
    <div className="suggestions">
      <h3>Suggested for you</h3>
      {suggestedUsers.map((user) => (
        <div key={user.id} className="suggestion">
          <img src={user.profilePic} alt="profile" className="suggestionPic" />
          <p>{user.username}</p>
          <button className="followButton">Follow</button>
        </div>
      ))}
    </div>
  );
};

export default Suggestions;
