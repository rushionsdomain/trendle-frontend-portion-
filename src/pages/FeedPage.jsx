// import React from 'react';
import Sidebar from "./SideBar";
import Content from "./Content";
import Suggestions from "./Suggestions";
import "./FeedPage.css"; // Add custom styling for FeedPage

const FeedPage = () => {
  return (
    <div className="feedPage">
      <Sidebar />
      <Content />
      <Suggestions />
    </div>
  );
};

export default FeedPage;
