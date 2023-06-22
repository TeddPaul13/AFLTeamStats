import { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

const Post = () => {
  const [post, setPost] = useState(null);

  // useEffect(() =>{
  //   const fetchImage = async()=>{
  //     const response = await fetch("https://dog.ceo/api/breeds/image/random")
  //   const newImage = await response.json();
  //   console.log(newImage)
  //     setPost(newImage.message)
  //   }
  //   fetchImage();

  // }, [])

  const handleClick = async () => {
    try {
      const response = await fetch("https://dog.ceo/api/breeds/image/random")
       const newImage = await response.json();
        console.log(newImage)
          setPost(newImage.message)
    } catch (err) {
        console.log(err.message)
    }
}

  

  // useEffect(() => {
  //   axios
  //     .get("https://dog.ceo/api/breeds/image/random")
  //     .then((response) => {
  //       console.log(response)
  //       setPost(response.data.message)
  //     })
         
  // }, []);

  return (
    <>
      <div>
      <img src = {post}/>

      </div>
      
        <div >
          <Button onClick={handleClick}>See Other Dogs</Button>{" "}
        </div>

      
    </>
  );
};

export default Post;
