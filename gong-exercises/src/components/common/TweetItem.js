import React, {Component} from 'react';
import ProfilePicture from "../mainsection/profile/ProfilePicture";
import PostAction, { ActionType } from "./PostAction";

class TweetItem extends Component {
    toggleLike = () => {
        this.props.updateTweet(this.props.tweetData.id, { isLiked: !this.props.tweetData.isLiked });
    }

    render() {
        return (
            <div className="tweet">
                <ProfilePicture user={this.props.tweetData.author}/>
                <b className="tweet__user-name">{this.props.tweetData.author.fullName}</b>
                <p className="tweet__content">{this.props.tweetData.content}</p>
                <div className="post-actions">
                    <PostAction actionType={ActionType.COMMENT}/>
                    <PostAction actionType={ActionType.RETWEET}/>
                    <PostAction onClick={this.toggleLike} clicked={this.props.tweetData.isLiked} actionType={ActionType.LIKE}/>
                    <PostAction actionType={ActionType.SHARE}/>
                    <PostAction actionType={ActionType.DELETE}/>
                </div>
            </div>
        );
    }
}

export default TweetItem;