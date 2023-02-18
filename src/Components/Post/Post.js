import React, { useState } from "react";
import "./Post.css";
import { Card, Button } from "react-bootstrap";

function Post(props) {
  const [like, setLike] = useState(0);

  const handleLikes = () => {
    setLike(like + 1);
  };

  return (
    <Card className="card-size" key={props.id}>
      <Card.Img
        className="card-img"
        variant="top"
        src={`https://picsum.photos/200?random=${props.id}`}
      />
      <Card.Body className="card-body">
        <div>
          <Card.Text>User ID: {props.id}</Card.Text>
        </div>
        <div>
          <Card.Text>Title : {props.title}</Card.Text>
        </div>
        <div>
          <Card.Text>Likes: {like}</Card.Text>
        </div>
      </Card.Body>
      <div>
        <Button className="card-button" variant="primary" onClick={handleLikes}>
          Like Post
        </Button>
      </div>
    </Card>
  );
}

export default Post;
