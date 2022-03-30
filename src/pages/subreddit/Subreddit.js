import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link, useParams} from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Specification from "../../components/specification/Specification";

const Subreddit = () => {
    const [subredditInfo, setSubredditInfo] = useState(null)
    const {subredditId} = useParams();

    useEffect(() => {
        async function fetchData() {
            try{
                const result = await axios.get(`https://www.reddit.com/r/${subredditId}/about.json`);
                console.log(result.data);
                console.log(result.data.data.display_name_prefixed);
                console.log(result.data.data.public_description);
                console.log(result.data.data.subscribers);
                setSubredditInfo(result.data.data);
            }catch(e){
                console.error(e);
            }
        }
        fetchData();
    }, []);
    return (
        <>
            <div className="outer-container-subredditpage">
                {subredditInfo &&
            <>
                <Header
                    title={subredditInfo.display_name_prefixed}
                    subtitle="subreddit specifications"
                />
                <Specification
                title="Title"
                titleSpec={subredditInfo.title}
                description="Description"
                descriptionSpec={subredditInfo.public_description}
                numbOfSubscribers="Number of subscribers"
                numbOfSubscribersSpec={subredditInfo.subscribers}
                />
            </>
            }
                <Link to="/">Take me back</Link>

                <Footer
                    text="In opdracht van NOVI hogeschool © 2022"
                />
            </div>

        </>
    );
};

export default Subreddit;