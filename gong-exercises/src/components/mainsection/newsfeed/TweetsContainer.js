import React, {Component} from 'react';
import TweetItem from "../../common/TweetItem";

class TweetsContainer extends Component {
    render() {
        return (
            <div className={this.props.className}>
                {this.props.tweets.map(tweet =>
                        <TweetItem updateTweet={this.props.updateTweet} tweetData={tweet} key={tweet.id}/>
                    )
                }
            </div>
        );
    }
}

export default TweetsContainer;