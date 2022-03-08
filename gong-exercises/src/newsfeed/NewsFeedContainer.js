import React, {Component} from 'react';
import NewsFeedPostEditor from "./NewsFeedPostEditor";
import TweetsContainer from "./TweetsContainer";
import Tweet from "../common/Tweet";

class NewsFeedContainer extends Component {
    render() {
        return (
            <div className="newsfeed-container">
                <NewsFeedPostEditor/>
                <div className="newsfeed-tweets">
                    {this.props.tweets.map(tweet =>
                            <Tweet updateTweet={this.props.updateTweet} tweetData={tweet} key={tweet.id}/>
                        )
                    }
                </div>
            </div>
        );
    }
}

export default NewsFeedContainer;