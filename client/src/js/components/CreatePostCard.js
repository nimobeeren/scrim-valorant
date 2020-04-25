import React from "react";
import Card from "./Card";
import PostFormContainer from "../containers/PostFormContainer";
import "../../styles/CreatePostCard.css";

const CreatePostCard = () => (
  <div className="create-post__wrapper">
    <Card className="card card--secondary">
      <PostFormContainer />
    </Card>
  </div>
);

export default CreatePostCard;
