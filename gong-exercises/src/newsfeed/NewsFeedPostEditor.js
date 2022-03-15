import React, {Component} from 'react';
import ProfilePicture from "../profile/ProfilePicture";
import { v4 as uuid } from 'uuid';
import CustomButton, { ButtonType } from "../CustomButton";
import Tweet from "../common/Tweet";

class NewsFeedPostEditor extends Component {
    constructor(props) {
        super(props);

        this.state = {
            postEditorText: 'Write your post!'
        }
    }

    handleEditorTextChange = (event) => {
        this.setState({postEditorText: event.target.value});
    }

    handleTweetButtonClick = () => {
        const newTweet = new Tweet(uuid(), this.props.user, this.state.postEditorText, false);
        this.props.postTweet(newTweet);
    }

    render() {
        return (
            <div className="newsfeed-post-editor">
                <ProfilePicture user={this.props.user}/>
                <textarea onChange={this.handleEditorTextChange} className="post-tweet-text-box">{this.state.postEditorText}</textarea>
                <CustomButton onClick={this.handleTweetButtonClick} btnType={ButtonType.TWEET}/>
            </div>
        );
    }
}

export default NewsFeedPostEditor;