import { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";

const Post = () => {
  const [post, setPost] = useState(null);

  useEffect(() =>{
    fetchImage();

  }, [])

  const fetchImage = () => {
    axios
      .get("https://dog.ceo/api/breeds/image/random")
      .then((response) => {
        console.log(response)
        setPost(response.data.message)
      })
    };

  

  const handleClick = () => {
   fetchImage();
  };

  

  return (
    <>
      <div>{post ? <img src={post} /> : <Spinner />}</div>
      <div>
        <Button onClick={handleClick}>See Other Dogs</Button>{" "}
      </div>
    </>
  );
};

export default Post;
