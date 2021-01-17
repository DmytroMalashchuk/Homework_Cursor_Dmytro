import React from 'react';
import './Post-style.css';

const Post = ({author, date, inscription, image}) => (
    <div className="post">
        <img className="photo" src={author.photo}></img>
        <p className="name">{author.name}</p>
        <p className="nickname">{author.nickname}</p>
        <p className="date">{date}</p>
        <p className="inscription">{inscription}</p>
        <img className="image" src={image}></img>
    </div>
)

export default Post;