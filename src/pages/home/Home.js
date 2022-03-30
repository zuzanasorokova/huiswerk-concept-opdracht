import axios from "axios";
import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import Header from "../../components/header/Header";
import logo from "../../assets/logo.png";
import Footer from "../../components/footer/Footer";
import Post from "../../components/post/Post";
import "./Home.css";



const Home = () => {
const [reddit, setReddit] = useState(null)
    useEffect(() => {
        async function fetchData() {
            try{
                const result = await axios.get(`https://www.reddit.com/hot.json?limit=15`);
                console.log(result.data);
                console.log(result.data.data.children[0].data.title);
                console.log(result.data.data.children[0].data.subreddit_name_prefixed);
                console.log(result.data.data.children[0].data.num_comments);
                console.log(result.data.data.children[0].data.ups);
                setReddit(result.data.data)
            }catch(e){
                console.error(e);
            }
        }
        fetchData();
    }, []);

    return (
        <>
            <Header
                image={logo}
                title="Reddit"
            />
            <section className="body">
                <div className="body-title">
                    <h2>Hottest posts</h2>
                    <p>on Reddit right now</p>
                </div>
                <div className="post-view">
                {reddit && reddit.children.map((child) => {
                    return (
                        <Post
                        key={child.data.id}
                        url={child.data.url}
                        title={child.data.title}
                        link={`/subreddit/${child.data.subreddit}`}
                        target="blank"
                        subredditName={child.data.subreddit_name_prefixed}
                        comments="Comments"
                        numbOfComments={child.data.num_comments}
                        ups="Ups"
                        numbOfUps={child.data.ups}
                        />
                    )
                })}
                </div>
            </section>
            <Footer
            text="In opdracht van NOVI hogeschool © 2022"
            />
        </>
    );
};

export default Home;