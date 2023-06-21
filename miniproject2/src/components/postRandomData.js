import { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

const Post = () => {
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios
      .get("https://dog.ceo/api/breeds/image/random")
      .then((response) => {
        console.log(response)
        setPost(response.data.message)
      })
         
  }, []);

  return (
    <>
    {post}
      {/* {post && (
        <div className="position-relative">
          <Button onclick= {Post}>Button</Button>{" "}
        </div>
      )} */}
    </>
  );
};

export default Post;
