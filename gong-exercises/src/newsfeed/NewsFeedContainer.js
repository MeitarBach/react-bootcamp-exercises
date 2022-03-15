import React, {Component} from 'react';
import NewsFeedPostEditor from "./NewsFeedPostEditor";
import TweetsContainer from "./TweetsContainer";
import TweetItem from "../common/TweetItem";

class NewsFeedContainer extends Component {
    render() {
        return (
            <div className="newsfeed-container">
                <NewsFeedPostEditor user={this.props.user} postTweet={this.props.postTweet}/>
                <div className="newsfeed-tweets">
                    {this.props.tweets.map(tweet =>
                            <TweetItem updateTweet={this.props.updateTweet} tweetData={tweet} key={tweet.id}/>
                        )
                    }
                </div>
            </div>
        );
    }
}

export default NewsFeedContainer;