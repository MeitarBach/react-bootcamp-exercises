import React, {Component} from 'react';
import Tweet from "../common/Tweet";

class TweetsContainer extends Component {
    render() {
        return (
            <div className={this.props.className}>
                {this.props.tweets.map(tweet =>
                        <Tweet updateTweet={this.props.updateTweet} tweetData={tweet} key={tweet.id}/>
                    )
                }
            </div>
        );
    }
}

export default TweetsContainer;