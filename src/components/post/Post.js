import React from 'react';
import {Link} from "react-router-dom";
import "./Post.css";


const Post = ({key, url, title, link, target, subredditName, comments, numbOfComments, ups, numbOfUps}) => {
    return (
        <div>
            <article key={key} className="post">
                <h3 className="post-title"><a href={url} className="title-link">{title}</a></h3>
                <div className="container-post-info">
                    <Link to={link} target={target} className="link">{subredditName}</Link>
                    <p className="post-info">{comments} {numbOfComments} - {ups} {numbOfUps}</p>
                </div>
            </article>
        </div>
    );
};

export default Post;