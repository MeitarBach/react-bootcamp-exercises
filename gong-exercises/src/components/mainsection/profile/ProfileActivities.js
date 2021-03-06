import React, {Component} from 'react';
import TweetItem from "../../common/TweetItem";

class ProfileActivities extends Component {
    render() {
        return (
            <div className="profile-activity">
                <div className="activity-nav-bar">
                    <div className="activity-nav-item selected">Tweets</div>
                    <div className="activity-nav-item">Tweets & replies</div>
                    <div className="activity-nav-item">Media</div>
                    <div className="activity-nav-item">Likes</div>
                </div>
                <div className="profile-activity__tweets">
                    {this.props.tweets.map(tweet =>
                            <TweetItem updateTweet={this.props.updateTweet} tweetData={tweet} key={tweet.id}/>
                        )
                    }
                </div>
            </div>

    );
    }
}

export default ProfileActivities;