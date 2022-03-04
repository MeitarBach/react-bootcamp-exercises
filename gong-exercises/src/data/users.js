import PropTypes from 'prop-types';
import meitarProfilePic from '../assets/images/meitar-profile.jpeg'
import meitarCoverPhoto from '../assets/images/tignes.jpeg'

export const Users = {
    Meitar: {
        firstName: "Meitar",
        lastName: "Bach",
        fullName: "Meitar Bach",
        nickName: "String",
        profilePic: meitarProfilePic,
        coverPhoto: meitarCoverPhoto,
    }
}

export const userShape = {
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    fullName: PropTypes.string,
    nickName: PropTypes.string,
    profilePic: PropTypes.any,
    coverPhoto: PropTypes.any,
}