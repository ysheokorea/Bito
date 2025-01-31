// 게시판 작성
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import "../css/ImageUpload.css";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import {SetCreatePost} from "../api/SetCreatePost";
import { Avatar } from "@material-ui/core";
import { ERC_SetToken } from "../api/ERC_SetToken";
import { useContext } from "react";
import {AccountContext} from '../context/accountContext';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },

  large: {
    width: theme.spacing(6),
    height: theme.spacing(6),
  },
  
}));

function BoardUpload(props) {
    const {user, web3} = props;
    const [image, setImage] = useState(null);
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState("");
    const [caption, setCaption] = useState("");
    const {account, setAccount} = useContext(AccountContext);

    // 이미지 생성및 교체 
    const handleChange = (e) => {
      const file = e.target.files[0];
      if (file) {
        const fileType = file["type"];
        const validImageTypes = ["image/gif", "image/jpeg", "image/png"];
        if (validImageTypes.includes(fileType)) {
          setError("");
          setImage(file);
          console.log(file)
        } else {
          console.log("error");
          setError("error please upload a image file");
        }
      
      }
    };
  
    // 게시글 업로드
    const handleUpload = () => {
      if (image) {
        SetCreatePost(user.id,user.username,image,caption).then(()=>{
          ERC_SetToken(web3,101,account).then(()=>{
            //window.location.replace("/")
          })
        })      
      } else {
        setError("Error please choose an image to upload");
      }
    };
  
    const classes = useStyles();
    const fileInputRef = React.createRef();
  
  
    return (
      <div className="upload">
        <div className="upload_first">
          <Avatar
            displayname="post__avatar"
            alt="subhampreet"
            src="./images/avatar1.jpg"
            className = {classes.large}
            style={{marginRight:20}}
          />
          <input
            type="text"
            placeholder="What's on your mind?"
            value={caption}
            onChange={(event) => setCaption(event.target.value)}
            className="upload_caption"
          />
        </div>
  
  
        <div className="upload_content">
           <Button 
           onClick={() => fileInputRef.current.click()} 
           startIcon={<AddAPhotoIcon /> } 
           className = {classes.button}
           color = "primary"
           variant="contained"
           >
               Upload Photo
           </Button> 
          <input type="file" onChange={handleChange} hidden ref={fileInputRef} />
          
  
          <Button variant="contained" onClick={handleUpload} color="secondary"className = {classes.button}>
            Create Post
          </Button>
        </div>
  
        <br />
  
        <p style={{ color: "red" }}>{error}</p>
        {progress > 0 ? <center><progress value={progress} max="100" /></center> : ""}
      </div>
    );
  }
  
  export default BoardUpload;