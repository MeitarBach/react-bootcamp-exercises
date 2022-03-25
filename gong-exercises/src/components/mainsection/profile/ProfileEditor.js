import React, {Component} from 'react';
import CustomButton, { ButtonType } from "../../common/CustomButton";
import PropTypes from 'prop-types';

class FormInput extends Component {
    render() {
        return (
            <div className="form-input">
                <label htmlFor={this.props.fieldName}>{this.props.labelValue}</label>
                {this.props.type === 'textarea'
                    ? <textarea name={this.props.fieldName} value={this.props.value} onChange={this.props.onChange}/>
                    : <input type={this.props.type} value={this.props.value} name={this.props.fieldName} onChange={this.props.onChange}/>}
            </div>
        );
    }
}

FormInput.propTypes = {
    fieldName: PropTypes.string.isRequired,
    labelValue: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}

class ProfileEditor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            bio: '',
            location: '',
            website: '',
            birthday: '',
        }
    }

    componentDidMount() {
        this.setState({
            name: this.props.user.fullName,
            bio: this.props.user.about,
            location: this.props.user.location,
            website: this.props.user.website,
            birthday: this.props.user.joinDate,
        })
    }

    handleFieldChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    saveProfileDetails = () => {
        const userUpdates = {
            fullName: this.state.name,
            about: this.state.bio,
            location: this.state.location,
            website: this.state.website,
            birthday: this.state.birthday,
        }
        this.props.updateUserProfile(userUpdates);
        this.props.closeProfileEditor();
    }

    render() {
        return (
            <dialog open={this.props.showDialog} className="profile-editor">
                <div className="profile-editor__header">
                    <CustomButton onClick={this.props.closeProfileEditor} btnType={ButtonType.CLOSE_BUTTON}/>
                    <span>Edit Profile</span>
                    <CustomButton onClick={this.saveProfileDetails} btnType={ButtonType.SAVE_BUTTON}/>
                </div>
                <form className="profile-editor__form">
                    <FormInput fieldName="name" labelValue="Name:" type="text" value={this.state.name} onChange={this.handleFieldChange}/>
                    <FormInput fieldName="bio" labelValue="Bio:" type="textarea" value={this.state.bio} onChange={this.handleFieldChange}/>
                    <FormInput fieldName="location" labelValue="Location:" value={this.state.location} type="text" onChange={this.handleFieldChange}/>
                    <FormInput fieldName="website" labelValue="Website:" value={this.state.website} type="text" onChange={this.handleFieldChange}/>
                    <FormInput fieldName="birthday" labelValue="Birthday:" value={this.state.birthday} type="date" onChange={this.handleFieldChange}/>
                </form>
            </dialog>
        );
    }
}

export default ProfileEditor;