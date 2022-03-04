import React, {Component} from 'react';
import ProfilePicture from "../profile/ProfilePicture";
import { Users } from "../data/users";
import CustomButton, { ButtonType } from "../CustomButton";

class NewsFeedPostEditor extends Component {
    render() {
        return (
            <div className="newsfeed-post-editor">
                <ProfilePicture user={Users.Meitar}/>
                <textarea className="post-tweet-text-box" defaultValue="Write your post..."/>
                <CustomButton btnType={ButtonType.TWEET}/>
            </div>
        );
    }
}

export default NewsFeedPostEditor;