import axios from "axios";
import React, {useEffect, useState} from 'react';
import Header from "../../components/header/Header";
import logo from "../../assets/logo.png";
import Footer from "../../components/footer/Footer";
import Post from "../../components/post/Post";
import "./Home.css";
import amountWithPoint from "../../helpers/amountWithPoint";
import titleBreak from "../../helpers/titleBreak";



const Home = () => {
    const [reddit, setReddit] = useState(null)
    const [loading, toggleLoading] = useState(false);
    const [error, toggleError] = useState(false);

    useEffect(() => {
        async function fetchData() {
            toggleLoading(true);
            toggleError(false);

            try{
                const result = await axios.get(`https://www.reddit.com/hot.json?limit=15`);
                console.log(result.data);
                console.log(result.data.data.children[0].data.title);
                console.log(result.data.data.children[0].data.subreddit_name_prefixed);
                console.log(result.data.data.children[0].data.num_comments);
                console.log(result.data.data.children[0].data.ups);
                console.log(result.data.data.children[3].data.id)
                setReddit(result.data.data)
            }catch(e){
                console.error(e);
                toggleError(true);
            }
            toggleLoading(false);
        }
        fetchData();
    }, []);

    return (
        <>
            <div className="page">
                {error && <span>Something went wrong while loading the data</span>}
                {loading && <span>Loading...</span>}
                <Header
                    image={logo}
                    title="Reddit"
                />
                <main className="outer-container body">
                    <div className="inner-container">
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
                                        title={titleBreak(child.data.title)}
                                        // title={child.data.title}
                                        link={`/subreddit/${child.data.subreddit}`}
                                        target="blank"
                                        subredditName={child.data.subreddit_name_prefixed}
                                        comments="Comments"
                                        numbOfComments={amountWithPoint(child.data.num_comments)}
                                        ups="Ups"
                                        numbOfUps={amountWithPoint(child.data.ups)}
                                    />
                                )
                            })}
                        </div>
                    </div>
                </main>
                <Footer
                    text="In opdracht van NOVI hogeschool © 2022"
                />
            </div>

        </>
    );
};

export default Home;