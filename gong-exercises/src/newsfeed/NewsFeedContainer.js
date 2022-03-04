import React, {Component} from 'react';
import NewsFeedPostEditor from "./NewsFeedPostEditor";
import NewsFeedTweets from "./NewsFeedTweets";

class NewsFeedContainer extends Component {
    render() {
        return (
            <div className="newsfeed-container">
                <NewsFeedPostEditor/>
                <NewsFeedTweets/>
            </div>
        );
    }
}

export default NewsFeedContainer;